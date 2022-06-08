# Basic routing

- Note: in index.html we must have `<base href="/">`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>MyApp</title>
    <base href="/" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" type="image/x-icon" href="favicon.ico" />
  </head>
  <body>
    <app-root></app-root>
  </body>
</html>
```

## Example:

- Create 2 components

```
ng g c lessons-list
ng g c students-list
```

- lessons-list.html

```html
<div class="container">
  <h3>LESSONS LIST</h3>
  <p>This is a list of all lessons</p>
</div>
```

- students-list.html

```html
<div class="container">
  <h3>STUDENTS LIST</h3>
  <p>This is a list of all students</p>
</div>
```

##### Add routing directly in app.module.ts

```ts
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { StudentsListComponent } from "./students-list/students-list.component";
import { LessonsListComponent } from "./lessons-list/lessons-list.component";

import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [AppComponent, StudentsListComponent, LessonsListComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: "lessons", component: LessonsListComponent },
      { path: "students", component: StudentsListComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

- in app.html

```html
<h1>Teacher app</h1>

<router-outlet></router-outlet>
```

#### Go to diffrent path's using URL:

```
http://localhost:4200/students
http://localhost:4200/lessons
```

### Add UI to navigate using buttons

app.html:

- add 2 buttons to navigate to each component
- to each link - we added `routerLink` with navigation path.

```html
<div class="container">
  <h1>Teacher app</h1>

  <nav>
    <a class="btn btn-primary" routerLink="/lessons">Lessons</a>
    <a class="btn btn-success" routerLink="/students">Students</a>
  </nav>
</div>
<router-outlet></router-outlet>
```

## Add more routing:

- app.modue.ts

##### part 1 - redirectTo

`{ path: "", redirectTo: "/students", pathMatch: "full" },`

- When user access `/` path - it will redirect him to other path. (in our case: `/students`)
- pathMatch - is a key. If the value is `full` - only when we write full path it will work. (similar to `exact` in react).
- the default page will open in `/students`

##### part 2 - 404 not found

- Create component `page-not-found`.
- Add path in the **end!!!** of all paths to catch all other paths
  `{ path: "**", component: PageNotFoundComponent },`

```ts
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { StudentsListComponent } from "./students-list/students-list.component";
import { LessonsListComponent } from "./lessons-list/lessons-list.component";

import { RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

@NgModule({
  declarations: [
    AppComponent,
    StudentsListComponent,
    LessonsListComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: "lessons", component: LessonsListComponent },
      { path: "students", component: StudentsListComponent },
      { path: "", redirectTo: "/students", pathMatch: "full" },
      { path: "**", component: PageNotFoundComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

### Summary:

- forRoot() - gets An array of Route objects that define the navigation paths for the application.

## Class task:

1. Create angular app (using bootstrap)
2. Create 3 components
   - home - header with homepage + navigation to all other paths
   - about - header + paragraph about the website
   - articles - header + 3 cards with image + header + short description for each article.
3. In home page - add 3 buttons for routing to each page.
4. In main page - add redirect to home component
5. Add page not found path. 


// הפסקה עד 10:35