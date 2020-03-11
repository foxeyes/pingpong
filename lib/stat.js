import {DECOR} from './console-decor.js';

/**
 *
 * @param {Array<Boolean>} resultCollector
 * @param {String} [finalMsg]
 */
export function stat(name, resultCollector, finalMsg) {
  console.log(DECOR.fg.blue, finalMsg || 'Test session completed');
  console.log(DECOR.fg.yellow, '>>>>>>> Results: <<<<<<<');
  let errors = resultCollector.filter(result => !result);
  if (errors.length) {
    console.log(DECOR.fg.red, 'Errors: ', DECOR.fg.red, '' + errors.length);
  }
  let passed = resultCollector.filter(result => !!result);
  let percentage = Math.round(passed.length / (resultCollector.length / 100));
  let color = percentage === 100 ? DECOR.fg.green : (percentage > 50 ? DECOR.fg.yellow : DECOR.fg.red);
  console.log(color, 'Tests passed: ', percentage + '%');
}
