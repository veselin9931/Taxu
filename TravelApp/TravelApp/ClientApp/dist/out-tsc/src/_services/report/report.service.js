import { __decorate } from "tslib";
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
let ReportService = class ReportService {
    constructor(http) {
        this.http = http;
    }
    createReport(data) {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post(`${environment.apiUrl}/api/report`, data, { headers, responseType: 'text' })
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
ReportService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ReportService);
export { ReportService };
//# sourceMappingURL=report.service.js.map