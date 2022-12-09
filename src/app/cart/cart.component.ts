import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product/type';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  currentCart: number[] = this.productService.getCart();
  _subscription_currentCart: any;
  constructor(private productService: ProductService) {
    this._subscription_currentCart = this.productService.cart.subscribe(
      (value) => {
        this.currentCart = value;
      }
    );
  }
  shoppingCart: Product[] = this.productService.getSelectedProducts(
    this.currentCart
  );
}
