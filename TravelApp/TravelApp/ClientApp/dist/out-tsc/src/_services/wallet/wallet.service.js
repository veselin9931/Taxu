import { __decorate } from "tslib";
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
let WalletService = class WalletService {
    constructor(http) {
        this.http = http;
    }
    getMyWallet(userId) {
        return this.http.get(`${environment.apiUrl}/api/wallet/${userId}`)
            .pipe(catchError(this.handleError));
    }
    chargeWallet(userId, amount) {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.put(`${environment.apiUrl}/api/wallet/increase/${userId}/${amount}`, { headers, responseType: 'json' })
            .pipe(catchError(this.handleError));
    }
    dischargeWallet(userId, amount) {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.put(`${environment.apiUrl}/api/wallet/decrease/${userId}/${amount}`, { headers, responseType: 'json' })
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
WalletService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], WalletService);
export { WalletService };
//# sourceMappingURL=wallet.service.js.map