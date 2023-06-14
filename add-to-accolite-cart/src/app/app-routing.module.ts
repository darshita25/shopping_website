import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './allComponents/products/products.component';
import { CartComponent } from './allComponents/cart/cart.component';
import { DoubleClickProductComponent } from './allComponents/double-click-product/double-click-product.component';
import { LoginPageComponent } from './allComponents/login-page/login-page.component';

const routes: Routes = [
  {path:'',component:LoginPageComponent},
  {path:'products',component:ProductsComponent},
  {path:'cart',component:CartComponent},
  {path:'doubleClick',component:DoubleClickProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
