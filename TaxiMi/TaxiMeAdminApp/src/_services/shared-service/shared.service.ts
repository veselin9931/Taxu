import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Profit, Trip, Image, Wallet } from '_models';
import { Car } from '_models/car';
import { AccountService } from '_services/account.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient, private acccount: AccountService) { }

  public getTotalProfit(): Observable<Profit> {
    const headers = this.headerGerneration()
    return this.http.get<Profit>(`${environment.apiUrl}/api/profit`, {headers})
      .pipe(
      );
  }

  public getAllTrips(): Observable<Trip[]> {
    const headers = this.headerGerneration()
    return this.http.get<Trip[]>(`${environment.apiUrl}/api/trip`, {headers})
      .pipe(
      );
  }

  public getDriverDocuments(userId: string): Observable<Image[]>{
    const headers = this.headerGerneration()
    return this.http.get<Image[]>(`${environment.apiUrl}/api/image/documents/${userId}`, {headers})
      .pipe(
      );
  }

  public getCarsImages(userId: string): Observable<Image[]>{
    const headers = this.headerGerneration()
    return this.http.get<Image[]>(`${environment.apiUrl}/api/image/cars/${userId}`, {headers})
      .pipe(
      );
  }

  public getMyWallet(userId: string): Observable<Wallet> {
    const headers = this.headerGerneration()
    return this.http.get<Wallet>(`${environment.apiUrl}/api/wallet/${userId}`, {headers})
      .pipe(
      );
  }

  public headerGerneration(): HttpHeaders {
    const user = this.acccount.userValue;
    return new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${user.token}` });
  }
  
}
