//require('chromedriver');
const Page = require('./page');
const {Builder, Key, By, until} = require('selenium-webdriver');

const path = '/mercuryregister.php';
const title = 'Register: Mercury Tours';

class Register extends Page {
    constructor(driver) {        
        super(driver);
    }

    get form() {
        return {
            firstName: By.name('firstName'),
            lastName: By.name('lastName'),
            phone: By.name('phone'),
            userName: By.name('userName'),
            address1: By.name('address1'),
            address2: By.name('address2'),
            city: By.name('city'),
            state: By.name('state'),
            postalCode: By.name('postalCode'),
            countryDropdown: By.name('country'),
            countryUK: By.xpath('//select/option[contains(text(),\'UNITED KINGDOM\')]'),
            email: By.name('email'),
            password: By.name('password'),
            confirmPassword: By.name('confirmPassword'),
            submitButton: By.name('register')
        }
    }

    get confirmRegistration() {
        return {
            greetingText: By.xpath('//*[contains(text(),\'Dear\')]'),
            userName: By.xpath('//*[contains(text(),\'Your user name is\')]')
        }
    }

    async open(timeout = 1000) {
        await this.goTo(path);
        await this.driver.wait(until.titleIs(title), timeout);
    }

    async fillInForm(option = {}) {
        //await this._enterFirstName(option.firstName);
        await this.enterText(this.form.firstName, option.firstName)
        await this.enterText(this.form.lastName, option.lastName);
        await this.enterText(this.form.phone, option.phone);
        await this.enterText(this.form.userName, option.userName);
        await this.enterText(this.form.address1, option.address1);
        await this.enterText(this.form.address2, option.address2);
        await this.enterText(this.form.city, option.city);
        await this.enterText(this.form.state, option.state);
        await this.enterText(this.form.postalCode, option.postalCode);
        await this.selectCountry();
        await this.enterText(this.form.email, option.email);
        await this.enterText(this.form.password, option.password);
        await this.enterText(this.form.confirmPassword, option.confirmPassword);
        await this.clickSubmitButton();
    }

    async getGreetengText() {
        return await this.driver.wait(until.elementLocated(this.confirmRegistration.greetingText), 1000).getText();
    }

    async getUserNameConfim() {
        return await this.driver.wait(until.elementLocated(this.confirmRegistration.userName), 1000).getText();
    }

    async selectCountry() {
        await this.driver.findElement(this.form.countryDropdown).click();
        await this.driver.findElement(this.form.countryUK).click();
    }
    
    async clickSubmitButton() {
        await this.driver.findElement(this.form.submitButton).click();
    }
}

module.exports = Register;
