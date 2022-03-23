# Components - רכיבים

Components are the main building-blocks for angular app

### Component has:

1. HTML template - define all the elements in the page
2. TypeScript class - define the logic of the page (and the data)
3. CSS page - define the design and the style of the component

### Manually creating a component

```ts
import { Component } from "@angular/core";

@Component({
  selector: "app-gallery",
  template: '<h2 style="color:pink">Welcome to my {{ title }}</h2>',
})
export class GalleryComponent {
  public title: string = "art studio";
}
```

1. Create new file - gallery.component.ts in app folder
2. Import basic structure from `app.ts`.
3. change seceltor name - `app-gallery`.
4. change `templateURL` to `template` - it allow us to put HTML directly in our page.
5. Remove the CSS declarations - `styleUrls`.
6. change the class name - `GalleryComponent` - this is how angular will recognize our file
7. change title variable to some other text.

### Add the file declaration to - `app.module.ts`

```js
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { GalleryComponent } from "./gallery.component";

@NgModule({
  declarations: [AppComponent, GalleryComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

### Add the component to app.html

```html
<div class="container">
  <h1>Hello</h1>

  <app-gallery></app-gallery>
</div>
```

## Automatically creating a component

- stop the server

- in terminal:

```
ng generate component Shop

// or
ng g c shop
```

we will get:

- creation of 4 files: html, css, ts, spec.ts
- update automatically the filer - `app.module.ts`

```
CREATE src/app/shop/shop.component.html (19 bytes)
CREATE src/app/shop/shop.component.spec.ts (612 bytes)
CREATE src/app/shop/shop.component.ts (267 bytes)
CREATE src/app/shop/shop.component.css (0 bytes)
UPDATE src/app/app.module.ts (458 bytes)
```

```ts
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { GalleryComponent } from "./gallery.component";
import { ShopComponent } from "./shop/shop.component";

@NgModule({
  declarations: [AppComponent, GalleryComponent, ShopComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

### import the comoponent

```html
<div class="container">
  <h1>Hello</h1>

  <app-gallery></app-gallery>
  <app-shop></app-shop>
</div>
```
