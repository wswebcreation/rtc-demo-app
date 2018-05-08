# RtcDemo app

With: 

- Angular 5 + Angular CLI 
- Angular Material 
- ng-Apimock
- protractor-image-comparison

## Intro

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3. 
It will be used during the workshop [*TESTING BEYOND THE DEFAULT CLICK-PATHS*](https://romaniatesting.ro/sessions/testing-beyond-the-default-click-paths/) on the 11th of May 2018 in  Cluj-Napoca, Romania during the Romanian Testing Conference 2018.

The workshop will be given by [Wim Selles](https://romaniatesting.ro/speakers/wim-selles/) ([wswebcreation](https://github.com/wswebcreation/)) and [Mischa Dasberg](https://romaniatesting.ro/speakers/mischa-dasberg/) ([mdasberg](https://github.com/mdasberg))

![App overview](./assets/app-movie.gif "App overview")

## Usage

### Preparation of the workshop
**Warning: we strongly recommend node >=v6.9.0 and npm >=3.0.0**

- `git clone https://github.com/wswebcreation/rtc-demo-app.git`
- `cd rtc-demo-app` to go into the demo folder
- `npm i` - Installs everything needed
- `npm start` - Starts the app.
- `npm run start.mocking` - Starts the mocking.
- go to `http://localhost:4300/` to open the demo app
- go to `http://localhost:3000/mocking/` to open the mocking interface

> **If you get an error like `Error: listen EADDRINUSE :::3000` or `Error: listen EADDRINUSE :::4300` then the port(s)is in use. Please kill the process on that port and try again (Google may be so friendly to help you with that ;-))**

> **Windows: use precompilation to speed up**

    `tsc --project tsconfig.json`
    `npm start`

### Testing with protractor
For running the protractor tests a selenium server needs to be started. The server will automatically be downloaded and updated after install.

To run the tests the the following needs to be started:
- the app, see `npm start` (if not already started)
- the mocking server, see `npm run start.mocking` (if not already started)
- the selenium server. Run `npm run webdriver.start`. If you get an error run `npm run webdriver.update` and try `npm run webdriver.start` again.
- and run the tests, use `npm run e2e`, see [protractor.conf.js](./e2e/config/protractor.conf.js) how to provide specific features / tags

## Assignments
First of all checkout the `get-your-hands-dirty` branch with the command `git checkout get-your-hands-dirty`. 

You will then see 2 feature-files extra in the folder [e2e/features](./e2e/features) called `ng-apimock.feature` and `image.compare.feature` 
and 2 step-files extra in the folder [e2e/step_definitions](./e2e/step_definitions) called `ng-apimock.steps.ts` and `image.compare.steps.ts`. Those files will be used during this workshop.

### Running the tests
See [Testing with protractor](./README.md#testing-with-protractor)

### ng-Apimock
Before you implement the tests, first run the following command `npm run e2e -- --feature=ng-apimock`. This will run all the ng-apimock tests. 
You will see that 3 tests have the status `Pending` in the report.

The goal of this session is to implement the 3 pending tests based on the provided documentation. As an example we've already implemented the first test with the correct syntax and code.
When you are done, or you want to see the result of the just implemented code, run `npm run e2e -- --feature=ng-apimock` again.

### protractor-image-comparison
Before you implement the tests, first run the following command `npm run e2e -- --feature=image.compare`. This will run all the image-compare tests. 
You will see that 3 tests have the status `Pending` in the report.

The goal of this session is to implement the 3 pending tests based on the provided documentation. As an example we've already implemented the first test with the correct syntax and code.
When you are done, or you want to see the result of the just implemented code, run `npm run e2e -- --feature=image.compare` again.

## License

MIT

## Credits
We used this project ([angular5-example-app](https://github.com/Ismaestro/angular5-example-app), made by [Ismael Ramos](https://github.com/Ismaestro)) as an idea and rewritten and adjusted it to our needs.
