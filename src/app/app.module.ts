import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './product/product-card/product-card.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './cart/cart.component';
import { ProductViewComponent } from './product/product-view/product-view.component';
import { ProductService } from './product.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CartProductRowComponent } from './cart-product-row/cart-product-row.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    ToolbarComponent,
    HomeComponent,
    ProductListComponent,
    ProfileComponent,
    CartComponent,
    ProductViewComponent,
    PageNotFoundComponent,
    CartProductRowComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
