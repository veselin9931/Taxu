import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Profit } from '../../_models';
import { environment } from '../../environments/environment'
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProfitService {

  constructor(private http: HttpClient) { }

  public getTotalProfit(): Observable<Profit> {
    return this.http.get<Profit>(`${environment.apiUrl}/api/profit`)
      .pipe(
        catchError(this.handleError)
      );
  }

  public addToProfit(value: number): Observable<Profit>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
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
