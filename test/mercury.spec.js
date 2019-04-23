require('chromedriver');
const Builder = require('selenium-webdriver');

const chai = require('chai');
const expect = chai.expect;

const RegisterPage = require('../src/pom/register.page');
const LoginPage = require('../src/pom/login.page');
const FindFlightPage = require('../src/pom/findFlight.page');
const SelectFlightPage = require('../src/pom/selectFlight.page');

const formData = {
    firstName: 'test',
    lastName: 'test',
    phone: '+123 (4) 567 890',
    userName: 'test@test.test',
    address1: '1 Test street',
    address2: 'Test district',
    city: 'Test City',
    state: 'State of Test',
    postalCode: '01T C23',
    country: 'UNITED KINGDOM',
    email: 'test@test.test',
    password: 'test0123',
    confirmPassword: 'test0123'
};

describe('Mercury Tours', () => {
    let driver;
    beforeEach('set browser', async () => {
        driver = await new Builder().forBrowser('chrome').build();
    });
    context('Non-Authenticated user', () =>{
        context('Navigation Menu', () => {
            it('home button', async () => {
                const page = new LoginPage(driver);
                await page.open('/');
                await page.menu.headerNotAuth.signOnButton.click();
                const pageTitle = await driver.getTitle();
                expect(pageTitle).to.have.string('Sign-on: Mercury Tours')
            });
        });
        context('User Registration', () => {
            it('successfully register a new user', async function () {
                this.timeout(60000);
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
    });
    context('Authenticated user', () => {
        const user = { userName: 'isabella.walker@example.com', password: 'test0123'};
        context('User Login', () => {
            it('successfully login a user', async function () {
                this.timeout(60000);
                const loginPage = new LoginPage(driver);
                await loginPage.open();
                await loginPage.fillInForm(user);
                await loginPage.form.loginButton.click();
                const pageTitle = await driver.getTitle();
                expect(pageTitle).to.have.string('Find a Flight: Mercury Tours');
                const signOffButtonHref = await loginPage.menu.headerAuth.signOffButton.getAttribute('href');
                expect(signOffButtonHref).to.equal(`${loginPage.baseUrl}/mercurysignoff.php`);
            });
        });
        context('Flight Finder', () => {
            beforeEach('login user', async function () {
                this.timeout(60000);
                const loginPage = new LoginPage(driver);
                await loginPage.open();
                await loginPage.fillInForm(user);
                await loginPage.form.loginButton.click();
                const pageTitle = await driver.getTitle();
                expect(pageTitle).to.have.string('Find a Flight: Mercury Tours');
            })
            it('successfully book a flight', async () => {
                const flightDetails = {
                    passengers: '2',
                    departing: 'London',
                    fromMonth: 'May',
                    fromDay: '11',
                    arriving: 'Paris',
                    toMonth: 'June',
                    toDay: '15',
                    airline: 'Unified Airlines'
                };
                const findFlightPage = new FindFlightPage(driver);
                await findFlightPage.open();
                await findFlightPage.button.oneWay.click();
                await findFlightPage.button.roundTrip.click();
                await findFlightPage.selectFlightDetails(flightDetails);
                await findFlightPage.button.businessClass.click();
                await findFlightPage.button.firstClass.click();
                await findFlightPage.button.continueButton.click();
                const selectFlightPageTitle = await driver.getTitle();
                expect(selectFlightPageTitle).to.have.string('Select a Flight: Mercury Tours');
                const selectFlightPage = new SelectFlightPage(driver);
                await selectFlightPage.flight.depart.$281.click();
                await selectFlightPage.flight.return.$282.click();
                await selectFlightPage.button.continueButton.click();
                const bookFlightPageTitle = await driver.getTitle();
                expect(bookFlightPageTitle).to.have.string('Book a Flight: Mercury Tours');
                // TODO: Book a flight
            });
        });
    });
    afterEach('close browser', () => driver.close());
    after('quit session', () => driver.quit());
});
