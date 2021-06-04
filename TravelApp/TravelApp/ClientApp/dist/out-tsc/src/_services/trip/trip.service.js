import { __decorate } from "tslib";
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
let TripService = class TripService {
    constructor(http, accountService) {
        this.http = http;
        this.accountService = accountService;
        this.trips = [];
        this.currentTripDriverId = this.accountService.userValue.id;
        this.currentOrder = "";
    }
    createTrip(data) {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        this.currentTripOrderId = data.orderId;
        this.currentOrder = data.order;
        return this.http.post(`${environment.apiUrl}/api/trip`, data, { headers, responseType: 'text' })
            .pipe(tap(data => console.log('created trip: ', JSON.stringify(data))), catchError(this.handleError));
    }
    getTrip(applicationUserId) {
        return this.http.get(`${environment.apiUrl}/api/trip/${applicationUserId}`)
            .pipe(tap(data => this.trip = data), catchError(this.handleError));
    }
    startTrip(tripId) {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.put(`${environment.apiUrl}/api/trip/start/${tripId}`, { headers, responseType: 'json' })
            .pipe(catchError(this.handleError));
    }
    navigateToUser(tripId) {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.put(`${environment.apiUrl}/api/trip/navigate/${tripId}`, { headers, responseType: 'json' })
            .pipe(catchError(this.handleError));
    }
    cancelTrip(tripId) {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.put(`${environment.apiUrl}/api/trip/cancel/${tripId}`, { headers, responseType: 'json' })
            .pipe(catchError(this.handleError));
    }
    completeTrip(tripId) {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.put(`${environment.apiUrl}/api/trip/finish/${tripId}`, { headers, responseType: 'json' })
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
TripService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], TripService);
export { TripService };
//# sourceMappingURL=trip.service.js.map