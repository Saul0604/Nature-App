import { Routes } from "@angular/router";
import { AdminLayout } from "./admin-layout/admin-layout";
import { PlacesListComponent } from "./places-list.component/places-list.component";
import { PlacesComponent } from "./places.component/places.component";
import { SenderosComponent } from "./senderos.component/senderos.component";
import { PlaceDetailComponent } from "./place-detail.component/place-detail.component";

export const routes : Routes = [
    {
      path: 'admin',
      component: AdminLayout,
      children: [
        { path: 'places-list', component: PlacesListComponent },
        { path: 'places/:id', component: PlaceDetailComponent },
        { path: 'trails', component : SenderosComponent },
        { path: 'places', component: PlacesComponent },
        { path: '', redirectTo: 'places', pathMatch: 'full' }
      ]
    }
];