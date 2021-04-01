import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as signalR from '@aspnet/signalr';
import { Driver, Message, Order, Trip, User } from 'src/_models';
import { AccountService } from 'src/_services';
import { OrderService } from 'src/_services/order/order.service';
import { SignalRService } from 'src/_services/signal-r.service';
import { TripService } from 'src/_services/trip/trip.service';
import { Location } from '@angular/common';
import { WalletService } from 'src/_services/wallet/wallet.service';
import { AlertController } from '@ionic/angular';
import { DriverService } from 'src/_services/driver/driver.service';
import { Observable } from 'rxjs';
import { ChatService } from 'src/_services/chat/chat.service';
import { environment } from 'src/environments/environment';
import { Plugins } from '@capacitor/core';

const { Geolocation } = Plugins;
declare var google: any;

@Component({
  selector: 'app-driving',
  templateUrl: './driving.page.html',
  styleUrls: ['./driving.page.scss'],
})
export class DrivingPage implements OnInit {
  public currentTrip: Trip;

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
  
  totalPrice: number;

  //Map
  map: any;
  latitude: any;
  longitude: any;

  address: string;

  userLatitude: any;
  userLongitude: any;

  userDestinationLat: any;
  userDestinationLng: any;
  
  @ViewChild('map', { read: ElementRef, static: false }) mapRef: ElementRef;

  constructor(private route: Router,
    private orderService: OrderService,
    private accountService: AccountService,
    private tripService: TripService,
    public signalRService: SignalRService,
    private locationPage: Location,
    private walletService: WalletService,
    private alertController: AlertController,
    private driverService: DriverService,
    private chatService: ChatService) {
    if (this.isDrivingNow == true) {
      this.getAcceptedTrip()
    }
  }

  ngOnInit(): void {
    this.chatService.retrieveMappedObject()
      .subscribe((receivedObj: Message) => { this.addToInbox(receivedObj); });  // calls the service method to get the new messages sent

    this.getData();

    if (this.isDrivingNow == true) {
      this.getAcceptedTrip()
    }

    const connection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Information)
      .withUrl(`${environment.apiUrl}/orderHub`, {
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets
      })
      .build();

    connection.start().then(function () {
      console.log('signalR Connected in driving');
    }).catch(function (err) {
      return console.log(err);
    });

    connection.on('BroadcastMessage', () => {
      this.getData();
      this.getAcceptedTrip();
      //this.postLocation();
    });
  }

  ionViewDidEnter() {
    if (this.isDrivingNow == true) {
      //have to optimise this
      //this.postLocation();
      this.getAcceptedTrip()
    }

    if (this.isDrivingNow == true) {
      this.loadMap(this.mapRef);
    }
  }

  //Actively get the driver's location to illustrate the car img on traveller's phone
  async postLocation() {
    const coordinates = await Geolocation.getCurrentPosition();
    const myLatLng = { lat: coordinates.coords.latitude, lng: coordinates.coords.longitude };

    this.accountService.getById(this.applicationUserId)
      .subscribe(user => {
        this.driverService.locateDriver(user.driverId, myLatLng.lat, myLatLng.lng)
          .subscribe(x => {
            console.log(x);
          })
      })


  }

  //MAP FUNCTIONALLITY
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

  //Set directions to user's location
  async navigateToUserAndCalculateDistance() {
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const coordinates = await Geolocation.getCurrentPosition();
    const myLatLng = { lat: coordinates.coords.latitude, lng: coordinates.coords.longitude };
    let usetLat = this.order.locationLat
    let userLng = this.order.locationLong;
    let order = this.order;
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
  msgDto: Message = new Message();
  msgInboxArray: Message[] = [];

  send(): void {
    if (this.msgDto) {
      if (this.msgDto.text.length == 0) {
        window.alert("Text field is required.");
        return;
      } else {
        this.msgDto.user = `${this.accountService.userValue.firstName} ${this.accountService.userValue.lastName}`;
        this.chatService.broadcastMessage(this.msgDto, 'group1');
      }
    }
  }

  addToInbox(obj: Message) {
    let newObj = new Message();
    newObj.user = obj.user;
    newObj.text = obj.text;
    this.msgInboxArray.push(newObj);
  }

  //Report
  reportProblem() {
    this.route.navigate(['menu/report']);
  }

  //Getting all orders
  getData() {
    this.orderService.getAllOrders().subscribe(data => {

      if (data == null) {
        return;
      }

      this.orders = data;
    })
  }

  //Accept order and manage the data inside
  acceptOrder(order) {

    //Get user's id to get drivers data
    this.accountService.getById(this.applicationUserId)
      .subscribe(user => {

        //Get driver's data
        this.driverService.getDriver(user.driverId)
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
                  this.accountService.updateDriving(applicationUserId, true)
                    .subscribe(() => {
                    });

                  this.isDrivingNow = this.accountService.userValue.isDrivingNow;
                  order.acceptedBy = applicationUserId;

                  //Accepting order
                  this.orderService.acceptOrder(order.id, applicationUserId)
                    .subscribe(() => {
                      this.chatService.stop();
                      this.chatService.start();
                    })

                  let orderId = order.id;
                  let data = { orderId, applicationUserId, order };

                  //Creating trip to manage data
                  this.tripService.createTrip(data)
                    .subscribe(() => {
                    })
                  this.route.navigate(['menu/driving']);
                }
              })
          })
      })
  }

  //Navigate to user and discharge his wallet.
  startTrip() {
    this.tripService.startTrip(this.currentTrip.id)
      .subscribe(trip => {
        if (trip) {
          this.tripStatus = trip.status;
          this.walletService.dischargeWallet(this.applicationUserId, this.tripPriceForDriver)
            .subscribe(x => {
            })
        }
      })
  }

  //Check drivers wallet before gettin an order
  checkIfDriverHasMoney(order: Order) {
    this.accountService.getById(this.applicationUserId)
      .subscribe(user => {
        this.driverService.getDriver(user.driverId)
          .subscribe(driver => {
            this.tripPriceForDriver = (order.totalPrice * (driver.comission / 100));
            this.walletService.getMyWallet(this.applicationUserId)
              .subscribe(wallet => {
                if (wallet.ammount < this.tripPriceForDriver) {
                  this.NotEnoughCashAlert();
                  return 'No Cash';
                } else {
                  this.walletService.dischargeWallet(this.applicationUserId, this.tripPriceForDriver)
                    .subscribe(x => {
                      return;
                    })
                }
              })
          })
      })
  }

  //Cancelling the accepted trip
  cancelTrip() {
    this.tripService.completeTrip(this.currentTrip.id)
      .subscribe(trip => {
        if (trip) {
          this.tripStatus = trip.status;
        }
        this.orderService.completeOrder(this.currentTrip.orderId)
          .subscribe(data => {
          });
      })

    let driverId = this.accountService.userValue.id;
    let value = this.accountService.userValue.isDrivingNow = false;

    this.accountService.updateDriving(driverId, value)
      .subscribe(() => {
      });

    this.isDrivingNow = this.accountService.userValue.isDrivingNow;
  }

  //Get data for accepted trip
  getAcceptedTrip() {
    this.tripService.getTrip(this.driverId)
      .subscribe(x => {
        if (x == null) {
          return;
        }
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
          this.accountService.getById(this.driverId).subscribe(driver => {
            this.driverService.getDriver(driver.driverId)
              .subscribe(s => {
                this.tripPriceForDriver = (order.totalPrice * (s.comission / 100));
              })
          })

        })
        this.route.navigate(['menu/driving']);
      });
  }

  //Finishing the accepted trip
  finishTrip() {
    this.tripService.completeTrip(this.currentTrip.id)
      .subscribe(trip => {
        if (trip) {
          this.tripStatus = trip.status;
        }
        this.orderService.completeOrder(this.currentTrip.orderId)
          .subscribe(data => {

          });
      })

    //trigger the driver's driving now property to false
    let driverId = this.accountService.userValue.id;
    let value = this.accountService.userValue.isDrivingNow = false;

    this.accountService.updateDriving(driverId, value)
      .subscribe(data => {
      });

    this.isDrivingNow = this.accountService.userValue.isDrivingNow;
  }

  goBack() {
    this.locationPage.back();
  }

  //ALERTS
  async NotEnoughCashAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Balance',
      message: 'Your wallet balance is not enough for this order!',
      buttons: ['OK']
    });

    await alert.present();
  }

}
