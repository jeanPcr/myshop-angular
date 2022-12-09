import { Component, Input } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Product } from '../type';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
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
  constructor(private productService: ProductService) {}
  onAddToCart(productID: number) {
    this.productService.addProductToCart(productID);
  }
}
