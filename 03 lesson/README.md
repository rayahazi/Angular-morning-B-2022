# Data binding

It is the way to communicate between the template (HTML) to it's component (TypeScript code).

## One-way data binding

Data flows from TypeScript to HTML.

### 1. Interpolation - `{{ expression }}`

We wrote the same code twice - but only the data inside `{{}}` is being treated as TypeScript

```html
<div class="container">
  <h5>8 + 12 = {{ 8 + 12 }}</h5>
  <h5>8 - 12 = {{ 8 - 12 }}</h5>
  <h5>8 * 12 = {{ 8 * 12 }}</h5>
  <h5>8 / 12 = {{ 8 / 12 }}</h5>
</div>
```

### Property binding - `{{ expression }}` / `[target]="expression"`

Inside HTML template - we bring our TypeScript code.

```ts
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title: string = "Waterfall";
  img: string =
    "https://traveltimes.ru/wp-content/uploads/2021/06/%D0%B2%D0%B83.jpg";
}
```

- in html:

> note: the second way - is only for attributes on HTML elements

```html
<div class="container">
  <h2>{{ title }}</h2>
  <img src="{{ img }}" height="200" />

  <br />

  <h2>{{ title }}</h2>
  <img [src]="img" height="200" />
</div>
```

### Event binding - functions

- in ts - create the functions

```ts
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  myName: string = "Raaya";

  func1() {
    alert(`Hello my name is ${this.myName}`);
  }

  func2(age: number) {
    alert(`Hello I am ${age} years old`);
  }
}
```

- in html - we call the functions from buttons:

  - there is no use with the prefix `on`. we will write click instead of onClick, and copy instead of onCopy
  - we insert the event inside `()`

```html
<div class="container">
  <br />

  <button (click)="func1()" class="btn btn-primary">My name</button>

  <button (click)="func2(12)" class="btn btn-success">My age</button>
</div>
```

## 2 way data binding - `[(ngModel)]`

Data flows from TypeScript to HTML, and vice versa.

- add FormsModule to `app.module.ts` in imports array:

```ts
import { NgModule } from "@angular/core";
// 1. import the module
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  // 2. in imports array - insert the FormsModule library
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

- define some variable in ts:

```ts
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  myName: string = "Shoshana Cohen";
}
```

- in html:
  add `[(ngModel)]` to store the data from the user automatically.

```html
<div class="container">
  <br />

  <h3>My name is: {{ myName }}</h3>
  <input type="text" placeholder="Enter your name..." [(ngModel)]="myName" />
</div>
```

## `$Event`

The event object contains all the data about the HTML element.
For example:

```
event.target.style.`attribute`
event.target.className
event.target.value
```

- in app.css

```css
.first {
  background-color: brown;
  color: pink;
}

.second {
  background-color: green;
  color: rgb(150, 228, 150);
  border: 1px solid black;
}
```

- in app.html

```html
<div class="container">
  <br />
  <button (click)="func1($event)">Click me</button>

  <input type="text" class="first" (change)="func2($event)" />

  <h3>{{ myInput }}</h3>
</div>
```

- in app.ts

```ts
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  public myInput: string = "";

  func1(event: any) {
    event.target.style.backgroundColor = "red";
  }

  func2(e: any) {
    // change the css class
    e.target.className = "second";
    // insert data to myInput from the input element
    this.myInput = e.target.value;
  }
}
// 1. create input with first style(from CSS class) and change event.
// 2. send the event object as parameter
// 3. in the function - change the CSS class of the input to other one.
// 4. the class will be defined in CSS file, with 3 attributes.
// 5. the function will store the data in a variable - myInput,
//    using the event.
// 6. Show the value in html - in a header.
```
