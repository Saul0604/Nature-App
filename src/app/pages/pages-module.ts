import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaceService } from '../core/place.service';
import { PlacesComponent } from './places.component/places.component';
import { SenderosComponent } from './senderos.component/senderos.component';
import { routes } from './pages.routes';



@NgModule({
  declarations: [
    PlacesComponent,
    SenderosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [PlaceService],
  exports: [
    PlacesComponent,
    SenderosComponent
  ]
})
export class PagesModule { }
