import puppeteer from 'puppeteer';
import {DECOR} from './lib/console-decor.js';
import {stat} from './lib/stat.js';

export class PingPong {

  /**
   *
   * @param {String} name
   * @param {String} targetUrl
   * @param {Boolean} [headless]
   */
  static async startSession(name, targetUrl, headless = true) {
    console.log(DECOR.fg.blue, 'Step: ' + DECOR.fg.green, name, DECOR.fg.blue + 'Target URL: ' + DECOR.fg.green + targetUrl);
    /** @type {Array<Boolean>} */
    let resultCollector = [];
    let browser = await puppeteer.launch({
      headless: headless,
    });
    let page = await browser.newPage();
    await page.goto(targetUrl, {
      waitUntil: 'networkidle0',
    });
    return {
      name: name,
      browser: browser,
      page: page,
      resultCollector: resultCollector,
      proceedAs: (name) => {
        console.log(DECOR.fg.blue, 'Step: ' + DECOR.fg.green, name);
      },
      finish: (/** @type {String} */ finalMsg = null) => {
        stat(name, resultCollector, finalMsg);
      },
    };
  };
}

export {DECOR, stat};
export {getElementHandle} from './lib/get-element.js';
export {check} from './lib/check.js';
export {checkVisible} from './lib/check-visible.js';

