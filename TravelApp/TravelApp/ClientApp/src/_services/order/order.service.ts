import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  public createOrder(data){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    
    return this.http.post(`${environment.apiUrl}/api/order`, data, { headers, responseType: 'text' })
    .pipe(
      tap(data => console.log('created order: ', JSON.stringify(data)))
    );
  }

  
}
