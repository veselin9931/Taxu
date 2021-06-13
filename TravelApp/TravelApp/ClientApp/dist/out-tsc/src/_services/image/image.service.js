import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
let ImageService = class ImageService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    upload(data, folderName, userId, type) {
        return this.httpClient.post(`${environment.apiUrl}/api/image/${folderName}/${userId}/${type}`, data, {
            reportProgress: true,
            observe: "events"
        }).pipe(catchError(this.handleError));
    }
    getMyPicture(userId) {
        return this.httpClient.get(`${environment.apiUrl}/api/image/user/${userId}`)
            .pipe(catchError(this.handleError));
    }
    getUserDocuments(userId) {
        return this.httpClient.get(`${environment.apiUrl}/api/image/documents/${userId}`)
            .pipe(catchError(this.handleError));
    }
    getUserCarPictures(userId) {
        return this.httpClient.get(`${environment.apiUrl}/api/image/cars/${userId}`)
            .pipe(catchError(this.handleError));
    }
    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            console.log('Client side error.');
            errorMessage = `Error: ${error.error.message}`;
        }
        else {
            // server-side error
            console.log('Server side error.');
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }
};
ImageService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ImageService);
export { ImageService };
//# sourceMappingURL=image.service.js.map