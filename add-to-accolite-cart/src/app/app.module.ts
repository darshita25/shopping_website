import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './allComponents/header/header.component';
import { CartComponent } from './allComponents/cart/cart.component';
import { ProductsComponent } from './allComponents/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { DoubleClickProductComponent } from './allComponents/double-click-product/double-click-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipe } from './shared/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './allComponents/login-page/login-page.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CheckoutboxComponent } from './allComponents/checkoutbox/checkoutbox.component';
import { LogoutComponent } from './allComponents/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductsComponent,
    DoubleClickProductComponent,
    FilterPipe,
    LoginPageComponent,
    CheckoutboxComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
