export async function checkVisible(page, jsPath) {
  return await page.evaluate((jsPath) => {
    try {
      let el = eval(jsPath);
      if (!el) {
        return false;
      }
      let style = window.getComputedStyle(el);
      return style && style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0';
    } catch (e) {
      return false;
    }
  }, jsPath);
};

