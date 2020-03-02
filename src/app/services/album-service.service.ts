import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { HttpClient } from '@angular/common/http';
import { AlbumModel } from '../models/albumModel';

@Injectable({
  providedIn: 'root'
})
export class AlbumServiceService {

  private albumsUrl = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<AlbumModel[]> {

    return this.http.get<AlbumModel[]>(this.albumsUrl);
  }
}
