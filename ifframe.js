const { Builder, By, until } = require('selenium-webdriver');

(async function iframeExample() {
  // Step 1: Launch browser (e.g., Chrome)
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Step 2: Navigate to a page with an iframe
    await driver.get('https://www.w3schools.com/html/tryit.asp?filename=tryhtml_iframe');

    // Step 3: Wait for iframe to be available
    await driver.wait(until.elementLocated(By.css('iframe#iframeResult')), 10000);

    // Step 4: Switch to the outer iframe
    let outerFrame = await driver.findElement(By.css('iframe#iframeResult'));
    await driver.switchTo().frame(outerFrame);

    // Step 5: Switch to the inner iframe inside the outer one
    let innerFrame = await driver.findElement(By.css('iframe'));
    await driver.switchTo().frame(innerFrame);

    // Step 6: Interact with element inside iframe (e.g., get heading text)
    let heading = await driver.findElement(By.css('h1'));
    let text = await heading.getText();
    console.log("Text inside iframe:", text);

    // Step 7: Switch back to main content
    await driver.switchTo().defaultContent();

  } finally {
    // Step 8: Close browser after a few seconds
    await driver.sleep(3000);
    await driver.quit();
  }
})();
