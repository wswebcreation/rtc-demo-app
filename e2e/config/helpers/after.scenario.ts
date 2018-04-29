import {After, HookScenarioResult, Status} from 'cucumber';
import {resolve} from 'path';
import {browser} from 'protractor';
import {WriteStream, ensureDirSync, createWriteStream} from 'fs-extra';
import {upperCaseFirstLetter, World} from '../../utils/utils';

/**
 * After hook to check if the scenario failed and a screenshot needs to be added to the report
 */
After(function (scenarioResult: HookScenarioResult): Promise<void> {
    const world: any = this;

    if (scenarioResult.result.status === Status.FAILED) {
        return saveFailedScenarioScreenshot(world, scenarioResult);
    }

    return Promise.resolve();
});

/**
 * Save a screenshot when a scenario failed
 */
async function saveFailedScenarioScreenshot(world: World, scenarioResult: HookScenarioResult): Promise<void> {
    const screenshot = await(browser.takeScreenshot());
    const fileName = `[${browser.browserName.toLowerCase()}]__${upperCaseFirstLetter(scenarioResult.pickle.name
        .replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s/g, '-')
        .toLowerCase().substr(0, 100))}.png`;

    world.attach(screenshot, 'image/png');

    saveScreenshot(screenshot, fileName);

    return Promise.resolve();
}

/**
 * Save a screenshot
 */
function saveScreenshot(screenshot: string, fileName: string) {
    const screenshotPath = resolve(process.cwd(), '.tmp/screenshots');
    const filepath = resolve(screenshotPath, fileName);

    let stream: WriteStream;

    ensureDirSync(screenshotPath);
    stream = createWriteStream(filepath);
    stream.write(new Buffer(screenshot, 'base64'));
    stream.end();
}
