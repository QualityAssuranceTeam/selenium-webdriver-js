require('chromedriver');
const RegisterPage = require('../pom/register.page');
const LoginPage = require('../pom/login.page');
const FindFlights = require('../pom/findFlights.page');

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
    beforeEach('set browser', async () => {
        driver = await new Builder().forBrowser('chrome').build();
    });
    context('User Registration', () => {
        it('successfully register a new user', async function () {
            this.timeout(60000); // set test runner timeout up to 1 minute for this test
            const registerPage = new RegisterPage(driver);
            await registerPage.open();
            await registerPage.fillInForm(formData);
            await registerPage.form.submitButton.click();
            const greetengText = await registerPage.confirmRegistration.greetingText.getText();
            expect(greetengText).to.have.string(`${formData.firstName} ${formData.firstName}`);
            const userNameConfirm = await registerPage.confirmRegistration.userName.getText();
            expect(userNameConfirm).to.have.string(formData.userName);
        });
    });
    context('User Login', () => {
        it('successfully login a user', async () => {
            const user = JSON.parse(JSON.stringify(formData)); // create a new instance of the obj
            user.email = user.userName = 'jack.smith@example.com';
            const loginPage = new LoginPage(driver);
            await loginPage.open();
            await loginPage.fillInForm(user);
            await loginPage.form.loginButton.click();
            const pageTitle = await driver.getTitle();
            expect(pageTitle).to.have.string('Find a Flight: Mercury Tours');
            const signOffButtonHref = await loginPage.nav.headerMenuAuth.signOffButton.getAttribute('href');
            expect(signOffButtonHref).to.equal(`${loginPage.baseUrl}/mercurysignoff.php`);
        });
    });
    context('Flight Finder', () => {
        beforeEach('login user', async () => {
            const user = { userName: 'jack.smith@example.com', password: 'test0123'};
            const loginPage = new LoginPage(driver);
            await loginPage.open();
            await loginPage.fillInForm(user);
            await loginPage.form.loginButton.click();
            const pageTitle = await driver.getTitle();
            expect(pageTitle).to.have.string('Find a Flight: Mercury Tours');
        })
        it('successfully find a flight', async () => {const flight = { passCount: '3' };
            const findFlightsPage = new FindFlights(driver);
            await findFlightsPage.open();
            await findFlightsPage.button.oneWay.click();
            await findFlightsPage.button.roundTrip.click();
            const flightDetails = {
                passengers: '2',
                departing: 'London',
                fromMonth: 'May',
                fromDay: '11',
                arriving: 'Paris',
                toMonth: 'June',
                toDay: '15'
            };
            await findFlightsPage.selectFlightDetails(flightDetails);
            await findFlightsPage.button.businessClass.click();
            await findFlightsPage.button.firstClass.click();
            await findFlightsPage.selectOption(findFlightsPage.dropdown.airline, 'Unified Airlines');
            await findFlightsPage.button.continueButton.click();
            const pageTitle = await driver.getTitle();
            expect(pageTitle).to.have.string('Select a Flight: Mercury Tours');
            const flightInfo = await driver.findElement(By.xpath(`//b/font[contains(text(),'${flightDetails.departing} to')]`)).getText();
            expect(flightInfo).to.have.string(`${flightDetails.departing} to ${flightDetails.arriving}`)
        });
    });
    context('Navigation Menu', () => {
        it('home button', async () => {
            const page = new LoginPage(driver);
            await page.goTo('/');
            await page.nav.headerMenuNotAuth.signOnButton.click();
            const pageTitle = await driver.getTitle();
            expect(pageTitle).to.have.string('Sign-on: Mercury Tours')
        });
    });
    afterEach('close browser', () => driver.close());
    after('quit session', () => driver.quit());
});
