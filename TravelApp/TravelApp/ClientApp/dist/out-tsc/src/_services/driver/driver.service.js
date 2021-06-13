import { __decorate } from "tslib";
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
let DriverService = class DriverService {
    constructor(http) {
        this.http = http;
        this.drivers = [];
    }
    getDriverHistory(userId) {
        return this.http.get(`${environment.apiUrl}/api/order/history/${userId}`)
            .pipe(catchError(this.handleError));
    }
    getLastCompletedOrder(userId) {
        return this.http.get(`${environment.apiUrl}/api/order/completed/${userId}`)
            .pipe(catchError(this.handleError));
    }
    getDriver(driverId) {
        return this.http.get(`${environment.apiUrl}/api/driver/${driverId}`)
            .pipe(catchError(this.handleError));
    }
    createDriver(data) {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post(`${environment.apiUrl}/api/driver`, data, { headers, responseType: 'text' })
            .pipe(catchError(this.handleError));
    }
    getDriverCars(driverId) {
        return this.http.get(`${environment.apiUrl}/api/car/driver/${driverId}`)
            .pipe(catchError(this.handleError));
    }
    getDriverActiveCar(driverId) {
        return this.http.get(`${environment.apiUrl}/api/car/driver/active/${driverId}`)
            .pipe(catchError(this.handleError));
    }
    getDriverByReferral(referral) {
        return this.http.get(`${environment.apiUrl}/api/driver/referral/${referral}`)
            .pipe(catchError(this.handleError));
    }
    locateDriver(driverId, lat, lng) {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.put(`${environment.apiUrl}/api/driver/location/${driverId}/${lat}/${lng}`, { headers, responseType: 'json' })
            .pipe(catchError(this.handleError));
    }
    voteUp(driverId) {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.put(`${environment.apiUrl}/api/driver/voteUp/${driverId}`, { headers, responseType: 'json' })
            .pipe(catchError(this.handleError));
    }
    voteDown(driverId) {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.put(`${environment.apiUrl}/api/driver/voteDown/${driverId}`, { headers, responseType: 'json' })
            .pipe(catchError(this.handleError));
    }
    lowerDriverCommission(driverId) {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.put(`${environment.apiUrl}/api/driver/${driverId}`, { headers, responseType: 'json' })
            .pipe(catchError(this.handleError));
    }
    activeCar(id, driverId) {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.put(`${environment.apiUrl}/api/car/${id}/${driverId}`, { headers, responseType: 'json' })
            .pipe(catchError(this.handleError));
    }
    createCar(data) {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post(`${environment.apiUrl}/api/car`, data, { headers, responseType: 'text' })
            .pipe(catchError(this.handleError));
    }
    deleteCar(id) {
        return this.http.delete(`${environment.apiUrl}/api/car/${id}`)
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
DriverService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], DriverService);
export { DriverService };
//# sourceMappingURL=driver.service.js.map