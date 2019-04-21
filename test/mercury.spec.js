require('chromedriver');
const RegisterPage = require('../pom/register.page');
const LoginPage = require('../pom/login.page');

const chai = require('chai');
const expect = chai.expect;
const { Builder, Key, By, until } = require('selenium-webdriver');

const formData = {
    firstName: 'test',
    lastName: 'test',
    phone: '+123 (4) 567 890',
    userName: 'test@test.com',
    address1: '1 Test street',
    address2: 'Test district',
    city: 'Test City',
    state: 'State of Test',
    postalCode: '01T C23',
    email: 'test@test.com',
    password: 'test0123',
    confirmPassword: 'test0123'
}

describe('Mercury Tours', () => {
    let driver;
    context('User Registration', () => {
        before('set browser', async () => {
            driver = await new Builder().forBrowser('chrome').build();
        });
        it('successfully register a new user', async function () {
            this.timeout(60000); // set test runner timeout up to 1 minute for this test
            const registerPage = new RegisterPage(driver);
            await registerPage.open();
            await registerPage.fillInForm(formData);
            await registerPage.clickSubmitButton();
            const greetengText = await registerPage.getGreetengText();
            expect(greetengText).to.have.string(`${formData.firstName} ${formData.firstName}`);
            const userNameConfirm = await registerPage.getUserNameConfim();
            expect(userNameConfirm).to.have.string(formData.userName);
            /* Sign OFF
            await driver.wait(until.elementLocated(By.xpath('//a[.=\'SIGN-OFF\']')), 1000);
            const signOffButtonHref = await driver.findElement(By.xpath('//a[.=\'SIGN-OFF\']')).getAttribute('href');
            expect(signOffButtonHref).to.equal(`${baseUrl}/mercurysignoff.php`);
            signOffButton.click();
            */
        });
        after('quit browser', () => driver.quit());
    });
    context('User Login', () => {
        before('set browser', async () => {
            driver = await new Builder().forBrowser('chrome').build();
        });
        it('successfully login a user', async () => {
            const user = JSON.parse(JSON.stringify(formData)); // create a new instance of the obj
            user.email = user.userName = 'jack.smith@example.com';
            const loginPage = new LoginPage(driver);
            await loginPage.open();
            await loginPage.fillInForm(user);
            await loginPage.clickLoginButton();
            const pageTitle = await driver.getTitle();
            expect(pageTitle).to.have.string('Find a Flight: Mercury Tours');
            await driver.wait(until.elementLocated(By.xpath('//a[.=\'SIGN-OFF\']')), 1000);
            const signOffButtonHref = await driver.findElement(By.xpath('//a[.=\'SIGN-OFF\']')).getAttribute('href');
            expect(signOffButtonHref).to.equal(`${loginPage.baseUrl}/mercurysignoff.php`);
        });
        after('quit browser', () => driver.quit());
    });
    context('Navigation Menu', () => {
        before('set browser', async () => {
            driver = await new Builder().forBrowser('chrome').build();
        });
        it('home button', async () => {
            const page = new LoginPage(driver);
            await page.goTo('/');
            await page.clickOn(page.navigation.headerMenu.signOnButton);
            const pageTitle = await driver.getTitle();
            expect(pageTitle).to.have.string('Sign-on: Mercury Tours')
        });
        after('quit browser', () => driver.quit());
    });
});
