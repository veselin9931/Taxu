import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccountService } from '../account.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private accountService: AccountService) { }

  public headerGerneration(): HttpHeaders {
    const user = this.accountService.userValue;

    return new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${user.token}` });
  }
}
