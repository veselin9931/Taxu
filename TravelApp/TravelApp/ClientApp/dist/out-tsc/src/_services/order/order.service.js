import { __decorate } from "tslib";
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
let OrderService = class OrderService {
    constructor(http) {
        this.http = http;
        this.orders = [];
        this.completedOrder = false;
    }
    createOrder(data) {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post(`${environment.apiUrl}/api/order`, data, { headers, responseType: 'text' })
            .pipe(catchError(this.handleError));
    }
    addToFavourites(data) {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post(`${environment.apiUrl}/api/order/favourites`, data, { headers, responseType: 'text' })
            .pipe(catchError(this.handleError));
    }
    getMyFavourites(userId) {
        return this.http.get(`${environment.apiUrl}/api/order/favourites/${userId}`)
            .pipe(catchError(this.handleError));
    }
    deleteFavouriteOrder(orderId) {
        return this.http.delete(`${environment.apiUrl}/api/order/favourites/${orderId}`)
            .pipe(tap(data => console.log('deleted favourite order: ', JSON.stringify(data))), catchError(this.handleError));
    }
    getDirections(locationLat, locationLng, destinationLat, destinationLng) {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${locationLat},${locationLng}&destinations=${destinationLat}%2C${destinationLng}%7C&key=AIzaSyAEvlXdM4joG4bNVT5l-tJSk9lUSGhxMNw`, { headers, responseType: 'text' })
            .pipe(catchError(this.handleError));
    }
    getOrderById(id) {
        return this.http.get(`${environment.apiUrl}/api/order/id/${id}`)
            .pipe(tap(data => this.order = data));
    }
    getLastCompletedOrder(userId) {
        return this.http.get(`${environment.apiUrl}/api/order/completed/${userId}`)
            .pipe(catchError(this.handleError));
    }
    getMyOrder(userId) {
        return this.http.get(`${environment.apiUrl}/api/order/${userId}`)
            .pipe(catchError(this.handleError));
    }
    getOrderForChat(userId) {
        return this.http.get(`${environment.apiUrl}/api/order/chat/${userId}`)
            .pipe(catchError(this.handleError));
    }
    getAllOrders() {
        return this.http.get(`${environment.apiUrl}/api/order`)
            .pipe(catchError(this.handleError));
    }
    getNormalOrders() {
        return this.http.get(`${environment.apiUrl}/api/order/normal`)
            .pipe(catchError(this.handleError));
    }
    getComfortOrders() {
        return this.http.get(`${environment.apiUrl}/api/order/comfort`)
            .pipe(catchError(this.handleError));
    }
    acceptOrder(orderId, driverId) {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.put(`${environment.apiUrl}/api/order/${orderId}/${driverId}`, { headers, responseType: 'json' })
            .pipe(tap(data => this.driverId = driverId), catchError(this.handleError));
    }
    updateOrderEta(orderId, value) {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.put(`${environment.apiUrl}/api/order/eta/${orderId}/${value}`, { headers, responseType: 'json' })
            .pipe(catchError(this.handleError));
    }
    updateDriverArrived(orderId) {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.put(`${environment.apiUrl}/api/order/arrived/${orderId}`, { headers, responseType: 'json' })
            .pipe(catchError(this.handleError));
    }
    rateOrder(orderId) {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.put(`${environment.apiUrl}/api/order/rate/${orderId}`, { headers, responseType: 'json' })
            .pipe(catchError(this.handleError));
    }
    increaseOrderPrice(id, amount) {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.put(`${environment.apiUrl}/api/order/increase/${id}/${amount}`, { headers, responseType: 'json' })
            .pipe(catchError(this.handleError));
    }
    completeOrder(orderId) {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.put(`${environment.apiUrl}/api/order/${orderId}`, { headers, responseType: 'json' })
            .pipe(catchError(this.handleError));
    }
    deleteOrder(orderId) {
        return this.http.delete(`${environment.apiUrl}/api/order/${orderId}`)
            .pipe(tap(data => console.log('deleted order: ', JSON.stringify(data))), catchError(this.handleError));
    }
    driverIncreaseOrderPrice(orderId, amount, driverId) {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.put(`${environment.apiUrl}/api/order/increased/${orderId}/${amount}/${driverId}`, { headers, responseType: 'json' })
            .pipe(catchError(this.handleError));
    }
    increasedOrderAccept(orderId, value) {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.put(`${environment.apiUrl}/api/order/accepted/increase/${orderId}/${value}`, { headers, responseType: 'json' })
            .pipe(catchError(this.handleError));
    }
    incrementOrderPrice(orderId) {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.put(`${environment.apiUrl}/api/order/increment/${orderId}`, { headers, responseType: 'json' })
            .pipe(catchError(this.handleError));
    }
    decrementOrderPrice(orderId) {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.put(`${environment.apiUrl}/api/order/decrement/${orderId}`, { headers, responseType: 'json' })
            .pipe(catchError(this.handleError));
    }
    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            console.log('Client side error.');
            errorMessage = `Error: ${error.error.message}`;
        }
        else {
            // server-side error
            console.log('Server side error.');
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }
};
OrderService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], OrderService);
export { OrderService };
//# sourceMappingURL=order.service.js.map