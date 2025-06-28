const{Builder, Key, By} = require("selenium-webdriver");


async function exam (){
    
    // lanuch the browser 
    let driver = await new Builder().forBrowser("firefox").build();

    // navigate to the page
    await driver.get("https://www.gointernettours.com/");

    // select email input field
    // let emailInput = await driver.findElement(By.id('user_email')).sendKeys('ok@1230'); 
    // let passWord = await driver.findElement(By.className('usa-input usa-input--big password required password-toggle__input validated-field__input')).sendKeys('1234', Key.RETURN); 

    

    // close the browser
    await driver.quit();
}
exam()



