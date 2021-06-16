import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';


import { environment } from 'environments/environment';
import { Router } from "@angular/router";
import { Driver } from "_models/driver";
import { SharedService } from "./shared-service/shared.service";
@Injectable({ providedIn: 'root' })
export class DriverService {
    public user: Observable<Driver>;
    userSubject: BehaviorSubject<Driver>;
  
  
    constructor(
      private router: Router,
      private http: HttpClient,
      private shared: SharedService
    ) {
      this.userSubject = new BehaviorSubject<Driver>(JSON.parse(localStorage.getItem('user')));
      this.user = this.userSubject.asObservable();
    }

  getById(id): Observable<Driver> {
    const headers = this.shared.headerGerneration();
    return this.http.get<Driver>(`${environment.apiUrl}/api/driver/${id}`, {headers});
  }

  getAll(): Observable<Driver[]> {
    const headers = this.shared.headerGerneration();
    return this.http.get<Driver[]>(`${environment.apiUrl}/api/driver`, {headers});
  }

  getConfirmed(): Observable<Driver[]> {
    const headers = this.shared.headerGerneration();
    return this.http.get<Driver[]>(`${environment.apiUrl}/api/driver/confirmed`, {headers});
  }

  confirmDriver(id) {
    const headers = this.shared.headerGerneration();
    return this.http.get(`${environment.apiUrl}/api/driver/confirm/${id}`, { headers, responseType: 'json'  });
  }
}