import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { SubOrder } from '../../_models/suborder';
import { SharedService } from '../shared/shared.service';

@Injectable({
  providedIn: 'root'
})
export class SuborderService {
   
  

    constructor(private http: HttpClient, private sharedService: SharedService) { }

    getAllSubOrders(status: string) {
        const headers = this.sharedService.headerGerneration();
        return this.http.get<SubOrder[]>(`${environment.apiUrl}/api/suborder/status/${status}`, { headers })
            .pipe(
                catchError(this.handleError)
            );
    }

    getSubOrderByUserId(userId: string) {
        const headers = this.sharedService.headerGerneration();
        return this.http.get<SubOrder>(`${environment.apiUrl}/api/suborder/user/${userId}`, { headers })
            .pipe(
                catchError(this.handleError)
            );
    }


    getMyOrder(id: string) {
        const headers = this.sharedService.headerGerneration();
        return this.http.get <SubOrder>(`${environment.apiUrl}/api/suborder/${id}`, { headers })
            .pipe(
                catchError(this.handleError)
            );
    }


    public createSubOrder(data) {
        const headers = this.sharedService.headerGerneration();

        return this.http.post(`${environment.apiUrl}/api/SubOrder`, data, { headers, responseType: 'text' })
            .pipe(
                catchError(this.handleError)
            );
    }

    public editStatus(orderId, data) {
        const headers = this.sharedService.headerGerneration();

        return this.http.put(`${environment.apiUrl}/api/SubOrder/${orderId}`, data, { headers, responseType: 'text' })
            .pipe(
                catchError(this.handleError)
            );
    }

    deleteOrder(id: string) {
        const headers = this.sharedService.headerGerneration();
        return this.http.delete(`${environment.apiUrl}/api/suborder/${id}`, { headers })
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
