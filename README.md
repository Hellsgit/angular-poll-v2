# Angular Poll

This assessment was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.10.
With node 14.21.1 installed

## Installation

Open up a window in your terminal, and cd into folder '/poll/app/server and run

```bash
> npm i
```

Then cd into 'poll/app and again run

```bash
> npm i
```

## Usage

If installation is done run **npm run serve**, this will spin up a mock server on `http://localhost:3000/`

```bash
> npm run serve
```

**Next** open up a second wondow and run **npm start**, and poll will be served at `http://localhost:4200/`

```bash
> npm start
```

Or you can copy the build /dist folder content in a public map of your server.

## Used

- Bootstrap 5
- express 4.18.2

## Running unit tests

Unfortunately not much is tested, did configured karma.conf.js to my prefs, and installed;

- karma-mocha-reporter
- karma-coverage-istanbul-reporter
- jasmine-marbles

Run `ng test` to execute the unit tests via that where make.
