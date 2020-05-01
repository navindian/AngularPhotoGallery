import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { PhotosComponent } from "./components/photos/photos.component";
import { AlbumsComponent } from "./components/albums/albums.component";
import { FullImageComponent } from "./full-image/full-image.component";
import { LogInComponent } from "./log-in/log-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";

const routes: Routes = [
  { path: "photo/:albumId", component: PhotosComponent },
  { path: "albums", component: AlbumsComponent },
  { path: "showPhoto/:imageurl", component: FullImageComponent },
  { path: "signup", component: SignUpComponent },
  { path: "login", component: LogInComponent },
  { path: "", component: LogInComponent },
  { path: "**", redirectTo: "login" },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
