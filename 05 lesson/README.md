# Attribute directives:

- ngStyle - add / remove html styles(css)
- ngClass - add / remove html classes(css)
- ngModel - 2 way data binding

### ngStyle

- Written in the HTML template page
- gets an object of `key-value` pairs
- ngStyle is better than the regular `style` attribute - it allows us to use functions and if-else statements (in the value).

```ts
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  ifLive: boolean = false;
  remote: boolean = true;

  getColor() {
    return "cadetblue";
  }

  toggleIsLive() {
    this.ifLive = !this.ifLive;
  }
}
```

```html
<div class="container">
  <!-- ng style and regular style -->
  <h2 [ngStyle]="{color:'blue'}">ng style intro</h2>
  <h2 style="color:'red'">regular style</h2>

  <!-- when we have 2 words in the key - we must wrap with "" -->
  <h2 [ngStyle]="{color:'blue', 'background-color':'yellow'}">
    More than 1 pair
  </h2>

  <!-- use a function in the value -->
  <h2 [ngStyle]="{color: getColor()}">use a function</h2>
  <!-- That will not work with regular style -->
  <h2 style="color: getColor()">use a function</h2>

  <!-- Use ts variable to make if-else -->
  <button
    [ngStyle]="{'background-color': ifLive ? 'green' : 'red'}"
    class="btn"
    (click)="toggleIsLive()"
  >
    Live server
  </button>
  <!-- add function to the button - to toggle between live/not live -->

  <!-- 
  if(){}
  else if(){}
  else {} 
-->
  <button
    [ngStyle]="{'background-color': ifLive ? 'green' : remote ? 'blue':'red'}"
    class="btn"
  >
    Live server
  </button>
</div>
```

### ngClass

- Written in the HTML template page

- we can write ngClass attributes in 3 ways:
1. strings
2. array of strings
3. objects (key-value pairs) - allow us to have true/false conditions for each class

> Example:

- class.component.ts

```ts
import { Component } from "@angular/core";

@Component({
  selector: "app-class",
  templateUrl: "./class.component.html",
  styleUrls: ["./class.component.css"],
})
export class ClassComponent {
  serverOn: boolean = false;

  activateServer() {
    this.serverOn = !this.serverOn;
  }
}
```

- class.component.html

```html
<h2 [ngClass]="'header'">My class component</h2>

<div [ngClass]="['one','two']">ngClass - by array</div>

<div [ngClass]="{'one':true, 'two':false}">ngClass - by object</div>

<button (click)="activateServer()">ON/OFF</button>

<div
  [ngClass]="{
    'block':true,
    'isUp': serverOn ? true : false,
    'isDown': serverOn ? false : true
}"
>
  my server
</div>
```

- class.component.css

```css
.header {
  color: blueviolet;
}
.one {
  height: 150px;
  width: 150px;
  background-color: coral;
  margin: 10px;
}
.two {
  border-radius: 20%;
  text-align: center;
}

.block {
  height: 100px;
  width: 100px;
  margin: 10px;
  font-size: 20px;
}

.isUp {
  background-color: rgb(23, 228, 23);
}
.isDown {
  background-color: rgb(245, 0, 0);
}
```
