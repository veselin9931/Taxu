import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Driver, User } from 'src/_models';

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  public user: User;
  public driver: Driver;
  public drivers = [];
  public applicationUserId: string;
  

  constructor(private http: HttpClient) {
    
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
        //catchError(this.handleError)
      );
  }

  public createCar(data) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(`${environment.apiUrl}/api/car`, data, { headers, responseType: 'text' })
      .pipe(
        
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
