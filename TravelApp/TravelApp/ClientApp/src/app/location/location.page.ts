import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

declare var google: any;

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {
  map: any;
  
  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;

  constructor(private route: Router) {
  }

  ngOnInit(): void {
    
  }

  ionViewDidEnter(){
    this.initMap();
  }

  initMap(){
    const location = new google.maps.LatLng(45,100);

    const options = {
      center: location,
      zoom: 14,
      disableDefaultUI: true
    }

    this.map = new google.maps.Map(this.mapRef.nativeElement,options);
  }

  // createMarker(lng:number, lat: number){
  //   const marker = new Mapboxgl.Marker({
  //     draggable:true
  //   })
  //   .setLngLat([lng, lat])
  //       .addTo(this.map);

  //       marker.on('drag', () => {
  //         this.location = marker.getLngLat();
  //         console.log(this.location)
  //       })
  // }

  // destination(){
  //   this.route.navigate(['menu/destination']);
  //   console.log('Starting location');

  //   console.log(this.location);
  // }

  // getLocation(): void {

  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       this.longitude = position.coords.longitude;
  //       this.latitude = position.coords.latitude;
  //       this.callApi(this.longitude, this.latitude);
  //       console.log(this.longitude, this.latitude)
  //     });
  //   } else {
  //     console.log("No support for geolocation")
  //   }
  // }

  // callApi(Longitude: number, Latitude: number) {
  //   const url = `https://api-adresse.data.gouv.fr/reverse/?lon=${Longitude}&lat=${Latitude}`
  //   //Call API
  // }

  // buildMap() {

  //   this.map = new Mapboxgl.Map({
  //     container: 'mapbox', // container id
  //     style: 'mapbox://styles/mapbox/streets-v11',
  //     center: [this.longitude, this.latitude], // starting position
  //     zoom: 15// starting zoom
  //   });
  // }


  // takeMe() {
  //   console.log('asdas')
  // }

}