import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';

const { Geolocation } = Plugins;
declare var google: any;
@Component({
  selector: 'app-destination',
  templateUrl: './destination.page.html',
  styleUrls: ['./destination.page.scss'],
})
export class DestinationPage implements OnInit {
  map: any;
  latitude: any;
  longitude: any;
  @ViewChild('map', { read: ElementRef, static: false }) mapRef: ElementRef;

  constructor(private route: Router) {
  }

  ngOnInit(): void {
    this.getLocation();
  }

  ionViewDidEnter() {
    this.getLocation();
    this.loadMap(this.mapRef);
  }

  async loadMap(mapRef: ElementRef) {
    const coordinates = await Geolocation.getCurrentPosition();
    const myLatLng = { lat: coordinates.coords.latitude, lng: coordinates.coords.longitude };


    const options: google.maps.MapOptions = {
      center: new google.maps.LatLng(myLatLng.lat,myLatLng.lng),
      zoom: 15
    };

    var marker = new google.maps.Marker({
      position: myLatLng,
      title: "Hello World!",
    });

    this.map = new google.maps.Map(mapRef.nativeElement, options);

    marker.setMap(this.map);
  }

  destination(){
    this.route.navigate(['menu/destination']);
  }

  getLocation(): void {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.longitude = position.coords.longitude;
        this.latitude = position.coords.latitude;
        this.callApi(this.longitude, this.latitude);
        console.log(this.longitude, this.latitude)
      });
    } else {
      console.log("No support for geolocation")
    }
  }

  callApi(Longitude: number, Latitude: number) {
    const url = `https://api-adresse.data.gouv.fr/reverse/?lon=${Longitude}&lat=${Latitude}`
    //Call API
  }

  travel(){
    this.route.navigate(['menu/travelling'])
  }

}