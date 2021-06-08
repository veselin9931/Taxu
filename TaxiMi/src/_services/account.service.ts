import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { User } from '../_models';
import { environment } from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class AccountService {
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;


  constructor(
    private router: Router,
    private http: HttpClient,
  ) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User {
    return this.userSubject.value;
  }
  

  login(username, password) {
    return this.http.post<User>(`${environment.apiUrl}/api/account/authenticate`, { username, password })
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
        return user;
      }));
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('user');
    this.userSubject.next(null);
  }

  register(user: User) {
    return this.http.post(`${environment.apiUrl}/api/account`, user);
  }

  getAll() {
    const headers =new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.userValue.token}` });
    return this.http.get<User[]>(`${environment.apiUrl}/users`, {headers});
  }

  getById(id: string) {
    const headers =new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.userValue.token}` });
    return this.http.get<User>(`${environment.apiUrl}/api/account/${id}`, {headers});
  }

  updateDriving(id, value): Observable<User> {
    const headers =new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.userValue.token}` });
    return this.http.put<User>(`${environment.apiUrl}/api/account/${id}/${value}`, { headers, responseType: 'json' },)
      .pipe(map(x => {
        // update stored user if the logged in user updated their own record
        if (id == this.userValue.id) {
          // update local storage
          const user = { ...this.userValue, value };
          localStorage.setItem('user', JSON.stringify(user));

          // publish updated user to subscribers
          this.userSubject.next(user);
        }
        return x;
      }));
  }

  updateAlert(id, value): Observable<User> {
    const headers =new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.userValue.token}` });
    return this.http.put<User>(`${environment.apiUrl}/api/account/${id}/alert/${value}`, { headers, responseType: 'json' },)
      .pipe(map(x => {
        // update stored user if the logged in user updated their own record
        if (id == this.userValue.id) {
          // update local storage
          const user = { ...this.userValue, value };
          localStorage.setItem('user', JSON.stringify(user));

          // publish updated user to subscribers
          this.userSubject.next(user);
        }
        return x;
      }));
  }

  updateLanguage(id, value): Observable<User> {
    const headers =new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.userValue.token}` });
    return this.http.put<User>(`${environment.apiUrl}/api/account/${id}/language/${value}`, { headers, responseType: 'json' },)
      .pipe(map(x => {
        // update stored user if the logged in user updated their own record
        if (id == this.userValue.id) {
          // update local storage
          const user = { ...this.userValue, value };
          localStorage.setItem('user', JSON.stringify(user));

          // publish updated user to subscribers
          this.userSubject.next(user);
        }
        return x;
      }));
  }

  update(id, params) {
    const headers =new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.userValue.token}` });
    return this.http.put(`${environment.apiUrl}/api/${id}`, params,{headers})
      .pipe(map(x => {
        // update stored user if the logged in user updated their own record
        if (id == this.userValue.id) {
          // update local storage
          const user = { ...this.userValue, ...params };
          localStorage.setItem('user', JSON.stringify(user));

          // publish updated user to subscribers
          this.userSubject.next(user);
        }
        return x;
      }));
  }

  delete(id: string) {
    const headers =new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.userValue.token}` });
    return this.http.delete(`${environment.apiUrl}/api/${id}`, {headers})
      .pipe(map(x => {
        // auto logout if the logged in user deleted their own record
        if (id == this.userValue.id) {
          this.logout();
        }
        return x;
      }));
  }
}
