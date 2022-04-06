# ngSwitch

- Switch here is similar to switch-case in programming.

- We will use it in HTML template

### ts

```ts
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  Artist = {
    name: "Raphael",
    year: "1483",
    style: "Renaissance",
  };
}
```

### html

```html
<div class="container">
  <div [ngSwitch]="Artist.style">
    <h4 *ngSwitchCase="'Realism'">{{Artist.name}} style is Realism</h4>
    <h4 *ngSwitchCase="'Impressionism'">
      {{Artist.name}} style is Impressionism
    </h4>
    <h4 *ngSwitchCase="'Renaissance'">{{Artist.name}} style is Renaissance</h4>

    <h4 *ngSwitchDefault>Non of the above</h4>
  </div>
</div>

<!-- switch(){
  case: 
  case:

  default:
} -->
```
