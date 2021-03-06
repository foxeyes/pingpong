import {DECOR} from './console-decor.js';
import util from 'util';

/**
 *
 * @param {String} name
 * @param {Function} callback
 * @param {Array<Boolean>} [resultCollector]
 */
export async function check(name, callback, resultCollector = null) {
  try {
    let isAsync = util.types.isAsyncFunction(callback);
    if (isAsync ? await callback() === true : callback() === true) {
      console.log(DECOR.fg.yellow, 'Check: ', DECOR.fg.magenta, name, DECOR.fg.green, 'OK');
      if (resultCollector) {
        resultCollector.push(true);
      }
    } else {
      console.log(DECOR.fg.yellow, 'Check: ', DECOR.fg.magenta, name, DECOR.fg.red, 'FAIL');
      if (resultCollector) {
        resultCollector.push(false);
      }
    }
  } catch (e) {
    console.log(DECOR.fg.yellow, 'Check: ', DECOR.fg.magenta, name, DECOR.fg.red, 'CODE ERROR');
    if (resultCollector) {
      resultCollector.push(false);
    }
  }
}

