import { Component, Input } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product/type';

@Component({
  selector: 'app-cart-product-row',
  templateUrl: './cart-product-row.component.html',
  styleUrls: ['./cart-product-row.component.css'],
})
export class CartProductRowComponent {
  constructor(private productService: ProductService) {}
  currentCart: number[] = this.productService.getCart();

  @Input() product: Product = {
    id: 0,
    title: '',
    description: '',
    brand: '',
    images: [''],
    price: 0,
    rating: 0,
    stock: 0,
    thumbnail: '',
    color: '',
    storage: '',
    weight: '',
  };
  removeProduct() {
    this.productService.removeOneProduct(this.product.id);
  }
  addOneMore() {
    this.productService.addProductToCart(this.product.id);
  }
  getProductQuantity(): number {
    let quantity = 1;
    this.currentCart.forEach((id) => {
      if (this.product.id === id) {
        quantity++;
      }
    });
    return quantity;
  }
  quantity = this.getProductQuantity();
}
