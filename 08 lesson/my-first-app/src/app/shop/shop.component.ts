import { Component } from '@angular/core';
import Item from './items';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent{

  myItems:Item[] = [
    new Item(1, 'Milk', 5.6, 20),
    new Item(2, 'Bread', 12, 100),
    new Item(3, 'Juice', 8, 12),
    new Item(4, 'Cheeze', 10, 200),
  ];

  itemToChange;

  // Function to send to child component: item.id, item.newStockNumber
  changeStockShop(item){
    if(item.newStockNumber != null) {
      this.itemToChange = this.myItems.find
      (x => x.Id === item.id)
      this.itemToChange.Stock = item.newStockNumber;
    }
  }
}
