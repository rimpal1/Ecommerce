import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { HomePageComponent } from './home-page/home-page.component';

export const appRoutes: Routes =  [
  { path: 'SignUp', component: LoginComponent, pathMatch: 'full'},
  { path: 'Shopping-Cart', component: ShoppingCartComponent},
  { path: 'Home', component: HomePageComponent}

];
