# Pipes

- Pipes are simple functions that we can use to change the value directly in HTML.

- Pipe gets the output of the first command(or variable) and uses the data on it.

- example from bash:
  The first command is the input of the second command:

```
cat a.txt | grep hello
```

## Built-in pipes (popular):

- DatePipe
- UpperCasePipe
- LowerCasePipe
- CurrencyPipe
- DecimalPipe
- PrecentPipe

## 1 Example: date, uppercase, lowecase:

- app.component.ts

```ts
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "my-app";

  independence = new Date(1948, 4, 14); // יום העצמאות. חודשים מתחילים מ-0
}
```

- app.component.html

```html
<p>Israel independence day: {{ independence | date }}</p>
<p>Israel independence day: {{ independence | date:"dd/MM/yyyy" }}</p>

<p>Using more than 1 pipe: {{ independence | date | uppercase }}</p>
<p>{{ (independence | date:'fullDate') | lowercase }}</p>
```

## 2. Using Percent and Decimal(number) Pipes.

- app.component.ts

```ts
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "my-app";

  num: number = 0.479 / 3;
  pi: number = 3.14159265359;
}
```

- app.component.html

```html
<p>Percents pipe: {{ num | percent }}</p>

<p>Decimal pipe: {{ pi | number }}</p>
<p>Decimal pipe: {{ pi | number:"2.1-14" }}</p>
```

## 3. Create our own Pipe:

- Create new file `exponent.pipe.ts`
  It is a class that implements the PipeTransform interface

```ts
import { Pipe, PipeTransform } from "@angular/core";

// {{ 4 | exponent:2 }}

@Pipe({ name: "exponent" })
export class ExponentPipe implements PipeTransform {
  transform(value: number, exponent: number = 2): number {
    // if exponent is empty - 2, else - exponent
    return Math.pow(value, exponent);
  }
}
```

- Declare on the pipe `ExponentPipe` (and on `FormsModule`) in `app.module.ts`

```ts
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { ExponentPipe } from "./exponent.pipe";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, ExponentPipe],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

- app.component.ts
  Declare 2 variables:

```ts
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "my-app";

  num: number = 3;
  pow: number = 1;
}
```

- app.component.html
  simple example of use, and input example(using `ngModel`).

```html
<p>Exponent pipe: 2^3 = {{ 2 | exponent:3 }}</p>

<h2>Show exponent pipe:s</h2>

<label>Number: </label>
<input type="number" [(ngModel)]="num" />

<br />
<br />

<label>Power: </label>
<input type="number" [(ngModel)]="pow" />

<h5>Exponent result: {{ num | exponent:pow }}</h5>
```
