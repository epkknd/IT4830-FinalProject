import { Component } from '@angular/core';
import { Item } from 'src/app/interfaces/item';
import { StoreService } from '../store.service';
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {
  items: Item[] = [{id: 1, name: "item1", price: 1},{id: 2, name: "item2", price: 2},{id: 3, name: "item3", price: 3},{id: 4, name: "item4", price: 4}];

  constructor(private storeService: StoreService){}

  onSubmit(item: Item){
    this.storeService.addItemToCart(item);
  }
}
