import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import * as signalR from '@aspnet/signalr';
import { AlertController, IonDatetime, Platform, PopoverController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { Order, Trip } from 'src/_models';
import { AccountService } from 'src/_services';
import { OrderService } from 'src/_services/order/order.service';
import { TranslateService } from '@ngx-translate/core';
import { LanguagePopoverPage } from '../language-popover/language-popover.page';
import { Subscription } from 'rxjs';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
@Component({
  selector: 'app-travelling',
  templateUrl: './travelling.page.html',
  styleUrls: ['./travelling.page.scss'],
})
export class TravellingPage implements OnInit {
  customPickerOptions: any;

  @ViewChild('mydt') mydt: IonDatetime;
  public currentTrip: Trip;
  private user = this.accountService.userValue;
  public loading: boolean;
  public progress: number;
  isLoggedIn;
  order: Order;
  form: FormGroup;
  orderStatus: string;
  orderTotalPrice: any;
  orderTotalDestination: any;
  estimatedDuration: any;
  choosedLocDest = false;

  //Car html properties;
  carModel = "";
  carColor = "";

  driverIncreased: number;
  driverPrice: number;
  increasedBy: string;
  //User html properties
  firstName = "";
  lastName = "";
  carValue = 'normal';
  location: string;
  destination: string;

  isSubmitted = false;
  isCompleted = false;

  private subscriptions: Subscription[] = [];
  pushes: any = [];
  constructor(private formBuilder: FormBuilder,
    private route: Router,
    public orderService: OrderService,
    private accountService: AccountService,
    private translate: TranslateService,
    private popoverController: PopoverController,
    private alertController: AlertController,
    private localNotifications: LocalNotifications,
    public plt: Platform) {
    this.translate.setDefaultLang(this.accountService.userValue.choosenLanguage);
    this.translate.get(['Now', 'Cancel', 'Choose'])
      .subscribe(text => {
        this.customPickerOptions = {
          buttons: [
            {
              text: text['Now'],
              handler: () => {
                let date = new Date();
                this.mydt.value = `${date.getHours()}:${date.getMinutes()}`;
                console.log(this.mydt.value)
              }
            },
            {
              text: text['Cancel']
            },
            {
              text: text['Choose'],
              handler: (res) => {
                this.mydt.value = `${res.hour.text}:${res.minute.text}`;
                // this.form.value.pickUpTime = this.mydt.value;
                console.log(res.hour.text)
                console.log(res.minute.text)

                //set form value to chosen time
              }
            }
          ]
        }
      })
  }

  ngOnInit() {

    this.loading = true;
    this.form = this.formBuilder.group({
      applicationUserId: [''],
      location: this.orderService.chosenLocation,
      locationLat: this.orderService.userLocationLat,
      locationLong: this.orderService.userLocationLong,
      destination: this.orderService.chosenDestination,
      destinationLat: this.orderService.userDestinationLat,
      destinationLong: this.orderService.userDestinationLong,
      totalPrice: this.orderTotalPrice,
      tripDistance: 0,
      userDistance: 0,
      increasePrice: [0],
      status: 'Waiting',
      eta: '',
      withPets: false,
      withStroller: false,
      special: false,
      carType: this.carValue,
      description: '',
      pickUpTime: ''
    })

    const connection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Information)
      .withUrl(`${environment.signalRUrl}/orderHub`)
      .build();

    connection.start().then(function () {
      console.log('signalR Connected in travelling');
    }).catch(function (err) {
      return console.log(err);
    });

    connection.on('CreatedOrder', () => {
      this.checkorder();
    });

    connection.on("IncrementDecrement", (orderId) => {
      this.subscriptions.push(this.orderService.getOrderById(orderId)
        .subscribe((data) => {
          (Math.round(this.orderTotalPrice * 100) / 100);
          this.order.totalPrice = data.totalPrice;
        }));
    });

    connection.on('OfferMorePrice', (orderId: string) => {
      this.subscriptions.push(this.orderService.getOrderById(orderId)
        .subscribe(x => {
          if (x.id == this.order.id) {
            if (x.increasedByDriver >= 0.5) {
              this.driverPrice = x.increasedByDriver;
              this.driverIncreased = x.increasedByDriver + this.orderTotalPrice;
              this.increasedOrder();
            }
          }
        }))
    });

    connection.on('OrderAccepted', () => {
      this.subscriptions.push(this.orderService.getMyOrder(this.user.id)
        .subscribe(x => {
          if (x.status == 'Accepted') {
            this.presentOrderAcceptedNotification();
            this.checkorder();
          }
        }))
    });

    connection.on('LocateDriver', (driverId: string) => {

    });
  }

  presentOrderAcceptedNotification() {
    this.translate.get(['Order', 'Your order is accepted'])
      .subscribe(text => {
        this.localNotifications.schedule({
          id: 1,
          title: text["Order"],
          text: text["Your order is accepted"],
          data: { secret: 'secret' }
        })
      })

  }

  ionViewDidEnter() {
    this.form.value.carType = 'normal';
    this.carValue = 'normal';
    if (this.orderService.chosenDestination && this.orderService.chosenLocation) {
      this.choosedLocDest = true;
    }

    this.checkorder();
    if (this.orderService.selectedFavourite) {
      this.orderService.chosenLocation = this.orderService.selectedFavourite.location
      this.form.get('location').setValue(this.orderService.selectedFavourite.location);
      this.form.get('locationLat').setValue(+this.orderService.selectedFavourite.locationLat);
      this.form.get('locationLong').setValue(+this.orderService.selectedFavourite.locationLong);

      this.orderService.chosenDestination = this.orderService.selectedFavourite.destination;
      this.form.get('destination').setValue(this.orderService.selectedFavourite.destination);
      this.form.get('destinationLat').setValue(+this.orderService.selectedFavourite.destinationLat);
      this.form.get('destinationLong').setValue(+this.orderService.selectedFavourite.destinationLong);
    } else {
      this.form.get('location').setValue(this.orderService.chosenLocation);
      this.form.get('locationLat').setValue(this.orderService.userLocationLat);
      this.form.get('locationLong').setValue(this.orderService.userLocationLong);

      this.form.get('destination').setValue(this.orderService.chosenDestination);
      this.form.get('destinationLat').setValue(this.orderService.userDestinationLat);
      this.form.get('destinationLong').setValue(this.orderService.userDestinationLong);
    }

    if (this.isCompleted) {
      this.form.get('location').setValue(this.order.location);
      this.form.get('destination').setValue(this.order.destination);
    }
  }


  //GET LOCATION AND DESTINATION AND SEARCH DRIVER
  get f() { return this.form.controls; }

  locationMap() {
    this.route.navigate(['menu/location'])
  }

  destinationMap() {
    this.route.navigate(['menu/destination'])
  }

  onSubmit() {
    this.isSubmitted = true;
    this.form.value.carType = this.carValue;
    //Gets the loc and lng if we come from "Favourites" page
    if (this.form.value.location == undefined) {
      this.locationError();
      this.isSubmitted = false;

    }

    if (this.form.value.destination == undefined) {
      this.destinationError();
      this.isSubmitted = false;

    }

    if (!this.form.valid) {
      return;
    }

    //Gets information for directions - price, km and etc
    const directionsService = new google.maps.DirectionsService();

    directionsService.route(
      {
        origin: {
          lat: this.form.value.locationLat,
          lng: this.form.value.locationLong
        },
        destination: {
          lat: this.form.value.destinationLat,
          lng: this.form.value.destinationLong,
        },
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (response, status) => {
        if (status === "OK") {
          this.estimatedDuration = response.routes[0].legs[0].duration.text;
          this.orderTotalDestination = response.routes[0].legs[0].distance.value / 1000;
          this.orderTotalPrice = this.orderTotalDestination * 0.90;
          //Additional option with additional price
          if (this.form.value.withPets == true) {
            this.orderTotalPrice += 2.20;
          }
          if (this.form.value.carType == "comfort") {
            this.orderTotalPrice += 1;
          }

          this.form.value.totalPrice = this.orderTotalPrice;
          this.form.value.tripDistance = this.orderTotalDestination;

          this.form.value.increasePrice = (+this.form.value.increasePrice);
          this.form.value.eta = this.estimatedDuration;
          this.form.value.applicationUserId = this.user.id;
          this.isSubmitted = true;
          if (!this.form.valid) {
            return false;
          } else {
            this.subscriptions.push(this.orderService.createOrder(this.form.value)
              .subscribe(x => {
                this.form.value.locationLat = this.form.value.locationLat.toString();
                this.form.value.locationLong = this.form.value.locationLong.toString();
                this.orderStatus = this.form.value.status;
                this.subscriptions.push(this.orderService.getMyOrder(this.user.id)
                  .subscribe());
              }))
          }
          console.log(this.order)
        } else {
          this.isSubmitted = false;
        }
      }
    );
  }

  offer(value) {
    this.form.value.increasePrice = value;
  }

  //Increase the price for the order.
  selector($event) {
    let amount = +$event;
    if (amount != 0 || $event != "") {
      this.subscriptions.push(this.orderService.increaseOrderPrice(this.order.id, amount)
        .subscribe());
    }
  }

  increment() {
    this.subscriptions.push((this.orderService.incrementOrderPrice(this.order.id)
      .subscribe(() => { })));
  }

  decrement() {
    if (this.orderTotalPrice >= 1) {
      this.subscriptions.push(this.orderService.decrementOrderPrice(this.order.id)
        .subscribe(() => { }));
    }

  }

  priceUpdate() {
    if (this.form.value.withPets == false) {
      this.orderTotalPrice = this.orderTotalPrice + 2.20;
      console.log(this.form.value)

    }

    if (this.form.value.withPets == true) {
      this.orderTotalPrice = this.orderTotalPrice - 2.20;
    }
  }

  onSelectCar(value) {
    this.form.value.carType = this.carValue;
    this.carValue = value;

    if (value == 'normal') {
      if (this.form.value.carType == 'comfort') {
        this.orderTotalPrice = this.orderTotalPrice - 1;
      }
    }
    if (value == 'comfort') {
      if (this.form.value.carType == 'normal') {
        this.orderTotalPrice = this.orderTotalPrice + 1;
      }
    }

    this.form.value.carType = value;
  }


  //Order functionallity - waiting for driver
  checkorder() {

    if (this.orderService.userLocationLat) {
      const directionsService = new google.maps.DirectionsService();
      directionsService.route(
        {
          origin: {
            lat: this.orderService.userLocationLat,
            lng: this.orderService.userLocationLong
          },
          destination: {
            lat: this.orderService.userDestinationLat,
            lng: this.orderService.userDestinationLong,
          },
          travelMode: google.maps.TravelMode.DRIVING,
        },
        (response, status) => {
          if (status === "OK") {
            this.orderTotalDestination = response.routes[0].legs[0].distance.value / 1000;
            this.orderTotalPrice = this.orderTotalDestination * 0.90;
          }
        }
      );
    }


    this.subscriptions.push(this.orderService.getMyOrder(this.user.id)
      .subscribe(data => {
        if (data.status != 'Canceled') {
          this.orderService.currentOrderId = data.id;
          this.location = data.location;
          this.destination = data.destination;
          (Math.round(this.orderTotalPrice * 100) / 100).toFixed(2);
          this.orderTotalPrice = data.totalPrice;
          this.order = data;
          this.estimatedDuration = data.eta;

          if (data.status == "Waiting" && data != null) {
            this.orderStatus = data.status;
            this.isCompleted = true;
          }

          if (data.status == "Accepted" && data != null) {
            this.isSubmitted = false;
            this.route.navigate(['menu/travel-mode']);
            this.isCompleted = false;
          }
        } else {
          this.orderTotalPrice = 0;
        }
      },
        error => {
          console.log(error)
        }))
  }

  cancelOrder() {
    this.subscriptions.push(this.orderService.getMyOrder(this.user.id)
      .subscribe(data => {
        this.subscriptions.push(this.orderService.deleteOrder(data.id)
          .subscribe(() => {
            this.choosedLocDest = false;
            this.isCompleted = false;
            this.orderStatus = null;
            this.orderTotalPrice = 0;
            this.clearForm();
            this.isSubmitted = false;
          }))
      }))
  }



  async openLanguagePopover(ev) {
    const popover = await this.popoverController.create({
      component: LanguagePopoverPage,
      event: ev
    });
    await popover.present();
  }

  async locationError() {
    this.translate.get(['Location field is required!'])
      .subscribe(async text => {
        const popup = await this.alertController.create({
          header: text['Location field is required!'],
          buttons: [
            {
              text: 'Ok',
              role: 'Ok',
            }
          ]
        });

        await popup.present();
      })

  }

  async destinationError() {
    this.translate.get(['Destination field is required !'])
      .subscribe(async text => {
        const popup = await this.alertController.create({
          header: text['Destination field is required !'],
          buttons: [
            {
              text: 'Ok',
              role: 'Ok',
            }
          ]
        });

        await popup.present();
      })
  }

  async increasedOrder() {
    let textf: any = {};
    textf.first = this.translate.instant('Driver offers you');
    textf.second = this.translate.instant('лв. for the order');

    this.translate.get(['Accept', 'Cancel'])
      .subscribe(async text => {
        const popup = await this.alertController.create({
          header: `${textf.first} ${this.driverIncreased.toFixed(2)} ${textf.second}`,
          buttons: [
            {
              text: text['Accept'],
              handler: () => {
                this.subscriptions.push(this.orderService.getMyOrder(this.user.id).subscribe(order => {
                  this.subscriptions.push(this.orderService.increasedOrderAccept(order.id, true)
                    .subscribe(() => {
                      this.subscriptions.push(this.orderService.increaseOrderPrice(order.id, this.driverPrice)
                        .subscribe(() => {
                        }))
                    }))
                }))

              }
            },
            {
              text: text['Cancel'],
              handler: () => {
                this.subscriptions.push(this.orderService.getMyOrder(this.user.id).subscribe(order => {
                  this.subscriptions.push(this.orderService.increasedOrderAccept(order.id, false)
                    .subscribe(() => {

                    }))
                  this.subscriptions.push(this.orderService.resetIncreasing(this.order.id)
                    .subscribe(() => {
                    }))
                }))
              }
            },
          ]
        });

        await popup.present();
      })

  }


  clearForm() {
    this.translate.get(['Take me from here', 'Choose destination'])
      .subscribe(text => {
        this.orderService.chosenLocation = text['Take me from here'];
        this.orderService.chosenDestination = text['Choose destination'];
      })

    this.form.reset({
      'location': undefined,
      'destination': undefined,
      'increaseAmount': '',
      'applicationUserId': '',
      'locationLat': 0,
      'locationLong': 0,
      'destinationLat': 0,
      'destinationLong': 0,
      'totalPrice': 0,
      'tripDistance': 0,
      'userDistance': 0,
      'increasePrice': 0,
      'status': 'Waiting',
      'eta': '',
      'withPets': false,
      'withStroller': false,
      'special': false,
      'carType': 'normal'
    })
  }
  //END JUNK
}