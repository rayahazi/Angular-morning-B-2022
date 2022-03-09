# First project

#### Install angular cli(specific terminal for Angular)

in terminal / CMD:

- We run this command only 1 time - to install Angular on our computer.

```
npm install --global @angular/cli
// or
npm i -g @angular/cli
```

#### Create new Angular app

```
// syntax: ng new <name_of_project>

ng new my-first-app
```

#### Run the app

- The Angular CLI includes a server, so we can build and run our app locally.
- The app will run in http://localhost:4200/

```
cd my-first-app
ng serve --open


// or:
ng serve -o
```

### Change the app.component.html

Go to `src/app/app.component.html`, and delete everything.

```html
<div style="text-align: center;">
  <h1>Hello world!</h1>
</div>
```

### Install bootstrap

- Open new terminal without stopping the first one - and write:

```
npm i bootstrap
```

- in `angular.json` -
  we must link bootstrap to our app:
  note: add the link in the first styles.

```json
"styles": [
    "node_modules/bootstrap/dist/css/bootstrap.min.css",
    "src/styles.css"
],
```

- After that - stop the server and reload.

* Check if bootstrap successfully installed:

```html
<div style="text-align: center;">
  <h1>Hello world!</h1>
  <button class="btn btn-primary">Click me</button>
</div>
```
