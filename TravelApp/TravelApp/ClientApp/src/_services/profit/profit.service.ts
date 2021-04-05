import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Profit } from '../../_models';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProfitService {

  constructor(private http: HttpClient) { }

  public getTotalProfit(): Observable<Profit> {
    return this.http.get<Profit>(`${environment.apiUrl}/api/profit`)
      .pipe(
      );
  }

  public addToProfit(value: number): Observable<Profit>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Profit>(`${environment.apiUrl}/api/profit/${value}`, { headers, responseType: 'json' },)
    .pipe(
    );
  }

}
