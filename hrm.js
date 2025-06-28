const {Builder, By, Key} = require("selenium-webdriver");

(async function hrm() {

    // lanuch the browser
    let driver = await new Builder().forBrowser("firefox").build();


    // navigate to the page
    await driver.get("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    // minimize the browser
    await driver.manage().window().maximize();


    // select email/password input field
    let emailInput = await driver.findElement(By.className('data-v-957b4417')).sendKeys('Admin'); 
    // let passWord = await driver.findElement(By.xpath('/html/body/div/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input')).sendKeys('admin1234', Key.RETURN); 


})();