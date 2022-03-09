# Class task

1. Create new angular app. (add bootstrap)
2. In app.component.ts:
   - Create nice header `Students list`
   - Create array of 3 object students with data:
     - id
     - name
     - city
     - avgGrades
     - image
3. In app.component.html:
   - Add header with the header data from ts.
   - Add 3 cards for each students, with his/her details.

> note: use card design from bootstrap

### Solution:

```ts
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title: string = "Students list";

  myStudents = [
    {
      id: 1574893,
      name: "John bbb",
      avgGrade: 90,
      city: "Jerusalem",
      img: "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg",
    },
    {
      id: 7589344,
      name: "Bracha aa",
      avgGrade: 75,
      city: "Ariel",
      img: "https://news.cgtn.com/news/2020-09-20/Spider-flower-The-flower-with-a-distinctive-display-TVYLozFKg0/img/9c42156e261a4d2282370c03fce43a0a/9c42156e261a4d2282370c03fce43a0a.jpeg",
    },
    {
      id: 5435435,
      name: "Alex ggg",
      avgGrade: 100,
      city: "Haifa",
      img: "https://images.unsplash.com/photo-1604085572504-a392ddf0d86a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b3JhbmdlJTIwZmxvd2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    },
  ];
}
```

```html
<div style="text-align: center; align-items: center;">
  <h1>{{ title }}</h1>

  <div class="card" style="width: 18rem;">
    <img src="{{ myStudents[0].img }}" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">
        {{ myStudents[0].id }} - {{ myStudents[0].name }}
      </h5>
      <p class="card-text">city: {{ myStudents[0].city }}</p>
      <p class="card-text">avgGrade: {{ myStudents[0].avgGrade }}</p>
    </div>
  </div>

  <div class="card" style="width: 18rem;">
    <img src="{{ myStudents[1].img }}" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">
        {{ myStudents[1].id }} - {{ myStudents[1].name }}
      </h5>
      <p class="card-text">city: {{ myStudents[1].city }}</p>
      <p class="card-text">avgGrade: {{ myStudents[1].avgGrade }}</p>
    </div>
  </div>

  <div class="card" style="width: 18rem;">
    <img src="{{ myStudents[2].img }}" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">
        {{ myStudents[2].id }} - {{ myStudents[2].name }}
      </h5>
      <p class="card-text">city: {{ myStudents[2].city }}</p>
      <p class="card-text">avgGrade: {{ myStudents[2].avgGrade }}</p>
    </div>
  </div>
</div>
```
