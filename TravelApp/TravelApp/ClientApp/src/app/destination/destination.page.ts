import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.page.html',
  styleUrls: ['./destination.page.scss'],
})
export class DestinationPage implements OnInit {
  longitude;
  latitude;
  location = {};
  map: Mapboxgl.Map;
  constructor(private route: Router) {
    (Mapboxgl as any).accessToken = "pk.eyJ1IjoiYXRhbmFzc2VyYWZpbW92IiwiYSI6ImNrbHFjd2w3MDFidjQybm4zZXZzcDQ3Y2gifQ.R2hMULM0HPAbT0eAViTMgg";
  }

  ngOnInit() {
    this.getLocation();
    
  }

  ionViewDidEnter() {
    this.buildMap();
    this.createMarker(this.longitude, this.latitude);
  }

  createMarker(lng:number, lat: number){
    const marker = new Mapboxgl.Marker({
      draggable:true
    })
    .setLngLat([lng, lat])
        .addTo(this.map);

        marker.on('drag', () => {
          this.location = marker.getLngLat();
        })
  }

  destination(){
    this.route.navigate(['menu/destination']);
    console.log('Destination');
    console.log(this.location);
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

  buildMap() {
    this.map = new Mapboxgl.Map({
      container: 'mapbox', // container id
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.longitude, this.latitude], // starting position
      zoom: 15// starting zoom
    });
  }

}