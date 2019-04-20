require('chromedriver');
const chai = require('chai');
const expect = chai.expect;
const {Builder, Key, By, until} = require('selenium-webdriver');

describe('Mercury Tours', () => {
    let driver;
    let baseUrl = 'http://newtours.demoaut.com';
    before('set browser', async () => {
        driver = await new Builder().forBrowser('chrome').build();
    });
    it('successfully register a new user', async function () {
        this.timeout(60000); // set test runner timeout up to 1 minute for this test
        await driver.get(`${baseUrl}/mercuryregister.php`);
        await driver.wait(until.titleIs('Register: Mercury Tours'), 1000);
        await driver.findElement(By.name('firstName')).click();
        await driver.findElement(By.name('firstName')).sendKeys('test');
        await driver.findElement(By.name('lastName')).click();
        await driver.findElement(By.name('lastName')).sendKeys('test');
        await driver.findElement(By.name('phone')).click();
        await driver.findElement(By.name('phone')).sendKeys('+123 (4) 567 890');
        await driver.findElement(By.name('userName')).click();
        await driver.findElement(By.name('userName')).sendKeys('test@test.test');
        await driver.findElement(By.name('address1')).click();
        await driver.findElement(By.name('address1')).sendKeys('1 Test street');
        await driver.findElement(By.name('address2')).click();
        await driver.findElement(By.name('address2')).sendKeys('Test district');
        await driver.findElement(By.name('city')).click();
        await driver.findElement(By.name('city')).sendKeys('Test City');
        await driver.findElement(By.name('state')).click();
        await driver.findElement(By.name('state')).sendKeys('Test State');
        await driver.findElement(By.name('postalCode')).click();
        await driver.findElement(By.name('postalCode')).sendKeys('01T C23');
        await driver.findElement(By.name('country')).click();
        await driver.findElement(By.xpath('//select/option[contains(text(),\'UNITED KINGDOM\')]')).click();
        //await driver.findElement(By.name('country')).sendKeys('United Kingdom');
        await driver.findElement(By.name('email')).click();
        await driver.findElement(By.name('email')).sendKeys('test@test.test');
        await driver.findElement(By.name('password')).click();
        await driver.findElement(By.name('password')).sendKeys('test0123');
        await driver.findElement(By.name('confirmPassword')).click();
        await driver.findElement(By.name('confirmPassword')).sendKeys('test0123');
        await driver.findElement(By.name('register')).click();
        /* Sign OFF button
        await driver.wait(until.elementLocated(By.xpath('//a[.=\'SIGN-OFF\']')), 1000);
        const signOffButtonHref = await driver.findElement(By.xpath('//a[.=\'SIGN-OFF\']')).getAttribute('href');
        expect(signOffButtonHref).to.equal(`${baseUrl}/mercurysignoff.php`);
        signOffButton.click();
        */
        const greetengText = await driver.wait(until.elementLocated(By.xpath('//*[contains(text(),\'Dear\')]')), 1000).getText();
        expect(greetengText).to.have.string('test test');
        const userNameConfiramtion = await driver.findElement(By.xpath('//*[contains(text(),\'Your user name is\')]')).getText();
        expect(userNameConfiramtion).to.have.string('test@test.test');
    });
    after('quit browser', () => driver.quit());
});