import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { EcommerceService } from './ecommerce.service';
import { appRoutes } from './home-page/routes';





@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)


  ],
  providers: [EcommerceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
