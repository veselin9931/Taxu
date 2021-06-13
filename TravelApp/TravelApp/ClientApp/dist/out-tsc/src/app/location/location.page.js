import { __awaiter, __decorate } from "tslib";
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { LanguagePopoverPage } from '../language-popover/language-popover.page';
const { Geolocation } = Plugins;
let LocationPage = class LocationPage {
    constructor(route, orderService, navCtrl, translate, popoverController, accountService) {
        this.route = route;
        this.orderService = orderService;
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.popoverController = popoverController;
        this.accountService = accountService;
        this.translate.setDefaultLang(this.accountService.userValue.choosenLanguage);
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.getLocation();
        this.loadMap(this.mapRef);
    }
    onSubmit() {
        this.orderService.chosenLocation = this.address;
        this.route.navigate(['menu/destination']);
    }
    loadMap(mapRef) {
        return __awaiter(this, void 0, void 0, function* () {
            const coordinates = yield Geolocation.getCurrentPosition();
            const myLatLng = { lat: coordinates.coords.latitude, lng: coordinates.coords.longitude };
            this.orderService.userLocationLat = myLatLng.lat;
            this.orderService.userLocationLong = myLatLng.lng;
            const options = {
                center: new google.maps.LatLng(myLatLng.lat, myLatLng.lng),
                zoom: 15,
                disableDefaultUI: true,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            this.map = new google.maps.Map(mapRef.nativeElement, options);
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(myLatLng),
                icon: 'http://maps.gstatic.com/mapfiles/markers2/marker.png',
                map: this.map
            });
            var input = document.getElementById('searchTextField').getElementsByTagName('input')[0];
            var searchbox = new google.maps.places.SearchBox(input);
            this.orderService.selectedFavourite = null;
            this.map.addListener("bounds_changed", () => {
                searchbox.setBounds(this.map.getBounds());
            });
            searchbox.addListener("places_changed", () => {
                const places = searchbox.getPlaces();
                if (places.length == 0) {
                    return;
                }
                var bounds = new google.maps.LatLngBounds();
                places.forEach((place) => {
                    if (!place.geometry) {
                        console.log('No Geometry');
                        return;
                    }
                    marker.setMap(null);
                    marker = new google.maps.Marker({
                        position: place.geometry.location,
                        icon: 'http://maps.gstatic.com/mapfiles/markers2/marker.png',
                        map: this.map
                    });
                    if (place.geometry.viewport) {
                        bounds.union(place.geometry.viewport);
                    }
                    else {
                        bounds.extend(place.geometry.location);
                    }
                });
                this.map.fitBounds(bounds);
            });
            let geocoder = new google.maps.Geocoder;
            google.maps.event.addListener(this.map, 'idle', () => __awaiter(this, void 0, void 0, function* () {
                var center = this.map.getCenter();
                var lat = center.lat();
                var lng = center.lng();
                const myLatLng = { lat: lat, lng: lng };
                if (marker && marker.setMap) {
                    marker.setMap(null);
                }
                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(myLatLng),
                    icon: 'http://maps.gstatic.com/mapfiles/markers2/marker.png',
                    map: this.map
                });
                this.orderService.userLocationLat = myLatLng.lat;
                this.orderService.userLocationLong = myLatLng.lng;
                //Get Location
                geocoder.geocode({ location: myLatLng }, (results, status) => {
                    if (status == "OK") {
                        if (results[0]) {
                            this.address = results[0].formatted_address;
                            var infowindow = new google.maps.InfoWindow({
                                content: `${this.address}`
                            });
                            infowindow.open(this.map, marker);
                        }
                    }
                });
            }));
        });
    }
    destination() {
        this.route.navigate(['menu/destination']);
    }
    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.longitude = position.coords.longitude;
                this.latitude = position.coords.latitude;
                this.callApi(this.longitude, this.latitude);
            });
        }
        else {
            console.log("No support for geolocation");
        }
    }
    callApi(Longitude, Latitude) {
        const url = `https://api-adresse.data.gouv.fr/reverse/?lon=${Longitude}&lat=${Latitude}`;
        //Call API
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
};
__decorate([
    ViewChild('map', { read: ElementRef, static: true })
], LocationPage.prototype, "mapRef", void 0);
__decorate([
    ViewChild('myButton')
], LocationPage.prototype, "myButton", void 0);
LocationPage = __decorate([
    Component({
        selector: 'app-location',
        templateUrl: './location.page.html',
        styleUrls: ['./location.page.scss'],
    })
], LocationPage);
export { LocationPage };
//# sourceMappingURL=location.page.js.map