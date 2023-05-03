import { Component } from '@angular/core';
import { Item } from 'src/app/interfaces/item';
import { StoreService } from '../store.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items: Item[] = [];

  constructor(private storeService: StoreService) {
  }

  ngOnInit() {
    this.items = this.storeService.getCartItems();
  }

  readItems() {
    console.log(this.storeService.getCartItems());
  }

  removeItem(item: Item) {
    this.storeService.removeItem(item);
  }
}
