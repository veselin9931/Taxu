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


  constructor(private http: HttpClient) { }

  public getDriverHistory(userId: string): Observable<Order[]> {
    return this.http.get<Order[]>(`${environment.apiUrl}/api/order/history/${userId}`)
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

  public activeCar(car: Car, driverId: string): Observable<Car> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Car>(`${environment.apiUrl}/api/car/${car.id}/${driverId}`, { headers, responseType: 'json' },)
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
