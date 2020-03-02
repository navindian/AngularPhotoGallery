import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { PhotoModel } from '../../models/photoModel';
import { PhotoServiceService } from '../../services/photo-service.service';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  data: PhotoModel[];
  albumId;

  constructor(private http: HttpClient, private photoService: PhotoServiceService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.getData();
  }

  getData() {

    this.albumId = this.route.snapshot.params['albumId'];

    this.photoService.getPhotosByAlbumId(this.albumId).subscribe(
      (response) => { this.data = response; }
    );
  }

  showFullPhoto(imageurl) {

    this.router.navigate(['/showPhoto', imageurl]);
  }

}
