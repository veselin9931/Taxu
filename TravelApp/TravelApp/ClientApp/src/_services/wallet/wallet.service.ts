import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Wallet } from 'src/_models';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor(private http: HttpClient) { }

  public getMyWallet(userId: string): Observable<Wallet> {
    return this.http.get<Wallet>(`${environment.apiUrl}/api/wallet/${userId}`)
      .pipe(
      );
  }


  public chargeWallet(userId: string, amount: number): Observable<Wallet> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Wallet>(`${environment.apiUrl}/api/wallet/increase/${userId}/${amount}`, { headers, responseType: 'json' },)
      .pipe(
      );

  }

  public dischargeWallet(userId: string, amount: number): Observable<Wallet> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Wallet>(`${environment.apiUrl}/api/wallet/decrease/${userId}/${amount}`, { headers, responseType: 'json' },)
      .pipe(
      );

  }
}
