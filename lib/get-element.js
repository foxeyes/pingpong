/**
 *
 * @param {*} page
 * @param {String} jsPath
 */
export async function getElementHandle(page, jsPath) {
  return await page.evaluateHandle((jsPath) => {
    try {
      return eval(jsPath);
    } catch (e) {
      console.log('PingPong: elment handle error...');
      return null;
    }
  }, jsPath);
}
