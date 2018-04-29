const argv = require('yargs').argv;
const path = require('path');
const protractorImageComparison = require('protractor-image-comparison');
const cwd = process.cwd();

exports.config = {
  /**
   * Cucumber specific
   */
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    require: [
      path.resolve(cwd, './e2e/config/helpers/*.ts'),
      path.resolve(cwd, './e2e/**/*.steps.ts')
    ],
    format: ['json:.tmp/report/results.json'],
    tags: []
  },
  // From `protractor-cucumber-framework`, allows cucumber to handle the 199 exception and record it appropriately
  ignoreUncaughtExceptions: true,

  /**
   * Test files
   */
  specs: getFeatureFiles(),

  /**
   * ng-apimock config
   */
  ngApimockOpts: {
    angularVersion: 5
  },

  /**
   * Capabilities
   */
  capabilities: {
    browserName: 'chrome',
    maxInstances: 1,
    // Cucumber specific instance options
    cucumberOpts: {
      /**
       * Pass tags through the commandline with the following command. The tags need to be a string and need
       * to be conform the tag expressions, see https://docs.cucumber.io/tag-expressions/
       *
       * @example:
       *
       *  npm run e2e -- --feature=playground --tags=@tagName
       */
      tags: argv.tags && argv.tags !== '' ? argv.tags : ''
    },
    chromeOptions: {
      args: ['--no-sandbox', 'disable-infobars', '--test-type=browser'],
      prefs: {
        'download': {
          'prompt_for_download': false,
          'directory_upgrade': true,
          'default_directory': '/tmp'
        }
      }
    },
    deviceProperties: {
      browser: {
        name: 'chrome'
      },
      deviceType: 'desk',
      device: 'Local development machine',
      platform: {
        name: "osx",
        version: "10.13.3"
      },
    }
  },
  maxSessions: 15,

  /**
   * Protractor config
   */
  baseUrl: 'http://localhost:4300/',
  seleniumAddress: 'http://localhost:4444/wd/hub/',
  disableChecks: true,
  beforeLaunch: function () {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
  },
  onPrepare() {
    /**
     * For ng-apimock
     */
    global.ngApimock = require(path.resolve(cwd, './.tmp/ngApimock/protractor.mock.js'));

    /**
     * For protractor-image-comparison
     */
    browser.imageComparison = new protractorImageComparison({
      // Required
      baselineFolder: path.resolve(cwd, './e2e/baseline/'),
      screenshotPath: path.resolve(cwd, './.tmp/image-compare/'),
      // Optional
      autoSaveBaseline: true,
    });

    /**
     * Get the browername and set the default screensize
     */
    return browser.getCapabilities()
      .then((capabilities) => {
        browser.browserName = capabilities.get('browserName');
        return browser.driver.manage().window().setSize(1366, 768);
      });
  },

  /**
   * Plugins:
   * - add reporter
   */
  plugins: [{
    package: 'protractor-multiple-cucumber-html-reporter-plugin',
    options: {
      automaticallyGenerateReport: true,
      jsonOutputPath: '.tmp/report/json-output',
      metadataKey: 'deviceProperties',
      displayDuration: true,
      openReportInBrowser: argv.openReportInBrowser,
      removeExistingJsonReportFile: true,
      removeOriginalJsonReportFile: true
    }
  }]
};

/**
 * Get the featurefiles that need to be run based on an command line flag that is passed, if nothing is passed all the
 * featurefiles are run
 *
 * @example:
 *
 * <pre>
 *     // For 1 feature
 *     npm run protractor -- --feature=playground
 *
 *     // For multiple features
 *     npm run protractor -- --feature=playground,dashboard,...
 *
 *     // Else
 *     npm run e2e
 * </pre>
 *
 * @return {Array<string>}
 */
function getFeatureFiles() {
  return argv.feature
    ? argv.feature.split(',').map(feature => `${cwd}/e2e/**/${feature}.feature`)
    : [`${cwd}/e2e/**/*.feature`];
}
