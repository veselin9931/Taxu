import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { SharedService } from '../shared/shared.service';

@Injectable({
  providedIn: 'root'
})
export class SuborderService {

    constructor(private http: HttpClient, private sharedService: SharedService) { }

    public createSubOrder(data) {
        const headers = this.sharedService.headerGerneration();

        return this.http.post(`${environment.apiUrl}/api/suborder`, data, { headers, responseType: 'text' })
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
