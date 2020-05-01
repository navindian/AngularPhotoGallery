import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { AlbumsComponent } from "./components/albums/albums.component";
import { PhotosComponent } from "./components/photos/photos.component";
import { routing } from "./app.routing";
import { FullImageComponent } from "./full-image/full-image.component";
import { LogInComponent } from "./log-in/log-in.component";
import { LoadingSpinnerComponent } from "./shared/loading-spinner.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    PhotosComponent,
    FullImageComponent,
    LogInComponent,
    LoadingSpinnerComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
