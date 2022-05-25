# Solution

#### 1. Create 2 components
```
ng g c shop
ng g c shop/stock
```

#### 2. Create a class `Item.ts`

```ts
export default class Item{

    constructor(public Id:number, public Name:string, public Price:number, public Stock:number){}

}
```

#### 3. Create an array in `shop.ts`:
```ts
import { Component } from '@angular/core';
import Item from './item';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {

  public myItems: Item[] = [
    new Item(1, 'Milk', 2.5, 18),
    new Item(2, 'Bread', 10, 100),
    new Item(3, 'Cheese', 8.5, 12),
    new Item(4, 'Apple', 1.2, 150),
  ];

}
```
#### 4. Show the details in a table in `shop.html`
```html
<div class="container">
    <h2 class="text-center">Welcome to our shop</h2>

    <table class="table table-striped">

        <thead>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
        </thead>

        <tbody>
            <tr *ngFor="let item of myItems">
                <td>{{ item.Id }}</td>
                <td>{{ item.Name }}</td>
                <td>{{ item.Price }}</td>
                <td>{{ item.Stock }}</td>
            </tr>
        </tbody>

    </table>

</div>
```

#### 5. stock.html
```html
<input type="number" [(ngModel)]='newStockNumber'/>

<button (click)="changeStock()">Change stock!</button>

```


#### stock.ts

```ts
import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent {

  // input from user (ngModel)
  public newStockNumber:number;

  // value from parent-component: keep the id for the item we want to update
  @Input() itemId:number;

  // Will hold the function `changeStockShop` from parent-component
  @Output() stockNumberUpdated = new EventEmitter();

  // function to update stock:
  changeStock(){
    this.stockNumberUpdated.emit({ id: this.itemId, newStockNumber:
    this.newStockNumber })

    // reset input
    this.newStockNumber = null;
  }
  
}

```

#### shop.ts
```ts
import { Component } from '@angular/core';
import Item from './item';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {

  public myItems: Item[] = [
    new Item(1, 'Milk', 2.5, 18),
    new Item(2, 'Bread', 10, 100),
    new Item(3, 'Cheese', 8.5, 12),
    new Item(4, 'Apple', 1.2, 150),
  ];

  itemToChange;

  // The function will update the correct object, by its id. 
  // item = { id: , newStockNumber: }
  changeStockShop(item){
    if(item.newStockNumber != null){
      this.itemToChange = this.myItems.find(x => x.Id === item.id);
      // Update the stock value
      if(this.itemToChange != null)
        this.itemToChange.Stock = item.newStockNumber;
    }
  }



}

```

#### shop.html
```ts
<div class="container">
    <h2 class="text-center">Welcome to our shop</h2>

    <table class="table table-striped">

        <thead>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
        </thead>

        <tbody>
            <tr *ngFor="let item of myItems">
                <td>{{ item.Id }}</td>
                <td>{{ item.Name }}</td>
                <td>{{ item.Price }}</td>
                <td>{{ item.Stock }}</td>
                <td>
                    <!-- call child component for each row - and send Input & Output -->
                    <app-stock
                    [itemId]="item.Id"
                    (stockNumberUpdated)="changeStockShop($event)"
                    ></app-stock>
                </td>
            </tr>
        </tbody>

    </table>

</div>
```


## Update color by stock number: 

#### stock.ts
```ts
import { Component, Input, OnChanges, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnChanges{

  // input from user (ngModel)
  public newStockNumber:number;

  // value from parent-component: keep the id for the item we want to update
  @Input() itemId:number;

  // Will hold the function `changeStockShop` from parent-component
  @Output() stockNumberUpdated = new EventEmitter();

  // function to update stock:
  changeStock(){
    this.stockNumberUpdated.emit({ id: this.itemId, newStockNumber:
    this.newStockNumber })

    // reset input
    this.newStockNumber = null;
  }


  // --------------------- color --------------------------- 
  // value of stock - for each row
  @Input() stock:number;
  color:string = '';

  // will listen to changes in Input values
  // Will run once when app is on, and any time input changes. 
  ngOnChanges(): void {
    this.stock >= 30 ? this.color = 'blue' : this.color = 'red';
  }
  
}

```

#### stock.html
```html
<input type="number" [(ngModel)]='newStockNumber'/>

<button (click)="changeStock()" [style.backgroundColor]="color">Change stock!</button>

```