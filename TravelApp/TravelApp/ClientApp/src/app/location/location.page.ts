import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';

const { Geolocation } = Plugins;
declare var google: any;

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {
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
      center: new google.maps.LatLng(myLatLng.lat, myLatLng.lng),
      zoom: 15
    };

    var marker = new google.maps.Marker({
      position: myLatLng,
      draggable: true,
      title: "Take me from here!",
    });

    this.map = new google.maps.Map(mapRef.nativeElement, options);

    marker.setMap(this.map);
    let geocoder = new google.maps.Geocoder;
    google.maps.event.addListener(marker, 'dragend', async () => {
      var position = marker.getPosition();
      var lat = position.lat()
      var lng = position.lng()
      console.log(lat, lng)

      let latlng = { lat: position.lat(), lng: position.lng() };
      geocoder.geocode({ 'location': latlng }, (results, status) => {
        console.log(results); // read data from here
        console.log(status);
      });

    })
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

  destination() {
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