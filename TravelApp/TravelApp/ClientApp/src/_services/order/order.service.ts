import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { FavouriteOrder, Order } from 'src/_models';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  public selectedFavourite: FavouriteOrder;

  public order: Order;
  public orders = [];

  public driverId: string;
  public completedOrder = false;
  public alertForcomplete = false;

  public chosenLocation: string;
  public chosenDestination: string;

  public userLocationLat: number;
  public userLocationLong: number;

  public userDestinationLat: number;
  public userDestinationLong: number;


  constructor(private http: HttpClient) { }

  public createOrder(data) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(`${environment.apiUrl}/api/order`, data, { headers, responseType: 'text' })
      .pipe(
        catchError(this.handleError)
      );
  }

  addToFavourites(data){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(`${environment.apiUrl}/api/order/favourites`, data, { headers, responseType: 'text' })
    .pipe(
      catchError(this.handleError)
    );
  }

  getMyFavourites(userId: string): Observable<FavouriteOrder[]> {
    return this.http.get<FavouriteOrder[]>(`${environment.apiUrl}/api/order/favourites/${userId}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteFavouriteOrder(orderId: string): Observable<FavouriteOrder> {
    return this.http.delete<FavouriteOrder>(`${environment.apiUrl}/api/order/favourites/${orderId}`)
      .pipe(
        tap(data => console.log('deleted favourite order: ', JSON.stringify(data))),
      );
  }

  public getDirections(locationLat, locationLng, destinationLat, destinationLng){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${locationLat},${locationLng}&destinations=${destinationLat}%2C${destinationLng}%7C&key=AIzaSyAEvlXdM4joG4bNVT5l-tJSk9lUSGhxMNw`, { headers, responseType: 'text' })
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

  getLastCompletedOrder(userId: string): Observable<Order>{
    return this.http.get<Order>(`${environment.apiUrl}/api/order/completed/${userId}`)
      .pipe(
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

  increaseOrderPrice(id: string, amount: number): Observable<Order> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Order>(`${environment.apiUrl}/api/order/increase/${id}/${amount}`, { headers, responseType: 'json' },)
      .pipe(
      );

  }

  completeOrder(orderId: string): Observable<Order> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Order>(`${environment.apiUrl}/api/order/${orderId}`, { headers, responseType: 'json' },)
      .pipe(
        tap(x => this.alertForcomplete = true),
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
