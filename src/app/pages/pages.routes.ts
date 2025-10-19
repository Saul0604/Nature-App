import { Routes } from "@angular/router";
import { AdminLayout } from "./admin-layout/admin-layout";
import { PlacesListComponent } from "./places-list.component/places-list.component";
import { PlacesComponent } from "./places.component/places.component";
import { SenderosComponent } from "./senderos.component/senderos.component";

export const routes : Routes = [
    {
      path: 'admin',
      component: AdminLayout,
      children: [
        { path: 'placeslist', component: PlacesListComponent },
        { path: 'trails', component : SenderosComponent },
        { path: 'places', component: PlacesComponent },
        { path: '', redirectTo: 'places', pathMatch: 'full' }
      ]
    }
];