require('chromedriver');
const { Builder } = require('selenium-webdriver');

const chai = require('chai');
const expect = chai.expect;

const RegisterPage = require('../src/pom/register.page');
const LoginPage = require('../src/pom/login.page');
const FindFlightPage = require('../src/pom/findFlight.page');
const SelectFlightPage = require('../src/pom/selectFlight.page');
const BookFlightPage = require('../src/pom/bookFlight.page');
const FlightConfirmationPage = require('../src/pom/flightConfirmation.page');

const formData = {
    firstName: 'test',
    lastName: 'test',
    phone: '+123 (4) 567 890',
    userName: '', // will be generated in a before registration method
    address1: '1 Test street',
    address2: 'Test district',
    city: 'Test City',
    state: 'State of Test',
    postalCode: '01T C23',
    country: 'UNITED KINGDOM',
    email: '', // will be generated in a before registration method
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
            it('Sign-on button', async () => {
                const page = new LoginPage(driver);
                await page.open('/');
                await page.menu.headerNotAuth.signOnButton.click();
                const pageTitle = await driver.getTitle();
                expect(pageTitle).to.have.string('Sign-on: Mercury Tours');
            });
            it('Register button', async () => {
                const page = new LoginPage(driver);
                await page.open('/');
                await page.menu.headerNotAuth.registerButton.click();
                const pageTitle = await driver.getTitle();
                expect(pageTitle).to.have.string('Register: Mercury Tours');
            });
            it('Home button', async () => {
                const page = new LoginPage(driver);
                await page.open('/');
                await page.menu.leftSide.homeButton.click();
                const pageTitle = await driver.getTitle();
                expect(pageTitle).to.have.string('Welcome: Mercury Tours');
            });
            it('Cruises button', async () => {
                const page = new LoginPage(driver);
                await page.open('/');
                await page.menu.leftSide.cruisesButton.click();
                const pageTitle = await driver.getTitle();
                expect(pageTitle).to.have.string('Cruises: Mercury Tours');
            });
        });
        context('User Registration', () => {
            before('create a unique registration email', async () => {
                const timeStamp = new Date().getTime();
                formData.email = formData.userName = `${timeStamp}@test.test`;
            });
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
        context('User Login', () => {
            it('successfully login a user', async function () {
                this.timeout(60000);
                const loginPage = new LoginPage(driver);
                await loginPage.open();
                await loginPage.fillInForm(formData);
                await loginPage.form.loginButton.click();
                const pageTitle = await driver.getTitle();
                expect(pageTitle).to.have.string('Find a Flight: Mercury Tours');
                const signOffButtonHref = await loginPage.menu.headerAuth.signOffButton.getAttribute('href');
                expect(signOffButtonHref).to.equal(`${loginPage.baseUrl}/mercurysignoff.php`);
            });
        });
    });
    context('Authenticated user', () => {
        context('Flight Finder', () => {
            beforeEach('login user', async function () {
                this.timeout(60000);
                const loginPage = new LoginPage(driver);
                await loginPage.open();
                await loginPage.fillInForm(formData);
                await loginPage.form.loginButton.click();
                const pageTitle = await driver.getTitle();
                expect(pageTitle).to.have.string('Find a Flight: Mercury Tours');
            });
            it('successfully book a flight', async () => {
                const flightDetails = {
                    passengers: '1',
                    departing: 'London',
                    fromMonth: 'May',
                    fromDay: '11',
                    arriving: 'Paris',
                    toMonth: 'June',
                    toDay: '15',
                    airline: 'Unified Airlines'
                };
                const bookingDetails = {
                    passengers: {
                        firstName: 'Test',
                        lastName: 'Testest',
                        meal: 'Low Calorie'
                    },
                    creditCard: {
                        cardType: 'Visa',
                        number: '4111111111111111',
                        expMonth: '08',
                        expYear: '2010',
                        firstName: 'Test',
                        middleName: 'Testing',
                        lastName: 'Testest'
                    },
                    billing: {
                        address1: '0123 test street',
                        address2: 'testing district',
                        city: 'test city',
                        state: 'state of test',
                        postalCode: '1TE ST2',
                        country: 'UNITED KINGDOM'
                    },
                    delivery: {
                        address1: '0123 another test street',
                        address2: 'another testing district',
                        city: 'another test city',
                        state: 'another state',
                        postalCode: 'TEST0123',
                        country: 'UNITED STATES'
                    }
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
                const bookFlightPage = new BookFlightPage(driver);
                await bookFlightPage.fillInForm(bookingDetails);
                await bookFlightPage.form.purchaseButton.click();
                const flightConfirmationPageTitle = await driver.getTitle();
                expect(flightConfirmationPageTitle).to.have.string('Flight Confirmation: Mercury Tours');
                const flightConfirmationPage = new FlightConfirmationPage(driver);
                const confirmation = await flightConfirmationPage.form.confirmation.getText();
                expect(confirmation).to.have.string('Your itinerary has been booked!');
            });
        });
    });
    afterEach('take a screenshot', async () => {
        const fs = require('fs');
        const screenshot = await driver.takeScreenshot();
        const timeStamp = new Date().getTime();
        try {
            fs.writeFileSync(`./screenshots/${timeStamp}.png`, screenshot, 'base64');
        }
        catch(err) {
            console.log(`Cannot create file or directory ${err.path}`);
        } 
    });
    afterEach('close browser', () => driver.close());
    after('quit session', () => driver.quit());
});
