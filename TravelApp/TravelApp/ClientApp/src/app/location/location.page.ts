import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
import { NavController } from '@ionic/angular';
import { OrderService } from 'src/_services/order/order.service';

const { Geolocation } = Plugins;
declare var google: any;

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {
  address: string;
  map: any;
  latitude: any;
  longitude: any;
  destinationHaskovo = new google.maps.LatLng(41.9327555, 25.4786186);


  @ViewChild('map', { read: ElementRef, static: false }) mapRef: ElementRef;
  @ViewChild('marker', { read: ElementRef, static: false }) markerRef: ElementRef;
  @ViewChild('myButton') myButton: ElementRef;

  constructor(private route: Router,
    private orderService: OrderService,
    public navCtrl: NavController) {
  }

  ngOnInit(): void {

  }

  ionViewDidEnter() {
    this.getLocation();

    this.loadMap(this.mapRef, this.markerRef);
  }

  onSubmit() {

    this.orderService.chosenLocation = this.address;
    this.route.navigate(['menu/destination'])
  }

  async loadMap(mapRef: ElementRef, markerRef: ElementRef) {
    const coordinates = await Geolocation.getCurrentPosition();
    const myLatLng = { lat: coordinates.coords.latitude, lng: coordinates.coords.longitude };
    this.orderService.userLocationLat = myLatLng.lat;
    this.orderService.userLocationLong = myLatLng.lng;
    const options: google.maps.MapOptions = {
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

      this.orderService.userLocationLat = myLatLng.lat;
      this.orderService.userLocationLong = myLatLng.lng;
      console.log(this.orderService.userLocationLat, this.orderService.userLocationLong)
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

  destination() {
    this.route.navigate(['menu/destination']);
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