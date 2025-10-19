import { Routes } from '@angular/router';

export const routes: Routes = [
    // Redirect default to 'places' (PagesModule defines the 'places' route).
    { path: '', redirectTo: 'admin', pathMatch: 'full' },
    {
        path: '',
        loadChildren: () => import('./pages/pages-module').then(m => m.PagesModule)
    }
];
