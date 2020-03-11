import * as puppeteer from 'puppeteer';
import {DECOR} from './lib/console-decor.js';

// const sequence = async function(name, ...args) {
//   console.log(DECOR.fg.yellow, 'Testing sequence started...' + DECOR.fg.white, name);
//   let browser = await puppeteer.launch({
//     headless: true,
//   });
//   let page = await browser.newPage();
//   for (let i = 0; i < args.length; i++) {
//     let stage = args[i];
//     let resultCollector = [];

//     try {
//       stage();
//     } catch (err) {
//       console.log(DECOR.fg.red, 'Error...');
//     }
//   }
// }

export {DECOR};
export {getElementHandle} from './lib/get-element.js';
export {check} from './lib/check.js';
export {stat} from './lib/stat.js';
