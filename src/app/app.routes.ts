import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', loadComponent:()=>import('./pages/home/home.component').then(c=>c.HomeComponent)},
    {path: 'login', loadComponent:()=>import('./pages/login/login.component').then(c=>c.LoginComponent)},
    {path: 'boutique/:id', loadComponent:()=>import('./pages/boutique/boutique.component').then(c=>c.BoutiqueComponent)},
    {path: '**', redirectTo: ''},
];
