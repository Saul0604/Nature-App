import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceService } from '../core/place.service';
import { PlacesComponent } from './places.component/places.component';
import { PlacesListComponent } from './places-list.component/places-list.component';
import { SenderosComponent } from './senderos.component/senderos.component';
import { AdminLayout } from './admin-layout/admin-layout';
import { RouterModule } from '@angular/router';
import { routes } from './pages.routes';



@NgModule({
  declarations: [
    PlacesComponent,
    PlacesListComponent,
    SenderosComponent,
    AdminLayout
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [PlaceService],
  exports: [
    PlacesComponent,
    PlacesListComponent,
    SenderosComponent,
    AdminLayout,
    RouterModule
  ]
})
export class PagesModule { }
