import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Trip } from 'src/_models';
import { AccountService } from '../account.service';

@Injectable({
  providedIn: 'root'
})
export class TripService {
  public trip: Trip;
  public trips = [];
  public currentTripOrderId: string;
  public currentTripDriverId = this.accountService.userValue.id;
  public currentOrder = "";
  
  constructor(private http: HttpClient, private accountService: AccountService) { }

  public createTrip(data) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.currentTripOrderId = data.orderId;
    this.currentOrder = data.order;

    return this.http.post(`${environment.apiUrl}/api/trip`, data,  { headers, responseType: 'text' })
      .pipe(
        tap(data => console.log('created trip: ', JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getTrip(applicationUserId: string): Observable<Trip> {
    return this.http.get<Trip>(`${environment.apiUrl}/api/trip/${applicationUserId}`)
      .pipe(
        tap(data => this.trip = data),
        catchError(this.handleError)
      )
  }

  startTrip(tripId: string): Observable<Trip> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Trip>(`${environment.apiUrl}/api/trip/start/${tripId}`, { headers, responseType: 'json' },)
      .pipe(
        catchError(this.handleError)
      );

  }

  cancelTrip(tripId: string): Observable<Trip> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Trip>(`${environment.apiUrl}/api/trip/cancel/${tripId}`, { headers, responseType: 'json' },)
      .pipe(
        catchError(this.handleError)
      );
  }


  completeTrip(tripId: string): Observable<Trip> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Trip>(`${environment.apiUrl}/api/trip/finish/${tripId}`, { headers, responseType: 'json' },)
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
