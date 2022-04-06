# ngFor

- Similar to for loop in programming
- we will use it in HTML template.

### first example:

```ts
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  names: string[] = ["a", "b", "c"];
}
```

```html
<div class="container">
  <div *ngFor="let name of names">{{name}}</div>
</div>
```

### count

```html
<div class="container">
  <div *ngFor="let name of names; index as i; count as count">
    {{i + 1}} - {{name}}. data = {{count}}
  </div>
</div>
```

### Using `index`:

```html
<div class="container">
  <div *ngFor="let name of names; index as i">{{i + 1}} - {{name}}</div>
</div>

<!-- switch(){
  case: 
  case:

  default:
} -->
```

### First, last even and odd

All these values return boolean value.

```ts
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  fruits: string[] = ["Apple", "Melon", "Banana"];
}
```

```html
<div class="container">
  <!-- first, last, even odd -->

  <div
    *ngFor="let fruit of fruits; even as isEven; odd as isOdd; first as isFirst"
  >
    <span *ngIf="isFirst" style="color:rgb(241, 78, 78)"> {{fruit}} FIRST</span>
    <span *ngIf="isEven" style="color:rgb(43, 128, 77)"> {{fruit}} EVEN</span>
    <span *ngIf="isOdd" style="color:rgb(119, 45, 83)"> {{fruit}} ODD</span>
  </div>
</div>
```
