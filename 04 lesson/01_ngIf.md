# ngIf

- ngIf is similar to if statement in programming.
- we will use it in the HTML template

```js
if(){
    // body
}
```

## First example - using \*ngIf

app.ts

```ts
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  // myHobbies:string[] = ['Running', 'Dancing', 'reading'];
  myHobbies: string[] = [];

  public isVictory: boolean = true;
}
```

app.html

```html
<div class="container">
  <div *ngIf="myHobbies.length > 0">My hobbies : {{ myHobbies }}</div>
  <div *ngIf="myHobbies.length == 0">No hobbies yet...</div>

  <h3 *ngIf="isVictory == true" class="alert alert-success">You win</h3>
  <h3 *ngIf="isVictory == false" class="alert alert-danger">You lose</h3>
</div>
```

## Second example - ng-template tags

```html
<div class="container">
  <h3 *ngIf="myHobbies.length > 0; else noHobbies">
    My hobbies : {{ myHobbies }}
  </h3>

  <ng-template #noHobbies>
    <h3>No hobbies yet</h3>
  </ng-template>
</div>
```

## Third example - using then & else

```ts
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  myHobbies: string[] = ["Running", "Dancing", "reading"];
  // myHobbies:string[] = [];
}
```

```html
<div class="container">
  <div *ngIf="myHobbies.length > 0; then hobbies else noHobbies"></div>

  <ng-template #hobbies>
    <h3>My hobbies : {{ myHobbies }}</h3>
  </ng-template>

  <ng-template #noHobbies>
    <h3>No hobbies yet</h3>
  </ng-template>
</div>
```

## Class task:

1. Create array of 3 object lessons. each object will have: classId, className.
2. In html: use ngIf and ng-template to show only that object.
   If the first className in the array is `Angular` -
   Show the data with blue bg and gray color.
   Else - show all the data in the array with red bg and pink color.

#### Solution:

ts:

```ts
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  lessons: any[] = [
    { classId: 1, className: "a" },
    { classId: 1, className: "React" },
    { classId: 1, className: "Java" },
  ];
}
```

html:

```html
<div class="container">
  <div *ngIf="lessons[0].className =='Angular'; then a else b"></div>

  <ng-template #a>
    <h3 style="background-color: blue; color:gray;">
      {{lessons[0].classId}}: {{lessons[0].className}}
    </h3>
  </ng-template>

  <ng-template #b>
    <div
      *ngFor="let lesson of lessons"
      style="background-color: red; color:pink;"
    >
      <h3>{{lesson.classId}}: {{lesson.className}}</h3>
    </div>
  </ng-template>
</div>
```
