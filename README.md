# AngularProject

In this project, there are :
- "@angular/material" with custom theming examples
- "@nguniversal/express-engine"
- Build several environments (qa, prod)
- Server Securities (with Helmet)
- Husky to test on "pre-commit"
- Lazy Page routing examples
- Lazy loading of images example (with ng-defer-load)
- Lazy loading of component example
- Small Form example

### Deploy on Github page
Look the result of this project on my Github page (Not SSR version) :

https://syldel.github.io/angular-with-material/

*This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.6.*

#### Deployment on Github page

To deploy on github page, read this :
https://dev.to/angular/build-deploy-angular-apps-in-github-pages-using-github-actions-e7a

### Node version recommendations

">=10.9.0 <13.0.0"

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

### Generate Component

To create a new generic component definition :

`ng g component <name> [options]`

About options:
--export=true|false	
When true, the declaring NgModule exports this component. (Default: false)

--module=module	
The declaring NgModule.
*(Aliases: -m)*

--displayBlock=true|false	
Specifies if the style will contain :host { display: block; }. (Default: false)
*(Aliases: -b)*

Example:
`ng g c home-page`

### Generate Module

To create a new generic NgModule definition in the given or default project :

`ng g module <name> [options]`

About options:
--routing=true|false	
When true, creates a routing module. (Default: false)

Example:
`ng g m home-page --routing=true`

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

Or use "lite-server" by John Papa :
https://github.com/johnpapa/lite-server
```
npm install lite-server --save-dev
```

*The output folder is dist/project-name/ by default. To output to a different folder, change the outputPath in angular.json.*

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Server-side rendering (SSR) with Angular Universal

Why use server-side rendering?
There are three main reasons to create a Universal version of your app.
- Facilitate web crawlers through search engine optimization (SEO)
- Improve performance on mobile and low-powered devices
- Show the first page quickly with a first-contentful paint (FCP)

### Work on the SSR version on your local system

To start rendering your app with Universal on your local system, use the following command.
```
npm run dev:ssr
```

To use the QA environment do :
```
npm run dev:ssr -- --configuration=qa
```

### Build a SSR version
```
npm run build:ssr:prod
```
or
```
npm run build:ssr:qa
```

### Serve the SSR version
```
npm run serve:ssr
```
It will just launch the Express server in "dist/***/server/main.js".
(So the SSR build has to be already done.)

### Keep in mind

server-side applications can't reference browser-only global objects such as window, document, navigator, or location.

## Stats

With "webpack-bundle-analyzer" you can get stats about the project

```
npm run analyze
```

## Tests

To test a specific "spec" file :
```
ng test --include **/main-footer.component.spec.ts
```

### e2e ChromeDriver problem

`ng e2e` by default, it will update the ChromeDriver.
To don't update the ChromeDriver, use :
`ng e2e --no-webdriver-update`

To use a specific ChromeDriver version :
`webdriver-manager update --versions.chrome 81.0.4044.138`
Look in "node_modules\protractor\node_modules\webdriver-manager" you will find the Chrome drivers already downloaded.
