import {DECOR} from './console-decor.js';

/**
 *
 * @param {Array<Boolean>} resultCollector
 * @param {String} [finalMsg]
 */
export function stat(resultCollector, finalMsg = 'All done.') {
  console.log(DECOR.fg.green, finalMsg, DECOR.fg.blue, 'Common stats:');
  let errors = resultCollector.filter(result => result);
  console.log(DECOR.fg.white, 'Errors: ', (errors.length ? DECOR.fg.red : DECOR.fg.green), errors.length);
  let succcessfulArr = resultCollector.filter(result => !result);
  console.log(DECOR.fg.white, 'Successful checks: ', DECOR.fg.green, succcessfulArr.length);
}
