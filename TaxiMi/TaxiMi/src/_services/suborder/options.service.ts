import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { SubOrderOpt } from '../../_models/suporder-opt';
import { SharedService } from '../shared/shared.service';

@Injectable({
  providedIn: 'root'
})
export class OptionsService {
    public order: SubOrderOpt;
    public orders = [];

    constructor(private http: HttpClient, private sharedService: SharedService) { }

    public getOptions() {
        const headers = this.sharedService.headerGerneration();

        return this.http.get <SubOrderOpt[]>(`${environment.apiUrl}/api/suborder/options`, { headers })
            .pipe(
                catchError(this.handleError)
            );
    }

    public getOptionById(id: string) {
        const headers = this.sharedService.headerGerneration();

        return this.http.get<SubOrderOpt>(`${environment.apiUrl}/api/suborder/options/${id}`, { headers })
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
