import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Profit, Trip, Image } from '_models';
import { Car } from '_models/car';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }

  public getTotalProfit(): Observable<Profit> {
    return this.http.get<Profit>(`${environment.apiUrl}/api/profit`)
      .pipe(
      );
  }

  public getAllTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(`${environment.apiUrl}/api/trip`)
      .pipe(
      );
  }

  public getDriverDocuments(userId: string): Observable<Image[]>{
    return this.http.get<Image[]>(`${environment.apiUrl}/api/image/documents/${userId}`)
      .pipe(
      );
  }

  public getCarsImages(userId: string): Observable<Image[]>{
    return this.http.get<Image[]>(`${environment.apiUrl}/api/image/cars/${userId}`)
      .pipe(
      );
  }
  
}
