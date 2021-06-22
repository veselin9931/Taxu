import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Wallet } from 'src/_models';
import { AccountService } from '../account.service';
import { SharedService } from '../shared/shared.service';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor(private http: HttpClient, private sharedService: SharedService, private accountService: AccountService) { }

  public getMyWallet(userId: string): Observable<Wallet> {
    const headers = this.sharedService.headerGerneration();
    return this.http.get<Wallet>(`${environment.apiUrl}/api/wallet/${userId}`, {headers})
      .pipe(
        catchError(this.handleError)
      );
  }


  public chargeWallet(userId: string, amount: number): Observable<Wallet> {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.accountService.userValue.token}` });
    return this.http.put<Wallet>(`${environment.apiUrl}/api/wallet/increase/${userId}/${amount}`, { headers, responseType: 'json' },)
      .pipe(
        catchError(this.handleError)
      );

  }

  public dischargeWallet(userId: string, amount: number): Observable<Wallet> {
    const headers = this.sharedService.headerGerneration();
    return this.http.put<Wallet>(`${environment.apiUrl}/api/wallet/decrease/${userId}/${amount}`, { headers, responseType: 'json' },)
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
