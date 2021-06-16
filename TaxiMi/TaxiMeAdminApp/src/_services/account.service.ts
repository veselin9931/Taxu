import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'environments/environment';
import { User } from '_models';
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

  headerGerneration(): HttpHeaders {
    const user = this.userValue;

    return new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${user.token}` });
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
    this.router.navigate(['products']);
  }

  register(user: User) {
    return this.http.post(`${environment.apiUrl}/api/account`, user);
  }

  //Drivers
  getAll() {
    let headers = this.headerGerneration();
    return this.http.get<User[]>(`${environment.apiUrl}/api/account`, { headers, responseType: 'json' });
  }

  //Users
  getAllUsers() {
    let headers = this.headerGerneration();
    console.log(headers)
    return this.http.get<User[]>(`${environment.apiUrl}/api/account/user/`, { headers, responseType: 'json' });
  }

  getUserByDriverId(id: string) {
    return this.http.get<User>(`${environment.apiUrl}/api/account/driver/${id}`);
  }

  getById(id: string) {
    return this.http.get<User>(`${environment.apiUrl}/api/account/user/${id}`);
  }

  updateDriving(id, value): Observable<User>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
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

  update(id, params) {
    return this.http.put(`${environment.apiUrl}/api/${id}`, params)
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
    return this.http.delete(`${environment.apiUrl}/api/${id}`)
      .pipe(map(x => {
        // auto logout if the logged in user deleted their own record
        if (id == this.userValue.id) {
          this.logout();
        }
        return x;
      }));
  }
}
