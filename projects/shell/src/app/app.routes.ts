import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
        path: 'component1',
        loadComponent: () =>
            loadRemoteModule('component1', './Component1').then((m) => m.AppComponent),
    },
    {
        path: 'pageA',
        loadComponent: () =>
            loadRemoteModule('component1', './PageA').then((m) => m.PageAComponent),
    },
    {
        path: 'pageB',
        loadComponent: () =>
            loadRemoteModule('component1', './PageB').then((m) => m.PageBComponent),
    },
    {
        path: 'component2',
        loadComponent: () =>
            loadRemoteModule('component2', './Component2').then((m) => m.AppComponent),
    },
    {
        path: 'pageC',
        loadComponent: () =>
            loadRemoteModule('component2', './PageC').then((m) => m.PageCComponent),
    },
    {
        path: 'pageD',
        loadComponent: () =>
            loadRemoteModule('component2', './PageD').then((m) => m.PageDComponent),
    },
    { path: '', component: HomeComponent, pathMatch: 'full' },
    {
        path: '**',
        component: HomeComponent,
    }
];
