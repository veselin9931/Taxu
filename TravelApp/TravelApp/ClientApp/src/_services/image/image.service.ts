import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Image } from '../../_models'

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private httpClient: HttpClient) { }

  upload(data: any, folderName: string, userId: string): Observable<HttpEvent<any>> {
    return this.httpClient.post(`${environment.apiUrl}/api/image/${folderName}/${userId}`, data, {
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
}
