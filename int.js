const{Builder, Key, Select, By} = require("selenium-webdriver");


async function exam (){
    
    // lanuch the browser 
    let driver = await new Builder().forBrowser("firefox").build();

    // navigate to the page
    await driver.get("https://www.gointernettours.com/");

    
    await driver.manage().window().maximize();

    // select email input field
    // let emailInput = await driver.findElement(By.id('user_email')).sendKeys('ok@1230'); 
    let yourName = await driver.findElement(By.className('form-input w-input')).sendKeys('Harish Negi', Key.RETURN); 
    let eMail = await driver.findElement(By.id('Email-3')).sendKeys('harish25@gmsil.com', Key.RETURN); 
    
    // dropdown selection
    let airFare = await driver.findElement(By.id('Do-You-need-Airfare'));
    let airFareop = await new Select(airFare);
    await airFareop.selectByVisibleText('No');
    
    
    let hoTel = await driver.findElement(By.id('Do-you-need-hotel'));
    let hotleOn = await new Select(hoTel);
    await hotleOn.selectByVisibleText('Yes');
    
    let tvlFrom = await driver.findElement(By.name('Travelling-from')).sendKeys('Delhi', Key.RETURN); 
    let trlTo = await driver.findElement(By.name('Travelling-to')).sendKeys('Karanprayag', Key.RETURN); 
    let dDate = await driver.findElement(By.name('Departure-date')).sendKeys('02-07-2025', Key.RETURN); 
    let rtnDate= await driver.findElement(By.name('Return-Date')).sendKeys('10-07-2025', Key.RETURN); 
    let subMit = await driver.findElement(By.id('Final-Message')).sendKeys('Ok', Key.RETURN); 

    // close the browser
    // await driver.quit();
}
exam()



