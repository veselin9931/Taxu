import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Order, Trip } from 'src/_models';
import { AccountService } from '../account.service';

@Injectable({
  providedIn: 'root'
})
export class TripService {
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
        tap(data => console.log('created trip: ', JSON.stringify(data)))
      );
  }

  getTrip(applicationUserId: string): Observable<Trip> {
    return this.http.get<Trip>(`${environment.apiUrl}/api/trip/${applicationUserId}`)
      .pipe(
        catchError(this.handleError)
      )
  }

  private handleError(err) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
