import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: 'component1',
        loadComponent: () =>
            loadRemoteModule('component1', './Component1').then((m) => m.AppComponent),
    },
    {
        path: 'component2',
        loadComponent: () =>
            loadRemoteModule('component2', './Component2').then((m) => m.AppComponent),
    },
    { path: '', component: HomeComponent, pathMatch: 'full' },
    {
        path: '**',
        component: HomeComponent,
    }
];
