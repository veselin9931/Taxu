import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';


import { environment } from 'environments/environment';
import { Router } from "@angular/router";
import { Car } from "_models/car";
import { SharedService } from "./shared-service/shared.service";
@Injectable({ providedIn: 'root' })
export class CarService {
  public user: Observable<Car>;
  userSubject: BehaviorSubject<Car>;


  constructor(
    private router: Router,
    private http: HttpClient,
    private shared: SharedService
  ) {
    this.userSubject = new BehaviorSubject<Car>(JSON.parse(localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
  }


  getDriverCars(driverId: string): Observable<Car[]> {
    const headers = this.shared.headerGerneration();
    return this.http.get<Car[]>(`${environment.apiUrl}/api/car/carForConfirmation/${driverId}`, {headers});
  }

  getCar(carId: string): Observable<Car> {
    const headers = this.shared.headerGerneration();
    return this.http.get<Car>(`${environment.apiUrl}/api/car/${carId}`, {headers});
  }

  confirm(id) {
    const headers = this.shared.headerGerneration();
    return this.http.get(`${environment.apiUrl}/api/car/confirm/${id}`, { headers, responseType: 'json' });
  }

  getAllUnconfirmedCars(): Observable<Car[]>{
    const headers = this.shared.headerGerneration();
    return this.http.get<Car[]>(`${environment.apiUrl}/api/car/unconfirmed`, {headers});
  }
}
