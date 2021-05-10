import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
import { AlertController, PopoverController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { AnyTxtRecord } from 'dns';
import { Order } from 'src/_models';
import { AccountService } from 'src/_services';
import { DriverService } from 'src/_services/driver/driver.service';
import { OrderService } from 'src/_services/order/order.service';
import { TripService } from 'src/_services/trip/trip.service';
import { WalletService } from 'src/_services/wallet/wallet.service';
import { LanguagePopoverPage } from '../language-popover/language-popover.page';

const { Geolocation } = Plugins;
declare var google: any;

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.page.html',
  styleUrls: ['./order-details.page.scss'],
})
export class OrderDetailsPage implements OnInit {
  public orderId = this.route.snapshot.params.id;
  tripPriceForDriver: number;
  applicationUserId = this.accountService.userValue.id;
  isDrivingNow = this.accountService.userValue.isDrivingNow;
  myLat;
  myLng;

  order: Order = {
    id: '',
    location: '',
    locationLat: '',
    locationLong: '',
    destination: '',
    destinationLat: '',
    destinationLong: '',
    increasePrice: '',
    isAccepted: null,
    isCompleted: null,
    createdOn: null,
    status: null,
    applicationUser: null,
    applicationUserId: null,
    totalPrice: null,
    acceptedBy: null,
    tripDistance: null,
    userDistance: null,
    withPets: null,
    withStroller: null,
    carType: null,
    isRated: null,
    km: null,
    distanceText: null,
    eta: null,
    isDeleted: null,
    isDriverArrived: null,
  };
  mapId: any
  orderDiv: any;
  eta: any;
  distance: any;
  map: any;
  mapVisible = false;
  @ViewChild('map', { read: ElementRef, static: false }) mapRef: ElementRef;

  constructor(private translate: TranslateService,
    private popoverController: PopoverController,
    private accountService: AccountService,
    private router: Router,
    private route: ActivatedRoute,
    private orderService: OrderService,
    private driverService: DriverService,
    private walletService: WalletService,
    private tripService: TripService,
    private alertController: AlertController) {
    this.translate.setDefaultLang(this.accountService.userValue.choosenLanguage);

  }
  ngOnInit() {
    this.mapId = document.getElementById("map");
    this.mapId.style.display = 'none';
    this.orderDiv = document.getElementById("order");
    this.orderDiv.style.display = 'block';
  }

  ionViewDidEnter() {
    this.orderDiv.style.display = 'block';
    this.mapId.style.display = 'none';

    this.orderService.getOrderById(this.orderId)
      .subscribe(order => {
        if (order == null) {
          return this.OrderTaken();
        }
        this.order = order;
        this.calculateDistance(this.order);
        this.calculateEta(this.order);
    this.loadMap(this.mapRef);

      })

  }

  async loadMap(mapRef: ElementRef) {
    const userLocationLatLng = { lat: +this.order.locationLat, lng: +this.order.locationLong };
    const options: google.maps.MapOptions = {
      center: new google.maps.LatLng(userLocationLatLng.lat, userLocationLatLng.lng),
      zoom: 14,
      disableDefaultUI: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      zoomControl: false
    };

    if (mapRef != null) {
      this.map = new google.maps.Map(mapRef.nativeElement, options);
    }

    var icon = {
      url: 'https://www.freeiconspng.com/uploads/-human-male-man-people-person-profile-red-user-icon--icon--23.png',
      scaledSize: new window.google.maps.Size(25, 25),
      anchor: { x: 10, y: 10 }
    };

    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(userLocationLatLng),
      icon: icon,
      map: this.map
    });
    this.navigateToUserAndCalculateDistance();
  }

  async navigateToUserAndCalculateDistance() {
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const coordinates = await Geolocation.getCurrentPosition();
    const myLatLng = { lat: coordinates.coords.latitude, lng: coordinates.coords.longitude };
    const userLatLng = { lat: this.order.locationLat, lng: this.order.locationLong };
    let userLat = +userLatLng.lat;
    let userLng = +userLatLng.lng;

    directionsService.route(
      {
        origin: {
          lat: myLatLng.lat,
          lng: myLatLng.lng
        },
        destination: {
          lat: userLat,
          lng: userLng,
        },
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (response, status) => {
        if (status === "OK") {
          directionsRenderer.setDirections(response);
        } else {
          window.alert("Directions request failed due to " + status);
        }
      }
    );
    directionsRenderer.setMap(this.map);
  }

  hideMap() {
    this.orderDiv.style.display = 'block';
    this.mapId.style.display = 'none';
    this.mapVisible = false;

    if (this.orderDiv.cancelable) {
      this.orderDiv.preventDefault();
    }

    if (this.mapId.cancelable) {
      this.mapId.preventDefault();
    }
  }

  showMap() {
    this.orderDiv.style.display = 'none';
    this.mapId.style.display = 'block';
    this.mapVisible = true;
    this.loadMap(this.mapRef);
    

    if (this.orderDiv.cancelable) {
      this.orderDiv.preventDefault();
    }

    if (this.mapId.cancelable) {
      this.mapId.preventDefault();
    }
  }

  async calculateDistance(order) {
    const coordinates = await Geolocation.getCurrentPosition();
    const myLatLng = { lat: coordinates.coords.latitude, lng: coordinates.coords.longitude };

    const orderLatLng = { lat: order.locationLat, lng: order.locationLong };
    var p1 = new google.maps.LatLng(myLatLng.lat, myLatLng.lng);
    var p2 = new google.maps.LatLng(orderLatLng.lat, orderLatLng.lng);
    this.distance = calcDistance(p1, p2);

    //calculates distance between two points in km's
    function calcDistance(p1, p2) {
      return (google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000).toFixed(2);
    }
  }

  async calculateEta(order) {
    const coordinates = await Geolocation.getCurrentPosition();
    const myLatLng = { lat: coordinates.coords.latitude, lng: coordinates.coords.longitude };
    this.myLat = myLatLng.lat;
    this.myLng = myLatLng.lng;

    const directionsService = new google.maps.DirectionsService();
    const orderLatLng = { lat: order.locationLat, lng: order.locationLong };
    let orderLat = +orderLatLng.lat;
    let orderLng = +orderLatLng.lng;

    directionsService.route(
      {
        origin: {
          lat: +this.myLat,
          lng: +this.myLng
        },
        destination: {
          lat: orderLat,
          lng: orderLng,
        },
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (response, status) => {
        if (status === "OK") {
          order.eta = response.routes[0].legs[0].duration.text;
        }
      }
    );
  }

  acceptOrder(order) {
    this.driverService.getDriverActiveCar(this.accountService.userValue.driverId)
      .subscribe(car => {
        if (car.typeId == 1 && order.carType == 'Comfort') {
          return this.WrongCarAlert();
        } else {
          //Get user's id to get drivers data

          //Get driver's data
          this.driverService.getDriver(this.accountService.userValue.driverId)
            .subscribe(driver => {
              this.tripPriceForDriver = (order.totalPrice * (driver.comission / 100));

              //Get drivers wallet
              this.walletService.getMyWallet(this.applicationUserId)
                .subscribe(wallet => {
                  if (wallet.ammount < this.tripPriceForDriver) {
                    this.NotEnoughCashAlert();
                    return;
                  } else {
                    let applicationUserId = this.accountService.userValue.id;
                    this.accountService.userValue.isDrivingNow = true;
                    this.accountService.updateDriving(this.applicationUserId, true)
                      .subscribe(() => {
                      });

                    this.isDrivingNow = this.accountService.userValue.isDrivingNow;
                    order.acceptedBy = applicationUserId;

                    //Accepting order
                    this.orderService.acceptOrder(order.id, applicationUserId)
                      .subscribe(() => {

                        this.orderService.updateOrderEta(orderId, order.eta)
                          .subscribe();
                      });

                    let orderId = order.id;
                    let data = { orderId, applicationUserId, order };

                    //Creating trip to manage data
                    this.tripService.createTrip(data)
                      .subscribe(() => {
                      });
                    this.router.navigate(['menu/driving-mode'])
                  }
                });
            });
        }
      });
  }

  async openLanguagePopover(ev) {
    const popover = await this.popoverController.create({
      component: LanguagePopoverPage,
      event: ev
    });
    await popover.present();
  }

  async NotEnoughCashAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Balance',
      message: 'Your wallet balance is not enough for this order!',
      buttons: ['OK']
    });

    await alert.present();
  }

  async OrderTaken() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Sorry',
      message: 'This order is no longer active',
      buttons: [{
        text: 'OK',
        handler: () => {
          this.router.navigate(['menu/driving']);
        }
      },
      ],
    });

    await alert.present();
  }

  async WrongCarAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Order information',
      message: 'Your car is of type "Normal" but the order desired car type is "Comfort"! ',
      buttons: ['OK'],

    });

    await alert.present();
  }
}
