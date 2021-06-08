import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { FavouriteOrder, Order } from 'src/_models';
import { SharedService } from '../shared/shared.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  public selectedFavourite: FavouriteOrder;

  public order: Order;
  public orders = [];
  public currentOrderId: string;

  public driverId: string;
  public completedOrder = false;
  public alertForcomplete: string;

  public chosenLocation: string;
  public chosenDestination: string;

  public userLocationLat: number;
  public userLocationLong: number;

  public userDestinationLat: number;
  public userDestinationLong: number;


  constructor(private http: HttpClient, private sharedService: SharedService) { }

  public createOrder(data) {
    const headers = this.sharedService.headerGerneration();

    return this.http.post(`${environment.apiUrl}/api/order`, data, { headers, responseType: 'text' })
      .pipe(
        catchError(this.handleError)
      );
  }

  addToFavourites(data) {
    const headers = this.sharedService.headerGerneration();

    return this.http.post(`${environment.apiUrl}/api/order/favourites`, data, { headers, responseType: 'text' })
      .pipe(
        catchError(this.handleError)
      );
  }

  getMyFavourites(userId: string): Observable<FavouriteOrder[]> {
    const headers = this.sharedService.headerGerneration();
    return this.http.get<FavouriteOrder[]>(`${environment.apiUrl}/api/order/favourites/${userId}`, {headers})
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteFavouriteOrder(orderId: string): Observable<FavouriteOrder> {
    const headers = this.sharedService.headerGerneration();
    return this.http.delete<FavouriteOrder>(`${environment.apiUrl}/api/order/favourites/${orderId}`, {headers})
      .pipe(
        tap(data => console.log('deleted favourite order: ', JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  public getDirections(locationLat, locationLng, destinationLat, destinationLng) {
    const headers = this.sharedService.headerGerneration();

    return this.http.post(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${locationLat},${locationLng}&destinations=${destinationLat}%2C${destinationLng}%7C&key=AIzaSyAEvlXdM4joG4bNVT5l-tJSk9lUSGhxMNw`, { headers, responseType: 'text' })
      .pipe(
        catchError(this.handleError)
      );
  }

  getOrderById(id: string): Observable<Order> {
    const headers = this.sharedService.headerGerneration();
    return this.http.get<Order>(`${environment.apiUrl}/api/order/id/${id}`, {headers})
      .pipe(
        tap(data => this.order = data)
      );
  }

  getCanceledOrderById(id: string): Observable<Order> {
    const headers = this.sharedService.headerGerneration();
    return this.http.get<Order>(`${environment.apiUrl}/api/order/canceled/${id}`, {headers})
      .pipe(
        tap(data => this.order = data)
      );
  }

  getLastCompletedOrder(userId: string): Observable<Order> {
    const headers = this.sharedService.headerGerneration();
    return this.http.get<Order>(`${environment.apiUrl}/api/order/completed/${userId}`, {headers})
      .pipe(
        catchError(this.handleError)
      );
  }

  getMyOrder(userId: string): Observable<Order> {
    const headers = this.sharedService.headerGerneration();
    return this.http.get<Order>(`${environment.apiUrl}/api/order/${userId}`, {headers})
      .pipe(
        catchError(this.handleError)
      );
  }

  getOrderForChat(userId: string): Observable<Order> {
    const headers = this.sharedService.headerGerneration();
    return this.http.get<Order>(`${environment.apiUrl}/api/order/chat/${userId}`, {headers})
      .pipe(
        catchError(this.handleError)
      );
  }

  getAllOrders(): Observable<Order[]> {
    const headers = this.sharedService.headerGerneration();
    return this.http.get<Order[]>(`${environment.apiUrl}/api/order`, {headers})
      .pipe(
        catchError(this.handleError)
      )
  }

  getNormalOrders(): Observable<Order[]> {
    const headers = this.sharedService.headerGerneration();
    return this.http.get<Order[]>(`${environment.apiUrl}/api/order/normal`, {headers})
      .pipe(
        catchError(this.handleError)
      )
  }

  getComfortOrders(): Observable<Order[]> {
    const headers = this.sharedService.headerGerneration();
    return this.http.get<Order[]>(`${environment.apiUrl}/api/order/comfort`, {headers})
      .pipe(
        catchError(this.handleError)
      )
  }

  acceptOrder(orderId: string, driverId: string): Observable<Order> {
    const headers = this.sharedService.headerGerneration();
    return this.http.put<Order>(`${environment.apiUrl}/api/order/${orderId}/${driverId}`, { headers, responseType: 'json' },)
      .pipe(
        tap(data => this.driverId = driverId),
        catchError(this.handleError)
      );

  }

  updateOrderEta(orderId: string, value: string): Observable<Order> {
    const headers = this.sharedService.headerGerneration();
    return this.http.put<Order>(`${environment.apiUrl}/api/order/eta/${orderId}/${value}`, { headers, responseType: 'json' },)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateDriverArrived(orderId: string): Observable<Order> {
    const headers = this.sharedService.headerGerneration();
    return this.http.put<Order>(`${environment.apiUrl}/api/order/arrived/${orderId}`, { headers, responseType: 'json' },)
      .pipe(
        catchError(this.handleError)
      );
  }

  rateOrder(orderId: string): Observable<Order> {
    const headers = this.sharedService.headerGerneration();
    return this.http.put<Order>(`${environment.apiUrl}/api/order/rate/${orderId}`, { headers, responseType: 'json' },)
      .pipe(
        catchError(this.handleError)
      );
  }

  increaseOrderPrice(id: string, amount: number): Observable<Order> {
    const headers = this.sharedService.headerGerneration();
    return this.http.put<Order>(`${environment.apiUrl}/api/order/increase/${id}/${amount}`, { headers, responseType: 'json' },)
      .pipe(
        catchError(this.handleError)
      );

  }

  completeOrder(orderId: string): Observable<Order> {
    const headers = this.sharedService.headerGerneration();
    return this.http.put<Order>(`${environment.apiUrl}/api/order/${orderId}`, { headers, responseType: 'json' },)
      .pipe(
        catchError(this.handleError)
      );

  }

  deleteOrder(orderId: string): Observable<Order> {
    const headers = this.sharedService.headerGerneration();
    return this.http.delete<Order>(`${environment.apiUrl}/api/order/${orderId}`, {headers})
      .pipe(
        tap(data => console.log('deleted order: ', JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  driverIncreaseOrderPrice(orderId: string, amount: number, driverId: string): Observable<Order> {
    const headers = this.sharedService.headerGerneration();
    return this.http.put<Order>(`${environment.apiUrl}/api/order/increased/${orderId}/${amount}/${driverId}`, { headers, responseType: 'json' },)
      .pipe(
        catchError(this.handleError)
      );
  }

  resetIncreasing(orderId: string): Observable<Order> {
    const headers = this.sharedService.headerGerneration();

    return this.http.put<Order>(`${environment.apiUrl}/api/order/reset/${orderId}`, { headers, responseType: 'json' },)
      .pipe(
        catchError(this.handleError)
      );
  }


  increasedOrderAccept(orderId: string, value: boolean): Observable<Order> {
    const headers = this.sharedService.headerGerneration();;

    return this.http.put<Order>(`${environment.apiUrl}/api/order/accepted/increase/${orderId}/${value}`, { headers, responseType: 'json' },)
      .pipe(
        catchError(this.handleError)
      );
  }

  incrementOrderPrice(orderId: string): Observable<Order> {
    const headers = this.sharedService.headerGerneration();

    return this.http.put<Order>(`${environment.apiUrl}/api/order/increment/${orderId}`, { headers, responseType: 'json' },)
      .pipe(
        catchError(this.handleError)
      );
  }

  decrementOrderPrice(orderId: string): Observable<Order> {
    const headers = this.sharedService.headerGerneration();

    return this.http.put<Order>(`${environment.apiUrl}/api/order/decrement/${orderId}`, { headers, responseType: 'json' },)
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
