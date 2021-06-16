import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';


import { environment } from 'environments/environment';
import { Router } from "@angular/router";
import { Driver } from "_models/driver";
import { Report } from "_models/report";
import { SharedService } from "./shared-service/shared.service";
@Injectable({ providedIn: 'root' })
export class ReportService {
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


getAll(): Observable<Report[]> {
  const headers = this.shared.headerGerneration();
    return this.http.get<Report[]>(`${environment.apiUrl}/api/report`, {headers});
  }
}