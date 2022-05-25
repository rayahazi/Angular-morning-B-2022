import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnChanges{

  @Input() itemId: number; // item id to change
  // send back updated data to parent class - shop
  @Output() stockNumberUpdated = new EventEmitter();

  // This property - will get its value from input
  public newStockNumber:number;

  // Function to update the stock value: using @Output
  changeStock(){
    this.stockNumberUpdated.emit( 
      {id: this.itemId, newStockNumber: this.newStockNumber } )
      // Empty input:
      this.newStockNumber = null;
  }

    // -------- color ----------
  // button color: can be red/blue
  @Input() stock:number; // current stock number for each row - needed for colors
  color: string = '';
  // Will change the color of the button - according to stock value:
  ngOnChanges(){
    this.stock >= 30 ? (this.color = 'blue') : (this.color = 'red');
  }

}
