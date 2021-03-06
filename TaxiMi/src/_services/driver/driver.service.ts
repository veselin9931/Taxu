import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Driver, Order, User } from 'src/_models';
import { Car } from 'src/_models/car';
import { SharedService } from '../shared/shared.service';

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  public user: User;
  public driver: Driver;
  public drivers = [];
  public applicationUserId: string;
  public categoryType: string;
  public categoryCloseCount: number;
  constructor(private http: HttpClient, private sharedService: SharedService) { }


  public getDriverHistory(userId: string): Observable<Order[]> {
    const headers = this.sharedService.headerGerneration();
    return this.http.get<Order[]>(`${environment.apiUrl}/api/order/history/${userId}`, {headers})
      .pipe(
        catchError(this.handleError)
      );
  }

  public getLastCompletedOrder(userId: string): Observable<Order> {
    const headers = this.sharedService.headerGerneration();
    return this.http.get<Order>(`${environment.apiUrl}/api/order/completed/${userId}`, {headers})
      .pipe(
        catchError(this.handleError)
      );
  }

  public getDriver(driverId: string): Observable<Driver> {
    const headers = this.sharedService.headerGerneration();
    return this.http.get<Driver>(`${environment.apiUrl}/api/driver/${driverId}`, {headers})
      .pipe(
        catchError(this.handleError)
      );
  }

  public createDriver(data) {
    const headers = this.sharedService.headerGerneration();
    return this.http.post(`${environment.apiUrl}/api/driver`, data, { headers, responseType: 'text' })
      .pipe(
        catchError(this.handleError)
      );
  }

  public getDriverCars(driverId: string): Observable<Car[]> {
    const headers = this.sharedService.headerGerneration();
    return this.http.get<Car[]>(`${environment.apiUrl}/api/car/driver/${driverId}`, {headers})
      .pipe(
        catchError(this.handleError)
      );
  }

  public getDriverActiveCar(driverId: string): Observable<Car> {
    const headers = this.sharedService.headerGerneration();
    return this.http.get<Car>(`${environment.apiUrl}/api/car/driver/active/${driverId}`, {headers})
      .pipe(
        catchError(this.handleError)
      );
  }

  public getDriverByReferral(referral: string): Observable<Driver> {
    const headers = this.sharedService.headerGerneration();
    return this.http.get<Driver>(`${environment.apiUrl}/api/driver/referral/${referral}`, {headers})
      .pipe(
        catchError(this.handleError)
      );
  }

  public locateDriver(driverId: string, lat: string, lng: string): Observable<Driver>{
    return this.http.put<Driver>(`${environment.apiUrl}/api/driver/location/${driverId}/${lat}/${lng}`, {responseType: 'json' },)
    .pipe(
      catchError(this.handleError)
    );
  }

  public voteUp(driverId: string): Observable<Driver>{
    const headers = this.sharedService.headerGerneration();
    return this.http.put<Driver>(`${environment.apiUrl}/api/driver/voteUp/${driverId}`, { headers, responseType: 'json' },)
    .pipe(
      catchError(this.handleError)
    );
  }

  public voteDown(driverId: string): Observable<Driver>{
    const headers = this.sharedService.headerGerneration();
    return this.http.put<Driver>(`${environment.apiUrl}/api/driver/voteDown/${driverId}`, { headers, responseType: 'json' },)
    .pipe(
      catchError(this.handleError)
    );
  }

  public lowerDriverCommission(driverId: string): Observable<Driver>{
    const headers = this.sharedService.headerGerneration();
    return this.http.put<Driver>(`${environment.apiUrl}/api/driver/${driverId}`, { headers, responseType: 'json' },)
    .pipe(
      catchError(this.handleError)
    );
  }

  public activeCar(id: string, driverId: string): Observable<Car> {
    const headers = this.sharedService.headerGerneration();
    return this.http.put<Car>(`${environment.apiUrl}/api/car/${id}/${driverId}`, { headers, responseType: 'json' },)
      .pipe(
        catchError(this.handleError)
      );
  }
  

  public createCar(data) {
    const headers = this.sharedService.headerGerneration();
    return this.http.post(`${environment.apiUrl}/api/car`, data, { headers, responseType: 'text' })
      .pipe(
        catchError(this.handleError)
      );
  }

  public deleteCar(id: string): Observable<Car> {
    const headers = this.sharedService.headerGerneration();
    return this.http.delete<Car>(`${environment.apiUrl}/api/car/${id}`, {headers})
      .pipe(
        catchError(this.handleError)
      );
  }

  public  cancelOrderFromDriver(orderId: string): Observable<Car> {
    const headers = this.sharedService.headerGerneration();
    return this.http.put<Car>(`${environment.apiUrl}/api/order/waiting/${orderId}`, { headers, responseType: 'json' },)
      .pipe(
        catchError(this.handleError)
      );
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      console.log('Client side error.')
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      console.log('Server side error.')
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
