import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Profit } from '../../_models';
import { environment } from '../../environments/environment'
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SharedService } from '../shared/shared.service';
@Injectable({
  providedIn: 'root'
})
export class ProfitService {

  constructor(private http: HttpClient, private sharedService: SharedService) { }

  public getTotalProfit(): Observable<Profit> {
    const headers = this.sharedService.headerGerneration();
    return this.http.get<Profit>(`${environment.apiUrl}/api/profit`, {headers})
      .pipe(
        catchError(this.handleError)
      );
  }

  public addToProfit(value: number): Observable<Profit>{
    const headers = this.sharedService.headerGerneration();
    return this.http.put<Profit>(`${environment.apiUrl}/api/profit/${value}`, { headers, responseType: 'json' },)
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
