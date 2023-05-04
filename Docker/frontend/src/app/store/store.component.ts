import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/interfaces/item';
import { StoreService } from '../store.service';
// import { StoreDataService } from '../store-data.service';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  //items: Item[] = [{id: 1, name: "item1", price: 1},{id: 2, name: "item2", price: 2},{id: 3, name: "item3", price: 3},{id: 4, name: "item4", price: 4}];
  items: Item[] = [];
  constructor(private storeService: StoreService, private http: HttpClient){}

  ngOnInit() {
    // this.storeDataService.getData().subscribe(
    //   (items: Item[]) => {
    //     this.items = items;
    //   },
    //   (error: any) => {
    //     console.error(error);
    //   }
    // );
    this.http.get<Item[]>('http://localhost/api').subscribe((items: Item[]) =>{
      this.items = items
    },
    (error: any) => {
      console.error(error);
    }
    );
   }

  onSubmit(item: Item){
    this.storeService.addItemToCart(item);
  }
}
