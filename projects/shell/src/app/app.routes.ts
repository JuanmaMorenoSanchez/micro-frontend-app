import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: 'component1',
        loadComponent: () =>
            loadRemoteModule('component1', './Component1').then((m) => m.AppComponent),
            canActivate: [AuthGuard],
    },
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
        path: 'component2',
        loadComponent: () =>
            loadRemoteModule('component2', './Component2').then((m) => m.AppComponent),
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
    { path: '', component: HomeComponent, pathMatch: 'full' },
    {
        path: '**',
        component: HomeComponent,
    }
];
