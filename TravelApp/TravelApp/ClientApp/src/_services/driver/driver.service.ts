import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Driver, Order, User } from 'src/_models';
import { Car } from 'src/_models/car';

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
  constructor(private http: HttpClient) { }

  public getDriverHistory(userId: string): Observable<Order[]> {
    return this.http.get<Order[]>(`${environment.apiUrl}/api/order/history/${userId}`)
      .pipe(

      );
  }

  public getLastCompletedOrder(userId: string): Observable<Order> {
    return this.http.get<Order>(`${environment.apiUrl}/api/order/completed/${userId}`)
      .pipe(

      );
  }

  public getDriver(driverId: string): Observable<Driver> {
    return this.http.get<Driver>(`${environment.apiUrl}/api/driver/${driverId}`)
      .pipe(

      );
  }

  public createDriver(data) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(`${environment.apiUrl}/api/driver`, data, { headers, responseType: 'text' })
      .pipe(
        catchError(this.handleError)
      );
  }

  public getDriverCars(driverId: string): Observable<Car[]> {
    return this.http.get<Car[]>(`${environment.apiUrl}/api/car/driver/${driverId}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  public getDriverActiveCar(driverId: string): Observable<Car> {
    return this.http.get<Car>(`${environment.apiUrl}/api/car/driver/active/${driverId}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  public getDriverByReferral(referral: string): Observable<Driver> {
    return this.http.get<Driver>(`${environment.apiUrl}/api/driver/referral/${referral}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  public locateDriver(driverId: string, lat: string, lng: string): Observable<Driver>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Driver>(`${environment.apiUrl}/api/driver/location/${driverId}/${lat}/${lng}`, { headers, responseType: 'json' },)
    .pipe(
    );
  }

  public voteUp(driverId: string): Observable<Driver>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Driver>(`${environment.apiUrl}/api/driver/voteUp/${driverId}`, { headers, responseType: 'json' },)
    .pipe(
    );
  }

  public voteDown(driverId: string): Observable<Driver>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Driver>(`${environment.apiUrl}/api/driver/voteDown/${driverId}`, { headers, responseType: 'json' },)
    .pipe(
    );
  }

  public lowerDriverCommission(driverId: string): Observable<Driver>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Driver>(`${environment.apiUrl}/api/driver/${driverId}`, { headers, responseType: 'json' },)
    .pipe(
    );
  }

  public activeCar(id: string, driverId: string): Observable<Car> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Car>(`${environment.apiUrl}/api/car/${id}/${driverId}`, { headers, responseType: 'json' },)
      .pipe(
      );
  }
  

  public createCar(data) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(`${environment.apiUrl}/api/car`, data, { headers, responseType: 'text' })
      .pipe(
        catchError(this.handleError)
      );
  }

  public deleteCar(id: string): Observable<Car> {
    return this.http.delete<Car>(`${environment.apiUrl}/api/car/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
