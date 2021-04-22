import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
import { AlertController, PopoverController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { Message, Order, Trip } from 'src/_models';
import { AccountService } from 'src/_services';
import { ChatService } from 'src/_services/chat/chat.service';
import { DriverService } from 'src/_services/driver/driver.service';
import { OrderService } from 'src/_services/order/order.service';
import { ProfitService } from 'src/_services/profit/profit.service';
import { SignalRService } from 'src/_services/signal-r.service';
import { TripService } from 'src/_services/trip/trip.service';
import { WalletService } from 'src/_services/wallet/wallet.service';
import { LanguagePopoverPage } from '../language-popover/language-popover.page';

const { Geolocation } = Plugins;
declare var google: any;
@Component({
  selector: 'app-driving-mode',
  templateUrl: './driving-mode.page.html',
  styleUrls: ['./driving-mode.page.scss'],
})
export class DrivingModePage implements OnInit {
  public currentTrip: Trip;
  categoryType;

  tripStatus: string;

  location: string;
  destination: string;

  tripDistance: any;
  tripPriceForDriver: number;

  driverId = this.tripService.currentTripDriverId;
  applicationUserId = this.accountService.userValue.id;
  isDrivingNow = this.accountService.userValue.isDrivingNow;

  order: Order;
  orders: Order[] = [];
  closestOrders: Order[] = [];

  totalPrice: number;

  subscription: Subscription;

  //Map
  map: any;

  address: string;

  userLatitude: any;
  userLongitude: any;

  userDestinationLat: any;
  userDestinationLng: any;

  distance: string;
  eta: string;

  messages = this.chatService.messages;
  chatStyle = "";

  orderDiv = document.getElementById("orderDiv");
  @ViewChild('map', { read: ElementRef, static: false }) mapRef: ElementRef;

  constructor(private route: Router,
    private orderService: OrderService,
    private accountService: AccountService,
    private tripService: TripService,
    public signalRService: SignalRService,
    private walletService: WalletService,
    private alertController: AlertController,
    private driverService: DriverService,
    private chatService: ChatService,
    private profitService: ProfitService,
    private translate: TranslateService,
    private popoverController: PopoverController) {
    this.translate.setDefaultLang(this.accountService.userValue.choosenLanguage);
  }

  ngOnInit() {
    this.chatService.retrieveMappedObject()
      .subscribe((receivedObj: Message) => { this.addToInbox(receivedObj); });  // calls the service method to get the new messages sent
    this.getAcceptedTrip();
  }

  ionViewDidEnter() {
    if (this.accountService.userValue.isDrivingNow == true) {
      this.getAcceptedTrip();
      this.chatService.stop();
      this.chatService.start();
    }

  }

  async loadMap(mapRef: ElementRef) {
    const coordinates = await Geolocation.getCurrentPosition();
    const myLatLng = { lat: coordinates.coords.latitude, lng: coordinates.coords.longitude };
    const options: google.maps.MapOptions = {
      center: new google.maps.LatLng(myLatLng.lat, myLatLng.lng),
      zoom: 15,
      disableDefaultUI: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(mapRef.nativeElement, options);
    let geocoder = new google.maps.Geocoder;

    google.maps.event.addListener(this.map, 'idle', async () => {
      var center = this.map.getCenter();
      var lat = center.lat();
      var lng = center.lng();

      const myLatLng = { lat: lat, lng: lng };

      //Get Location
      geocoder.geocode({ location: myLatLng },
        (
          results: google.maps.GeocoderResult[],
          status: google.maps.GeocoderStatus
        ) => {
          if (status == "OK") {
            if (results[0]) {
              this.address = results[0].formatted_address;
            }
          }
        })
    })
  }

  async navigateToUserAndCalculateDistance() {
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const coordinates = await Geolocation.getCurrentPosition();
    const myLatLng = { lat: coordinates.coords.latitude, lng: coordinates.coords.longitude };
    let usetLat = this.order.locationLat
    let userLng = this.order.locationLong;
    directionsService.route(
      {
        origin: {
          lat: myLatLng.lat,
          lng: myLatLng.lng
        },
        destination: {
          lat: usetLat,
          lng: userLng,
        },
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (response, status) => {
        if (status === "OK") {

          directionsRenderer.setDirections(response);
          window.open(`https://www.google.com/maps/dir/?api=1&destination=${this.userLatitude},${this.userLongitude}&travelmode=driving`);

        } else {
          window.alert("Directions request failed due to " + status);
        }
      }
    );
    directionsRenderer.setMap(this.map);
  }

  //Set directions to user's destination
  async navigateToPointAndCalculateDistance() {
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const coordinates = await Geolocation.getCurrentPosition();
    const myLatLng = { lat: coordinates.coords.latitude, lng: coordinates.coords.longitude };

    directionsService.route(
      {
        origin: {
          lat: myLatLng.lat,
          lng: myLatLng.lng
        },
        destination: {
          lat: this.userDestinationLat,
          lng: this.userDestinationLng,
        },
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (response, status) => {
        if (status === "OK") {
          this.startTrip();
          directionsRenderer.setDirections(response);
          window.open(`https://www.google.com/maps/dir/?api=1&destination=${this.userDestinationLat},${this.userDestinationLng}&travelmode=driving`);
        } else {
          window.alert("Directions request failed due to " + status);
        }
      }
    );
    directionsRenderer.setMap(this.map);
  }

  //CHAT
  chat() {
    var x = document.getElementById("chat");

    if (x.style.display === "none") {
      x.style.display = "block";
      this.chatStyle = 'block';
    } else {
      x.style.display = "none";
      this.chatStyle = 'none';
    }
  }

  msgDto: Message = new Message();
  msgInboxArray: Message[] = [];

  send(): void {
    if (this.msgDto) {
      if (this.msgDto.text.length == 0) {
        window.alert("Text field is required.");
        return;
      } else {
        this.msgDto.user = `${this.accountService.userValue.firstName} ${this.accountService.userValue.lastName}`;
        var c = this.chatService.broadcastMessage(this.msgDto);
      }
    }
  }

  clearMessages() {
    this.messages.length = 0;
  }

  addToInbox(obj: Message) {
    let newObj = new Message();
    newObj.user = obj.user;
    newObj.text = obj.text;
    this.msgInboxArray.push(newObj);
    this.msgDto.text = '';
  }

  //Navigate to user and discharge his wallet.
  startTrip() {
    this.tripService.startTrip(this.currentTrip.id)
      .subscribe(trip => {
        if (trip) {
          this.tripStatus = trip.status;
          this.walletService.dischargeWallet(this.applicationUserId, this.tripPriceForDriver)
            .subscribe(x => {
              this.profitService.addToProfit(this.tripPriceForDriver)
                .subscribe(() => { });
            })
        }
      })
  }

  finishTrip() {
    this.tripService.completeTrip(this.currentTrip.id)
      .subscribe(trip => {
        if (trip) {
          this.tripStatus = trip.status;
        }
        this.orderService.completeOrder(this.currentTrip.orderId)
          .subscribe(() => { });
        
      })

    //trigger the driver's driving now property to false
    let userId = this.accountService.userValue.id;
    let value = this.accountService.userValue.isDrivingNow = false;

    this.accountService.updateDriving(userId, value)
      .subscribe();
    this.isDrivingNow = this.accountService.userValue.isDrivingNow;
    this.route.navigate(['menu/driving'])
  }

  async openLanguagePopover(ev) {
    const popover = await this.popoverController.create({
      component: LanguagePopoverPage,
      event: ev
    });
    await popover.present();
  }

  async calculateEta(order) {
    const directionsService = new google.maps.DirectionsService();
    const coordinates = await Geolocation.getCurrentPosition();
    const myLatLng = { lat: coordinates.coords.latitude, lng: coordinates.coords.longitude };
    directionsService.route(
      {
        origin: {
          lat: myLatLng.lat,
          lng: myLatLng.lng
        },
        destination: {
          lat: order.locationLat,
          lng: order.locationLong,
        },
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (response, status) => {
        if (status === "OK") {
          this.eta = response.routes[0].legs[0].duration.text;
          order.km = response.routes[0].legs[0].distance.value / 1000;
          order.distanceText = response.routes[0].legs[0].distance.text;
          order.eta = response.routes[0].legs[0].duration.text;
          this.distance = order.distanceText;
        }
      }
    );
  }

  getAcceptedTrip() {
    this.tripService.getTrip(this.driverId)
      .subscribe(x => {
        if (x == null) {
          return;
        }
        this.loadMap(this.mapRef);
        this.tripStatus = x.status;
        this.currentTrip = x;

        this.orderService.getOrderById(x.orderId).subscribe(order => {
          x.order = order;
          this.order = x.order;

          this.location = order.location;
          this.destination = order.destination;

          this.totalPrice = order.totalPrice;

          this.userLatitude = order.locationLat;
          this.userLongitude = order.locationLong;

          this.userDestinationLat = order.destinationLat;
          this.userDestinationLng = order.destinationLong;

          this.tripDistance = order.tripDistance;
          this.calculateEta(order);

          this.driverService.getDriver(this.accountService.userValue.driverId)
            .subscribe(s => {
              this.tripPriceForDriver = (order.totalPrice * (s.comission / 100));
            })

        })
      });
  }

}
