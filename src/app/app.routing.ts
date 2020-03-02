import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PhotosComponent } from './components/photos/photos.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { FullImageComponent } from './full-image/full-image.component';

const routes: Routes = [
    { path: 'photo/:albumId', component: PhotosComponent },
    { path: '', component: AlbumsComponent },
    { path: 'showPhoto/:imageurl', component: FullImageComponent },
    { path: 'album', component: AlbumsComponent }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
