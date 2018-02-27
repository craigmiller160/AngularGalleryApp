import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ImageDetailComponent } from './components/image-detail/image-detail.component';
import { ImageService } from './services/image.service';
import { ImageFilterPipe } from './filters/filter.pipe';
import { appRoutes } from '../routes';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImageDetailComponent,
    ImageFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ImageService,
    ImageFilterPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
