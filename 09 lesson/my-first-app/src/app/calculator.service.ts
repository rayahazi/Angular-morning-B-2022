//  Injectable is an interface - metadata about the service
import { Injectable } from '@angular/core';

// Decorator that marks a class as available to be provided and injected as a dependency.
@Injectable({
  // One instance of the service shared across the app
  // If one component changes the data in service - everything is updated
  // in the entire app
  providedIn: 'root'
})

export class CalculatorService {

  constructor() { }

  public myName = 'Alex';

  // add(1, 2, 3), add(2, 3), add(5 ,6 ,7 4)
  add(...params:number[]):number{
    let res = 0;
    for (const value of params) res += value;
    return res;
  }

  sub(...params:number[]):number{
    let res =  params[0];
    for (let i = 1; i < params.length; i++) res -= params[i];
    return res;
  }

  mul(...params:number[]):number{
    let res = 1;
    for (const value of params) res *= value;
    return res;
  }

  div(...params:number[]):number{
    let res = params[0];
    for (let i = 1; i < params.length; i++) 
      res /= params[i];
    return res;
  }
}



