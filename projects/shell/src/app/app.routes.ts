import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
    {
        path: 'pageA',
        loadComponent: () =>
            loadRemoteModule('component1', './PageA').then((m) => m.PageAComponent),
            canActivate: [AuthGuard],
    },
    {
        path: 'pageB',
        loadComponent: () =>
            loadRemoteModule('component1', './PageB').then((m) => m.PageBComponent),
            canActivate: [AuthGuard],
    },
    {
        path: 'pageC',
        loadComponent: () =>
            loadRemoteModule('component2', './PageC').then((m) => m.PageCComponent),
            canActivate: [AuthGuard],
    },
    {
        path: 'pageD',
        loadComponent: () =>
            loadRemoteModule('component2', './PageD').then((m) => m.PageDComponent),
            canActivate: [AuthGuard],
    },
    { 
        path: 'about', 
        component: AboutComponent, pathMatch: 'full' 
    },
    { 
        path: '', 
        component: HomeComponent, pathMatch: 'full' },
    {
        path: '**',
        component: HomeComponent,
    }
];
