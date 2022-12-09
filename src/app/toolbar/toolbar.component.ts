import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent {
  currentCart: number[] = this.productService.getCart();
  _subscription_currentCart: any;
  constructor(private productService: ProductService) {
    this._subscription_currentCart = this.productService.cart.subscribe(
      (value) => {
        this.currentCart = value;
      }
    );
  }
}
