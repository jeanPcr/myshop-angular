import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor(private productService: ProductService) {}
  products = this.productService.getProducts();
  suggestions = [this.products[1], this.products[6], this.products[3]];
  ngOnInit() {
    console.log(this.products);
  }
}
