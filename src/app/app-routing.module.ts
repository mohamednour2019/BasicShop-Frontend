import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/Pages/login/login.component';
import { RegisterComponent } from './Components/Pages/register/register.component';
import { HomeComponent } from './Components/Pages/home/home.component';
import { AdminComponent } from './Components/Pages/admin/admin.component';
import { ShopAndCartComponent } from './Components/Pages/shop-and-cart/shop-and-cart.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  {
    path: "home", component: HomeComponent, children: [
      { path: "admin", component: AdminComponent },
      { path: "shop", component: ShopAndCartComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
