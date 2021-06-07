import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
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
      catchError(this.handleError)
    )
  }

  getMyPicture(userId: string): Observable<Image> {
    return this.httpClient.get<Image>(`${environment.apiUrl}/api/image/user/${userId}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  getUserDocuments(userId: string): Observable<Image> {
    return this.httpClient.get<Image>(`${environment.apiUrl}/api/image/documents/${userId}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  getUserCarPictures(userId: string): Observable<Image> {
    return this.httpClient.get<Image>(`${environment.apiUrl}/api/image/cars/${userId}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  removeDocument(id: string): Observable<Image> {
    return this.httpClient.delete<Image>(`${environment.apiUrl}/api/image/${id}`)
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


