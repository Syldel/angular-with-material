# AngularProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Serve with "Prod" or "QA" env
```
ng serve --prod
ng serve --configuration qa
```
Don't forget, it will just use a different environment file, but the build is not a "production" version.
*DON'T USE IT FOR PRODUCTION!*

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

More informations about "build" :
https://angular.io/guide/build

### Build "Prod" version
Use the `--prod` flag for a production build.
(`ng build --prod` or `ng build --configuration=production`)

### Build "QA" version
Use `ng build --configuration qa` for a QA build.

### Local build test (when no SSR) :
Global install "http-server" with :
```
npm install --global http-server
```

Then run :
```
http-server ./dist/angular-project
```

*The output folder is dist/project-name/ by default. To output to a different folder, change the outputPath in angular.json.*

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
