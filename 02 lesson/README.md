# Modules

- Angular app is modular
- In our course - we will use only 1 module per course.
- Angular has it own system for modules - the decorator - `@NgModule` - the root module

### The decorator `@NgModule`

```ts
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
```

1. declarations - all the components that belong to this module.
2. imports - The set of NgModules whose exported declarables are available to templates in this module.
3. providers - The set of injectable objects that are available in the injector of this module.
4. bootstrap - The set of components that are bootstrapped when this module is bootstrapped.
