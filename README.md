# Angular Demo project

Angular is an open source TypeScript framework meant to help build singlepage applications.

This project isn't encompassing in any way, it's just to get you off the ground with angular the quickest way possible.

The entire applications is made in components which include an html, css, and TS file. Think of it as making front-ends more object oriented.

The main file is the index.html. This acts as the root file and a normal index file. If loading a library from a cdn (like bootstrap), paste it here. Other than that don't put too much stuff here. There is also a styles.css file. This is where you'd put all global styles (for example if you were boiler plating). However for all other styling, it's much better to use the css file in the component structure, or if you need to reuse some css put it in a different file and import that file in the component's .ts file wherever you need those styles.

The main component is the app.component in src/app.

## About Components

All components have their own special tag name (which you can modify in its TS file), which is how they are accessed in the html. This essentially spawns a new instance of the component and all it's css and TypeScript like making a new object.

Just code the html and css like you normally would in each component.

For Typescript, the ts file is set up like a class component. 


All components and newly made components are in src/app




## About Single Page Applications and Angular Routing

A single page application is a web application that doesn't need to reload the entire webpage to load different content. The url can even change along with some component change without the page reloading. Some existing examples are Twitter and Youtube. Even though the entire page may change, the browser doesn't reload the page. This is very useful if the client is loading lots of big libaries (Youtube) or you arn't able to enter specified urls (electron, react native, app mode or chrome kiosk mode). If you're still confused, the new reddit frontend is single page, while old.reddit.com is not. Notice how the favicon in the browser tab never turns into a loading spinner.

### Routing
Single page applications are possible because all routing requests are gone through a single index.html page, and the routing is handled through clientside javascript. In angular, it's through the app-routing.module.ts in src/app. When a user requests a url, they are routed to a component specified in the app-routing module.


The final product when compiled for production will produce a single index.html

## Basic commands and getting started

I strongly recommend using VS Code as the linter, libraries, and environmnet is unmatched by any other editor for web dev, especially angular.

You need nodejs and npm installed.

You also may need to run `npm install -g @angular/cli` to install angular globally

When you clone this project, run a quck `npm i` to install all dependencies

### Commands:

`ng serve` starts a local server so you can test in browser (http://localhost:4200/). It has auto reload this is only used for testing.

`ng build` compiles and builds the project (default dist folder).

`ng build --prod` builds for production

`ng generate component <name of component>` generates a new component and registers the new component in the config files. Always use this instead of just copy pasting an existing component.