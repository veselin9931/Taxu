import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';


import { environment } from 'environments/environment';
import { Router } from "@angular/router";
import { Car } from "_models/car";
@Injectable({ providedIn: 'root' })
export class CarService {
  public user: Observable<Car>;
  userSubject: BehaviorSubject<Car>;


  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.userSubject = new BehaviorSubject<Car>(JSON.parse(localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
  }


  getDriverCars(driverId: string): Observable<Car[]> {
    return this.http.get<Car[]>(`${environment.apiUrl}/api/car/carForConfirmation/${driverId}`);
  }

  getCar(carId: string): Observable<Car> {
    return this.http.get<Car>(`${environment.apiUrl}/api/car/${carId}`);
  }

  confirm(id) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(`${environment.apiUrl}/api/car/confirm/${id}`, { headers, responseType: 'json' });
  }

  getAllUnconfirmedCars(): Observable<Car[]>{
    return this.http.get<Car[]>(`${environment.apiUrl}/api/car/unconfirmed`);
  }
}
