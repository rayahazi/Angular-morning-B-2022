import { Component } from '@angular/core';
// 1. Import
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public myService:CalculatorService;

  constructor(calc: CalculatorService){
    this.myService = calc;
  }

  public res:string = '';

  func(operation:string, values:number[]){
    this.res = `Operation: ${operation} + Values: ${values} = `
    switch (operation) {
      case 'add':
        this.res += this.myService.add(...values)
        break;
      case 'sub':
        this.res += this.myService.sub(...values)
          break;
      case 'mul':
        this.res += this.myService.mul(...values)
        break;
      case 'div':
        this.res += this.myService.div(...values)
          break;
    
      default:
        break;
    }
  }
}

