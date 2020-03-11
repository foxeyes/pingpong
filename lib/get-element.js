/**
 *
 * @param {*} page
 * @param {String} jsPath
 */
export async function getElementHandle(page, jsPath) {
  return await page.evaluateHandle((jsPath) => {
    return eval(jsPath);
  }, jsPath);
}
