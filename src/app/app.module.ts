import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { EcommerceService } from './ecommerce.service';
import { appRoutes } from './routes';
import { FormsModule } from '@angular/forms';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';






@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
    ShoppingCartComponent,


  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule


  ],
  providers: [EcommerceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
