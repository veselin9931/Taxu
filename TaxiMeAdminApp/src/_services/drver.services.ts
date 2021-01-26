import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';


import { environment } from 'environments/environment';
import { Router } from "@angular/router";
import { Driver } from "_models/driver";
@Injectable({ providedIn: 'root' })
export class DriverService {
    public user: Observable<Driver>;
    userSubject: BehaviorSubject<Driver>;
  
  
    constructor(
      private router: Router,
      private http: HttpClient
    ) {
      this.userSubject = new BehaviorSubject<Driver>(JSON.parse(localStorage.getItem('user')));
      this.user = this.userSubject.asObservable();
    }


getAll() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<Driver>(`${environment.apiUrl}/api/driver`, { headers, responseType: 'json'  });
  }
}