# Class task res

1. Create city(parent component) & city-details(child component)
2. Create 5 properties of Input - get the values from `city` component

- city-details.component.ts

```ts
// 1. Import Input
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-city-details",
  templateUrl: "./city-details.component.html",
  styleUrls: ["./city-details.component.css"],
})
export class CityDetailsComponent {
  // Create 5 properties for each city:
  // All string - not must. Can be easier
  @Input() Name: string = "";
  @Input() Country: string = "";
  @Input() Weather: string = "";
  @Input() Area: string = "";
  @Input() Population: string = "";
}
```

3. Add the data to html - with design from bootstrap

- city-details.component.html

```html
<!-- Nice presentation for each city: -->

<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">{{ Name }}, {{ Country }}</h5>
    <p class="card-text">Weather: {{ Weather }}</p>
    <p class="card-text">Area: {{ Area }}</p>
    <p class="card-text">Population: {{ Population }}</p>
  </div>
</div>
```

4. Create new file `city.ts` in `city` component

```ts
// Shortcut of ts - there is no need to write properties

export default class City {
  constructor(
    public Name: string,
    public Country: string,
    public Weather: string,
    public Area: string,
    public Population: string
  ) {}
}
```

5. Create new array of cities in `city.component.ts`

```ts
import { Component } from "@angular/core";
// 1. Import City class
import City from "./City";

@Component({
  selector: "app-city",
  templateUrl: "./city.component.html",
  styleUrls: ["./city.component.css"],
})
export class CityComponent {
  // Create array of 3 cities with full details
  public myCities: City[] = [
    new City("Jerusalem", "Israel", "27°C", "125.1 km²", "874,186"),
    new City("Eilat", "Israel", "29°C,", "84.79 km²", "51,935"),
    new City("Herzliya", "Israel", "22°C", "26 km²", "97,470"),
  ];
}
```

6. Loop over the array and Send the data to the child componet - city-details

- city.component.html

```html
<h2>My favorite cities</h2>

<!-- Loop over the array myCities, 
and send details to city-details -->
<div *ngFor="let city of myCities">
  <app-city-details
    [Name]="city.Name"
    [Country]="city.Country"
    [Weather]="city.Weather"
    [Area]="city.Area"
    [Population]="city.Population"
  ></app-city-details>
</div>
```
