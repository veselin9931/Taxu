import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { error } from 'selenium-webdriver';
import { environment } from 'src/environments/environment';
import { Image } from '../../_models'

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private httpClient: HttpClient) { }

  upload(data: any, folderName: string, userId: string, type: string): Observable<HttpEvent<any>> {
    return this.httpClient.post(`${environment.apiUrl}/api/image/${folderName}/${userId}/${type}`, data, {
      reportProgress: true,
      observe: "events"
    }).pipe(
    )
  }

  getMyPicture(userId: string): Observable<Image> {
    return this.httpClient.get<Image>(`${environment.apiUrl}/api/image/user/${userId}`)
      .pipe(
      );
  }

  getUserDocuments(userId: string): Observable<Image> {
    return this.httpClient.get<Image>(`${environment.apiUrl}/api/image/documents/${userId}`)
      .pipe(
      );
  }

  getUserCarPictures(userId: string): Observable<Image> {
    return this.httpClient.get<Image>(`${environment.apiUrl}/api/image/cars/${userId}`)
      .pipe(
      );
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}


