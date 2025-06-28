const { Builder, By, Key, until } = require('selenium-webdriver');
require('chromedriver');  // Ensures ChromeDriver is set


(async function paymentTest() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Replace this with your real payment form URL
        await driver.get('https://www.selenium.dev/selenium/web/web-form.html');

        // Wait for page to load
        await driver.wait(until.titleContains('Web form'), 5000);

        // Example: Using form fields available in demo page
        // Replace IDs with your real payment form IDs in production

        await driver.findElement(By.id('my-text-id')).sendKeys('4111111111111111'); // Card number
        await driver.findElement(By.name('my-password')).sendKeys('12/25');         // Expiry (example field)
        await driver.findElement(By.name('my-textarea')).sendKeys('123');           // CVV (example field)

        // Submit button
        await driver.findElement(By.css('button')).click();

        // Wait for message or next page
        await driver.wait(until.urlContains('success'), 5000);

        console.log('✅ Payment Test Passed - Success page loaded');
    } catch (err) {
        console.error('❌ Payment Test Failed:', err);
    } finally {
        await driver.quit();
    }
})();






// const { Builder, By, Key, until } = require('selenium-webdriver');

// (async function paymentTest() {
//     // Launch Chrome
//     let driver = await new Builder().forBrowser('chrome').build();

//     try {
//         // Open your payment page (replace with real URL)
//         await driver.get('https://example.com/payment');

//         // Wait for Card Number field to load and enter data
//         await driver.wait(until.elementLocated(By.id('cardNumber')), 5000);
//         await driver.findElement(By.id('cardNumber')).sendKeys('4111111111111111');  // Test Card Number

//         // Enter Expiry Date
//         await driver.findElement(By.id('expiryDate')).sendKeys('12/25');

//         // Enter CVV
//         await driver.findElement(By.id('cvv')).sendKeys('123');

//         // Click Pay Button
//         await driver.findElement(By.id('payButton')).click();

//         // Wait for success message
//         await driver.wait(until.elementLocated(By.id('successMessage')), 5000);

//         console.log("Payment Test Passed: Success Message Found");

//     } catch (error) {
//         console.error("Test Failed:", error);
//     } finally {
//         await driver.quit();
//     }
// })();
