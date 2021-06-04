import { __awaiter, __decorate } from "tslib";
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { LanguagePopoverPage } from '../language-popover/language-popover.page';
const { Geolocation } = Plugins;
let DestinationPage = class DestinationPage {
    constructor(route, orderService, translate, popoverController, accountService) {
        this.route = route;
        this.orderService = orderService;
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
        this.orderService.chosenDestination = this.address;
        this.route.navigate(['menu/travelling']);
    }
    loadMap(mapRef) {
        return __awaiter(this, void 0, void 0, function* () {
            const coordinates = yield Geolocation.getCurrentPosition();
            const myLatLng = { lat: coordinates.coords.latitude, lng: coordinates.coords.longitude };
            this.orderService.userDestinationLat = myLatLng.lat;
            this.orderService.userDestinationLong = myLatLng.lng;
            const options = {
                center: new google.maps.LatLng(myLatLng.lat, myLatLng.lng),
                zoom: 15,
                disableDefaultUI: true,
            };
            this.map = new google.maps.Map(mapRef.nativeElement, options);
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(myLatLng),
                icon: 'http://maps.gstatic.com/mapfiles/markers2/marker.png',
                map: this.map
            });
            var input = document.getElementById('searchTextField2').getElementsByTagName('input')[0];
            this.orderService.selectedFavourite = null;
            var searchbox = new google.maps.places.SearchBox(input);
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
                this.orderService.userDestinationLat = myLatLng.lat;
                this.orderService.userDestinationLong = myLatLng.lng;
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
    ViewChild('map', { read: ElementRef, static: false })
], DestinationPage.prototype, "mapRef", void 0);
__decorate([
    ViewChild('myButton')
], DestinationPage.prototype, "myButton", void 0);
DestinationPage = __decorate([
    Component({
        selector: 'app-destination',
        templateUrl: './destination.page.html',
        styleUrls: ['./destination.page.scss'],
    })
], DestinationPage);
export { DestinationPage };
//# sourceMappingURL=destination.page.js.map