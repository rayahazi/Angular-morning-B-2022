# Result:

- Create new component: `person-details`
- In the folder `person-details` - create new file `person.ts`

```ts
export default class Person {
  // id
  private _id: number = 0;
  get Id(): number {
    return this._id;
  }
  set Id(value: number) {
    value > 0 && value < 1000 ? (this._id = value) : null;
  }

  // name
  private _name: string = "";
  get Name(): string {
    return this._name;
  }
  set Name(value: string) {
    value.length > 1 && value.length < 20 ? (this._name = value) : null;
  }

  // age
  private _age: number = 0;
  get Age(): number {
    return this._age;
  }
  set Age(value: number) {
    value >= 18 && value >= 120 ? (this._age = value) : null;
  }

  // city
  private _city: string = "";
  get City(): string {
    return this._city;
  }
  set City(value: string) {
    this._city = value;
  }

  // country
  private _country: string = "";
  get Country(): string {
    return this._country;
  }
  set Country(value: string) {
    this._country = value;
  }

  // img
  private _img: string = "";
  get Img(): string {
    return this._img;
  }
  set Img(value: string) {
    this._img = value;
  }

  constructor(
    id: number,
    name: string,
    age: number,
    city: string,
    country: string,
    img: string
  ) {
    this.Id = id;
    this.Name = name;
    this.Age = age;
    this.City = city;
    this.Country = country;
    this.Img = img;
  }
}
```

- In ts file: `person-details.ts`:

```ts
import { Component } from "@angular/core";
import Person from "./person";

@Component({
  selector: "app-person-details",
  templateUrl: "./person-details.component.html",
  styleUrls: ["./person-details.component.css"],
})
export class PersonDetailsComponent {
  public people: Person[] = [
    new Person(
      1,
      "x11",
      23,
      "Ariel",
      "Israel",
      "https://get.pxhere.com/photo/mountain-sky-night-star-milky-way-atmosphere-darkness-galaxy-night-sky-outer-space-astronomy-midnight-astronomical-object-spiral-galaxy-141956.jpg"
    ),
    new Person(
      2,
      "y11",
      23,
      "Ariel",
      "Israel",
      "https://get.pxhere.com/photo/mountain-sky-night-star-milky-way-atmosphere-darkness-galaxy-night-sky-outer-space-astronomy-midnight-astronomical-object-spiral-galaxy-141956.jpg"
    ),
    new Person(
      3,
      "z11",
      23,
      "Ariel",
      "Israel",
      "https://get.pxhere.com/photo/mountain-sky-night-star-milky-way-atmosphere-darkness-galaxy-night-sky-outer-space-astronomy-midnight-astronomical-object-spiral-galaxy-141956.jpg"
    ),
    new Person(
      4,
      "o11",
      23,
      "Ariel",
      "Israel",
      "https://get.pxhere.com/photo/mountain-sky-night-star-milky-way-atmosphere-darkness-galaxy-night-sky-outer-space-astronomy-midnight-astronomical-object-spiral-galaxy-141956.jpg"
    ),
  ];
}
```

- in html - show the data in template:

> We used ngFor loop - it works very similar to for-of loop

```html
<div *ngFor="let person of people">
  <h1>id: {{ person.Id }} name: {{ person.Name }}</h1>
  <h5>From: {{ person.City }}, {{ person.Country }}</h5>
  <img src="{{ person.Img }}" height="100" />
</div>

<!-- 
    for (const iterator of object) {}
-->
```

- show the component in the main app:

```html
<div class="container">
  <app-person-details></app-person-details>
</div>
```
