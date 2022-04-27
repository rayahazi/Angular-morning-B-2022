# Lifecycle Hooks:

- Hooks in angular are built in interfaces, that we can use, when we want specific actions.
- For each interface - we have a function to implament:

1. ngOnChanges()
2. ngOnInit()
3. ngDoCheck()
4. ngAfterContentInit()
5. ngAfterContentChecked()
6. ngAterViewInit()
7. ngAterViewChecked()
8. ngOnDestroy()

# OnChanges - Lifecycle hook

A lifecycle hook that is called when any data-bound property of a directive changes.

- It is an interface - that implements the method `ngOnChanges:`

- The function ngOnChanges() will run before ngOnInit() once, and also whenever property is changing.

```ts
interface OnChanges{
    ngOnChanges(changes: SimpleChanges): void {}
}
```

# Example:

##### person.ts

```ts
export class Person {
  constructor(public name: string) {}
}
```

##### on-changes.component.ts

- Create 2 inputs: person(type person), hobbie.
- implement OnChanges hook on our app - bring `ngOnChanges()` method
- `ngOnChanges()`: will be called once in the beginning, and after every change. Every change will be added to an array - changesArr.

```ts
import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

import { Person } from "./person";

@Component({
  selector: "app-on-changes",
  templateUrl: "./on-changes.component.html",
  styleUrls: ["./on-changes.component.css"],
})
export class OnChangesComponent implements OnChanges {
  @Input() person: Person;
  @Input() hobbie: string;

  changesArr: string[] = [];

  // When @Input() property changes - the function will run!
  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes); // {person: SimpleChange, hobbie: SimpleChange}
    for (const propName in changes) {
      const change = changes[propName];
      //console.log(change);
      const current = JSON.stringify(change.currentValue);
      const prev = JSON.stringify(change.previousValue);

      this.changesArr.push(
        `${propName}: currentValue: ${current}, previousValue:${prev}`
      );
    }
  }
}
```

##### on-changes.component.html

- Show person + hobbie in a nice output
- loop over the array of changes

```html
<div>
  <p class="alert alert-primary">{{ person.name }} loves to {{ hobbie }}</p>

  <h5>Changes in input:</h5>
  <div *ngFor="let change of changesArr">{{ change }}</div>
</div>
```

##### app.component.ts

- Create 2 variables `person` and `hobbie` - to transfer to child component.
- add default values to both variables using the constructor.

```ts
import { Component } from "@angular/core";
import { Person } from "./on-changes/person";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Person info...";

  person: Person;
  hobbie: string;

  constructor() {
    this.reset();
  }

  reset() {
    // Default name for person:
    this.person = new Person("Moshe");
    // Default hobbie:
    this.hobbie = "dance";
  }
}
```

##### app.component.html

- two label + input for person name + hobbie.
- using 2 way data binding - `[(ngModel)]` (we must import FormsModule in app.module.ts).
- call child component `on-changes` with 2 attributes from parent component.

```html
<div class="container">
  <h2>{{ title }}</h2>

  <div class="mb-3">
    <label for="person-input" class="form-label">Person name</label>
    <input
      type="text"
      class="form-control"
      id="person-input"
      [(ngModel)]="person.name"
    />
  </div>
  <div class="mb-3">
    <label for="hobbie-input" class="form-label">Hobbie</label>
    <input
      type="text"
      class="form-control"
      id="hobbie-input"
      [(ngModel)]="hobbie"
    />
  </div>

  <app-on-changes [person]="person" [hobbie]="hobbie"></app-on-changes>
</div>
```
