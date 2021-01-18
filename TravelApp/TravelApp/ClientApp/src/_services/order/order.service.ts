import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Order } from 'src/_models';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  public orders = [];
  private readonly getOrdersAction$ = new Subject();
  
  constructor(private http: HttpClient) { }

  public createOrder(data) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(`${environment.apiUrl}/api/order`, data, { headers, responseType: 'text' })
      .pipe(
        tap(data => console.log('created order: ', JSON.stringify(data)))
      );
  }

  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${environment.apiUrl}/api/order`)
      .pipe(
        catchError(this.handleError),
        tap(() => this.getOrdersAction$.next())
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
