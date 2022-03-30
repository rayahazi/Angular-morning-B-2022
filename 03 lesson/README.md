# Data binding

It is the way to communicate betwwen HTML(template) and TS(component)

## One-way data binding

Data flows from TypeScript to HTML only!

### Interpolation - `{{ expression }}`

Inside HTML template we put directly TypeScript code to execute

```html
<div class="container">
  <h1>calculator</h1>
  <h4>4 + 5 = {{ 4 + 5 }}</h4>
  <h4>4 - 5 = {{ 4 - 5 }}</h4>
  <h4>4 * 5 = {{ 4 * 5 }}</h4>
  <h4>4 / 5 = {{ 4 / 5 }}</h4>
</div>
```

### Property binding - `{{ expression }}` or `[target]=expression`

Inside HTML template we bring typscript code

- ts:

```ts
import { Component } from "@angular/core";
import Person from "./person-details/person";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  public title: string = "Welcome to my app";
  public img: string =
    "https://studychinese.ru/content/dictionary/pictures/25/12985.jpg";
}
```

- html:

```html
<div class="container">
  <h1>{{ title }}</h1>
  <img src="{{ img }}" height="200" />
</div>
```

or:

```html
<div class="container">
  <h1>{{ title }}</h1>
  <img [src]="img" height="200" />
</div>
```

### Event binding - for functions

This is how we send functions from TypeScript code to HTML.

```ts
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  public myName: string = "Raaya";

  sayHello() {
    alert(`Hello from ${this.myName}`);
  }
}
```

- In html - we write the event type without the prefix `on`, and inside `()`.

```html
<div class="container">
  <button (click)="sayHello()" class="btn btn-warning">Click me...</button>
</div>
```

## One-way data binding

Data flows from TypeScript to HTML and vice versa.

- Add the FormsModule library from "@angular/forms" to imports array in app.module.ts

```ts
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

- in ts - define variable :

```ts
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  public myName: string = "Raaya";
}
```

- html:

```html
<div class="container">
  <br />
  <label>Enter your name...</label>
  <input type="text" [(ngModel)]="myName" />

  <h3 class="alert alert-success">My name is: {{myName}}</h3>
</div>
```

## `$event`


