import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { PhotoModel } from '../models/photoModel';

@Injectable({
  providedIn: 'root'
})
export class PhotoServiceService {

  photoUrl = 'https://jsonplaceholder.typicode.com/photos?albumId=';

  constructor(private http: HttpClient) { }

  getPhotosByAlbumId(albumId): Observable<PhotoModel[]> {

    return this.http.get<PhotoModel[]>(this.photoUrl + albumId);
  }
}
