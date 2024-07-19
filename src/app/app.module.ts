import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './Components/app.component';
import { LoginComponent } from './Components/Pages/login/login.component';
import { RegisterComponent } from './Components/Pages/register/register.component';
import { HomeComponent } from './Components/Pages/home/home.component';
import { AdminComponent } from './Components/Pages/admin/admin.component';
import { CartComponent } from './Components/cart/cart.component';
import { ShopComponent } from './Components/shop/shop.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './Components/spinner/spinner.component';
import { ToastComponent } from './Components/toast/toast.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ShopAndCartComponent } from './Components/Pages/shop-and-cart/shop-and-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AdminComponent,
    ShopComponent,
    CartComponent,
    SpinnerComponent,
    ToastComponent,
    NavbarComponent,
    ShopAndCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
