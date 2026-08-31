import { Routes } from '@angular/router';
import { Home } from './features/home/pages/home/home';
import { Products } from './features/products/pages/products/products';

export const routes: Routes = [
    { path: '', component: Home },
    //{ path: 'products', component: Products }
];
