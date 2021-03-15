import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import * as signalR from '@aspnet/signalr';
import { Plugins } from '@capacitor/core';
import { environment } from 'src/environments/environment';
import { OrderService } from 'src/_services/order/order.service';

const { Geolocation } = Plugins;
declare var google: any;
@Component({
  selector: 'app-destination',
  templateUrl: './destination.page.html',
  styleUrls: ['./destination.page.scss'],
})
export class DestinationPage implements OnInit {
  address: string;
  map: any;
  latitude: any;
  longitude: any;
  @ViewChild('map', { read: ElementRef, static: false }) mapRef: ElementRef;
  @ViewChild('myButton') myButton: ElementRef;

  constructor(private route: Router,
    private orderService: OrderService) {
  }

  ngOnInit(): void {
    const connection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Information)
      .withUrl(`${environment.apiUrl}/orderHub`, {
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets
      })
      .build();

    connection.start().then(function () {
      console.log('signalR Connected in menu');
    }).catch(function (err) {
      return console.log(err.toString());
    });

    connection.on('BroadcastMessage', () => {
      this.loadMap(this.mapRef);
    });
  }

  ionViewDidEnter() {
    this.getLocation();
    this.loadMap(this.mapRef);
  }

  onSubmit() {
    this.orderService.chosenDestination = this.address;
    this.route.navigate(['menu/travelling'])
  }

  

  async loadMap(mapRef: ElementRef) {
    const coordinates = await Geolocation.getCurrentPosition();
    const myLatLng = { lat: coordinates.coords.latitude, lng: coordinates.coords.longitude };

    this.orderService.userDestinationLat = myLatLng.lat;
    this.orderService.userDestinationLong = myLatLng.lng;

    const options: google.maps.MapOptions = {
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
    
    var searchbox = new google.maps.places.SearchBox(input);

    this.map.addListener("bounds_changed", () => {
      searchbox.setBounds(this.map.getBounds() as google.maps.LatLngBounds);
    });

    searchbox.addListener("places_changed", () => {
      const places = searchbox.getPlaces();

      if (places.length == 0) {
        return;
      }

      var bounds = new google.maps.LatLngBounds();

      places.forEach((place) => {
        console.log(place.geometry.location.lat())
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
        } else {
          bounds.extend(place.geometry.location)
        }

      });

      this.map.fitBounds(bounds);

    })

    let geocoder = new google.maps.Geocoder;

    google.maps.event.addListener(this.map, 'idle', async () => {
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
      geocoder.geocode({ location: myLatLng },
        (
          results: google.maps.GeocoderResult[],
          status: google.maps.GeocoderStatus
        ) => {
          if (status == "OK") {
            if (results[0]) {
              this.address = results[0].formatted_address;
              var infowindow = new google.maps.InfoWindow({
                content: `${this.address}`
              });
              console.log(this.address);
              infowindow.open(this.map, marker);
            }
          }
        })
    })
  }


  getLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {

        this.longitude = position.coords.longitude;
        this.latitude = position.coords.latitude;
        this.callApi(this.longitude, this.latitude);
      });
    } else {
      console.log("No support for geolocation")
    }
  }

  callApi(Longitude: number, Latitude: number) {
    const url = `https://api-adresse.data.gouv.fr/reverse/?lon=${Longitude}&lat=${Latitude}`
    //Call API
  }


}