# Demo app with Angular 5 + Angular CLI + Angular Material + Angular Example Library + ng-Apimock + protractor-image-comparison

## Intro
This project will be used during the workshop [*TESTING BEYOND THE DEFAULT CLICK-PATHS*](https://romaniatesting.ro/sessions/testing-beyond-the-default-click-paths/) on the 11th of May 2018 in  Cluj-Napoca, Romania during the Romanian Testing Conference 2018.

The workshop will be given by [Wim Selles](https://romaniatesting.ro/speakers/wim-selles/) ([wswebcreation](https://github.com/wswebcreation/)) and [Mischa Dasberg](https://romaniatesting.ro/speakers/mischa-dasberg/) ([mdasberg](https://github.com/mdasberg))

We forked this project from [angular5-example-app](https://github.com/Ismaestro/angular5-example-app), made by [Ismael Ramos](https://github.com/Ismaestro) and adjusted it to our needs.

## Usage

**Warning: we strongly recommend node >=v6.9.0 and npm >=3.0.0**

- `npm i` - Installs everything needed
- `npm start` - Starts the app. Then, go to `localhost:4200`
- `npm run start.mocking` - Starts the mocking. Then, go to `localhost:3000/mocking`

### Testing with protractor
For running the protractor tests a selenium server needs to be started. The server will be downloaded and updated after install.
If this doesn't work run `npm run webdriver.update` after install.

To run the tests the the following needs to be started:
- the app, see `npm start`
- the mocking server, see `npm run start.mocking`
- the selenium server. Run `npm run webdriver.start`
- and run the tests, use `npm run e2e`, see [protractor.conf.js](./e2e/config/protractor.conf.js) how to provide specific features / tags


> **Windows: use precompilation to speed up**

    `tsc --project tsconfig.json`
    `npm start`

## License

MIT
