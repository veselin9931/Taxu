import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page{
  
  public data = [];
  constructor(private http: HttpClient) { }

  getweatherFromService(): void {
    this.getWeather()
      .subscribe(success => {
        console.log(success);
      })
  }

 public getWeather() {
  // const req = new HttpRequest("GET", 'https://localhost:44329/weatherforecast', {
  //   reportProgress: true,
  //   responseType: 'json'
  // })
  
  // return this.http.request(req);
   return this.http.get(`https://localhost:44329/weatherforecast`)
      .pipe(map((data: any[]) => {
        console.log(data)
        this.data = data;
        return true;
      }))
  }

  showAlert() {
    console.log('sadasdasd')
  }
}
