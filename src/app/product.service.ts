import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from './product/type';
import data from '../data/smatphones.json';

@Injectable()
export class ProductService {
  initial_cart: number[] = [];
  cart: Subject<number[]> = new Subject<number[]>(); // store product ID in cart
  constructor() {
    const cartLocalStorage = localStorage.getItem('cart');
    if (cartLocalStorage) {
      const cart = JSON.parse(cartLocalStorage);
      console.log(cart);
    } else {
      this.cart.next(this.initial_cart);
      localStorage.setItem('cart', JSON.stringify(this.initial_cart));
    }
  }

  getCart() {
    const cartLocalStorage = localStorage.getItem('cart');
    if (cartLocalStorage) {
      return JSON.parse(cartLocalStorage);
    }
  }

  addProductToCart(productID: number) {
    const newCart = [...this.getCart(), productID];
    localStorage.setItem('cart', JSON.stringify(newCart));
    this.cart.next(newCart);
  }
  getProducts(): Product[] {
    const products: Product[] = data.products;
    return products;
  }
  getSelectedProducts(productIDList: number[]): Product[] {
    const products = this.getProducts();
    const selectedProducts: Product[] = [];
    products.forEach((product) => {
      if (productIDList.includes(product.id)) {
        selectedProducts.push(product);
      }
    });
    return selectedProducts;
  }
  removeOneProduct(productID: number) {
    console.log('remove service');

    let cartLocalStorage = localStorage.getItem('cart');
    if (cartLocalStorage) {
      let products = JSON.parse(cartLocalStorage) as number[];
      const index = products.indexOf(productID);
      console.log(index);

      if (index !== -1) {
        products.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(products));
        this.cart.next(products);
      }
    }
  }
}
