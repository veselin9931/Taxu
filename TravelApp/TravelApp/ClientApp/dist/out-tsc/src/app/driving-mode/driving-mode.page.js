import { __awaiter, __decorate } from "tslib";
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Capacitor, Plugins } from '@capacitor/core';
import { interval } from 'rxjs';
import { Message } from 'src/_models';
import { LanguagePopoverPage } from '../language-popover/language-popover.page';
const { Geolocation } = Plugins;
let DrivingModePage = class DrivingModePage {
    constructor(route, orderService, accountService, tripService, walletService, driverService, chatService, profitService, translate, popoverController, alertController) {
        this.route = route;
        this.orderService = orderService;
        this.accountService = accountService;
        this.tripService = tripService;
        this.walletService = walletService;
        this.driverService = driverService;
        this.chatService = chatService;
        this.profitService = profitService;
        this.translate = translate;
        this.popoverController = popoverController;
        this.alertController = alertController;
        this.driverId = this.tripService.currentTripDriverId;
        this.applicationUserId = this.accountService.userValue.id;
        this.isDrivingNow = this.accountService.userValue.isDrivingNow;
        this.orders = [];
        this.closestOrders = [];
        this.messages = this.chatService.messages;
        this.chatStyle = "";
        this.orderDiv = document.getElementById("orderDiv");
        this.msgDto = new Message();
        this.msgInboxArray = [];
        this.translate.setDefaultLang(this.accountService.userValue.choosenLanguage);
    }
    ngOnInit() {
        const source = interval(5000);
        this.subscription = source.subscribe(val => this.changeMyLocation());
        this.chatService.retrieveMappedObject()
            .subscribe((receivedObj) => { this.addToInbox(receivedObj); }); // calls the service method to get the new messages sent
        this.getAcceptedTrip();
    }
    ionViewDidEnter() {
        if (this.accountService.userValue.isDrivingNow == true) {
            this.getAcceptedTrip();
            this.chatService.stop();
            this.chatService.start();
        }
    }
    changeMyLocation() {
        return __awaiter(this, void 0, void 0, function* () {
            const coordinates = yield Geolocation.getCurrentPosition();
            const myLatLng = { lat: coordinates.coords.latitude, lng: coordinates.coords.longitude };
            this.myLat = myLatLng.lat.toString();
            this.myLng = myLatLng.lng.toString();
            this.driverService.locateDriver(this.accountService.userValue.driverId, this.myLat, this.myLng)
                .subscribe(x => { });
        });
    }
    loadMap(mapRef) {
        return __awaiter(this, void 0, void 0, function* () {
            const userLocationLatLng = { lat: +this.order.locationLat, lng: +this.order.locationLong };
            const options = {
                center: new google.maps.LatLng(userLocationLatLng.lat, userLocationLatLng.lng),
                zoom: 15,
                disableDefaultUI: true,
                mapTypeId: google.maps.MapTypeId.ROADMAP
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
        });
    }
    navigateToUserAndCalculateDistance() {
        return __awaiter(this, void 0, void 0, function* () {
            const directionsService = new google.maps.DirectionsService();
            const directionsRenderer = new google.maps.DirectionsRenderer();
            const coordinates = yield Geolocation.getCurrentPosition();
            const myLatLng = { lat: coordinates.coords.latitude, lng: coordinates.coords.longitude };
            const userLatLng = { lat: this.order.locationLat, lng: this.order.locationLong };
            let userLat = +userLatLng.lat;
            let userLng = +userLatLng.lng;
            directionsService.route({
                origin: {
                    lat: myLatLng.lat,
                    lng: myLatLng.lng
                },
                destination: {
                    lat: userLat,
                    lng: userLng,
                },
                travelMode: google.maps.TravelMode.DRIVING,
            }, (response, status) => {
                if (status === "OK") {
                    if (Capacitor.getPlatform() === 'ios') {
                        console.log('ios platform');
                        directionsRenderer.setDirections(response);
                        window.open(`http://maps.apple.com/maps?q=${userLat},${userLng}&t=m&dirflg=d`);
                    }
                    if (Capacitor.platform == 'web') {
                        directionsRenderer.setDirections(response);
                        window.open(`https://www.google.com/maps/dir/?api=1&destination=${userLat},${userLng}&travelmode=driving`);
                    }
                    if (Capacitor.platform == 'android') {
                        directionsRenderer.setDirections(response);
                        window.open(`https://www.google.com/maps/dir/?api=1&destination=${userLat},${userLng}&travelmode=driving`);
                    }
                }
                else {
                    window.alert("Directions request failed due to " + status);
                }
            });
            directionsRenderer.setMap(this.map);
        });
    }
    //Set directions to user's destination
    navigateToPointAndCalculateDistance() {
        return __awaiter(this, void 0, void 0, function* () {
            const directionsService = new google.maps.DirectionsService();
            const directionsRenderer = new google.maps.DirectionsRenderer();
            const coordinates = yield Geolocation.getCurrentPosition();
            const myLatLng = { lat: coordinates.coords.latitude, lng: coordinates.coords.longitude };
            const userLatLng = { lat: this.order.destinationLat, lng: this.order.destinationLong };
            let userLat = +userLatLng.lat;
            let userLng = +userLatLng.lng;
            directionsService.route({
                origin: {
                    lat: myLatLng.lat,
                    lng: myLatLng.lng
                },
                destination: {
                    lat: userLat,
                    lng: userLng,
                },
                travelMode: google.maps.TravelMode.DRIVING,
            }, (response, status) => {
                if (status === "OK") {
                    if (Capacitor.getPlatform() == 'ios') {
                        console.log('ios platform');
                        directionsRenderer.setDirections(response);
                        window.open(`http://maps.apple.com/maps?q=${userLat},${userLng}&t=m&dirflg=d`);
                        this.startTrip();
                    }
                    if (Capacitor.getPlatform() == 'android' || Capacitor.getPlatform() == 'web') {
                        console.log('android or web platform');
                        directionsRenderer.setDirections(response);
                        window.open(`https://www.google.com/maps/dir/?api=1&destination=${userLat},${userLng}&travelmode=driving`);
                        this.startTrip();
                    }
                }
                else {
                    console.log("failed");
                    window.alert("Directions request failed due to " + status);
                }
            });
            directionsRenderer.setMap(this.map);
        });
    }
    //CHAT
    chat() {
        var x = document.getElementById("chat");
        if (x.style.display === "none") {
            x.style.display = "block";
            this.chatStyle = 'block';
        }
        else {
            x.style.display = "none";
            this.chatStyle = 'none';
        }
    }
    send() {
        if (this.msgDto) {
            if (this.msgDto.text.length == 0) {
                window.alert("Text field is required.");
                return;
            }
            else {
                this.msgDto.user = `${this.accountService.userValue.firstName} ${this.accountService.userValue.lastName}`;
                var c = this.chatService.broadcastMessage(this.msgDto);
            }
        }
    }
    clearMessages() {
        this.messages.length = 0;
    }
    addToInbox(obj) {
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
                });
            }
        });
    }
    finishTrip() {
        this.tripService.completeTrip(this.currentTrip.id)
            .subscribe(trip => {
            if (trip) {
                this.tripStatus = trip.status;
            }
            this.orderService.completeOrder(this.currentTrip.orderId)
                .subscribe(() => { });
        });
        //trigger the driver's driving now property to false
        let userId = this.accountService.userValue.id;
        let value = this.accountService.userValue.isDrivingNow = false;
        this.accountService.updateDriving(userId, value)
            .subscribe();
        this.isDrivingNow = this.accountService.userValue.isDrivingNow;
        this.route.navigate(['menu/driving']);
    }
    openLanguagePopover(ev) {
        return __awaiter(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: LanguagePopoverPage,
                event: ev
            });
            yield popover.present();
        });
    }
    calculateEta(order) {
        return __awaiter(this, void 0, void 0, function* () {
            const directionsService = new google.maps.DirectionsService();
            const coordinates = yield Geolocation.getCurrentPosition();
            const myLatLng = { lat: coordinates.coords.latitude, lng: coordinates.coords.longitude };
            directionsService.route({
                origin: {
                    lat: myLatLng.lat,
                    lng: myLatLng.lng
                },
                destination: {
                    lat: +order.locationLat,
                    lng: +order.locationLong,
                },
                travelMode: google.maps.TravelMode.DRIVING,
            }, (response, status) => {
                if (status === "OK") {
                    this.eta = response.routes[0].legs[0].duration.text;
                    order.km = response.routes[0].legs[0].distance.value / 1000;
                    order.distanceText = response.routes[0].legs[0].distance.text;
                    order.eta = response.routes[0].legs[0].duration.text;
                    this.distance = order.distanceText;
                }
            });
        });
    }
    getAcceptedTrip() {
        this.tripService.getTrip(this.driverId)
            .subscribe(x => {
            if (x == null) {
                // this.accountService.updateDriving(this.applicationUserId, false)
                //   .subscribe(() => {
                //   });
                // this.accountService.userValue.isDrivingNow = false;
                // this.canceledOrder();
                return;
            }
            this.tripStatus = x.status;
            this.currentTrip = x;
            this.orderService.getOrderById(x.orderId).subscribe(order => {
                x.order = order;
                this.order = x.order;
                this.loadMap(this.mapRef);
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
                });
            });
        });
    }
    onTheAddress() {
        return __awaiter(this, void 0, void 0, function* () {
            this.orderService.updateDriverArrived(this.order.id)
                .subscribe(() => { });
        });
    }
    cancelTrip() {
        return __awaiter(this, void 0, void 0, function* () {
            this.tripService.getTrip(this.applicationUserId)
                .subscribe(trip => {
                this.tripService.cancelTrip(trip.id)
                    .subscribe(x => {
                    this.accountService.updateDriving(this.applicationUserId, false)
                        .subscribe(() => {
                    });
                    this.accountService.userValue.isDrivingNow = false;
                    this.orderService.deleteOrder(trip.orderId)
                        .subscribe(() => this.route.navigate(['menu/driving']));
                });
            });
        });
    }
    canceledOrder() {
        return __awaiter(this, void 0, void 0, function* () {
            const popup = yield this.alertController.create({
                header: 'Order is cancelled by the customer.',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                    }
                ]
            });
            yield popup.present();
        });
    }
};
__decorate([
    ViewChild('map', { read: ElementRef, static: false })
], DrivingModePage.prototype, "mapRef", void 0);
DrivingModePage = __decorate([
    Component({
        selector: 'app-driving-mode',
        templateUrl: './driving-mode.page.html',
        styleUrls: ['./driving-mode.page.scss'],
    })
], DrivingModePage);
export { DrivingModePage };
//# sourceMappingURL=driving-mode.page.js.map