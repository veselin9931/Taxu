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
  public order: Order;
  public orders = [];
  public driverId: string;
  public completedOrder = false;
  private readonly getOrdersAction$ = new Subject();

  constructor(private http: HttpClient) { }

  public createOrder(data) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(`${environment.apiUrl}/api/order`, data, { headers, responseType: 'text' })
      .pipe(
        catchError(this.handleError)
      );
  }

  getOrderById(id: string): Observable<Order> {
    return this.http.get<Order>(`${environment.apiUrl}/api/order/id/${id}`)
      .pipe(
        tap(data => this.order = data),
        catchError(this.handleError)
      );
  }

  getMyOrder(userId: string): Observable<Order> {
    return this.http.get<Order>(`${environment.apiUrl}/api/order/${userId}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${environment.apiUrl}/api/order`)
      .pipe(
        catchError(this.handleError)
      )
  }

  acceptOrder(orderId: string, driverId: string): Observable<Order> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Order>(`${environment.apiUrl}/api/order/${orderId}/${driverId}`, { headers, responseType: 'json' },)
      .pipe(
        tap(data => this.driverId = driverId),
        catchError(this.handleError)
      );

  }

  completeOrder(orderId: string): Observable<Order> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Order>(`${environment.apiUrl}/api/order/${orderId}`, { headers, responseType: 'json' },)
      .pipe(
        catchError(this.handleError)
      );

  }

 deleteOrder(orderId: string): Observable<Order> {
    return this.http.delete<Order>(`${environment.apiUrl}/api/order/${orderId}`)
      .pipe(
        tap(data => console.log('deleted order: ', JSON.stringify(data))),
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
