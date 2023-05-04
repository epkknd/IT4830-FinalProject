import { Injectable } from '@angular/core';
import { Item } from './interfaces/item';
@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private cart: Item[] = [];
  constructor() { }




  addItemToCart(item: Item) {
    this.cart.push(item);
  }

  getCartItems(){
    return this.cart;
  }

  removeItem(item: Item) {
    for (let i = 0; i < this.cart.length; i++) {
      if(this.cart[i]._id == item._id) {
        this.cart.splice(i,1);
        break;
      }
    }
  }
}
