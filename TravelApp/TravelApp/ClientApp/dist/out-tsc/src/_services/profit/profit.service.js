import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
let ProfitService = class ProfitService {
    constructor(http) {
        this.http = http;
    }
    getTotalProfit() {
        return this.http.get(`${environment.apiUrl}/api/profit`)
            .pipe(catchError(this.handleError));
    }
    addToProfit(value) {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.put(`${environment.apiUrl}/api/profit/${value}`, { headers, responseType: 'json' })
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
ProfitService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ProfitService);
export { ProfitService };
//# sourceMappingURL=profit.service.js.map