//require('chromedriver');
const Page = require('./page');
const {Builder, Key, By, until} = require('selenium-webdriver');

const path = '/mercuryregister.php';
const title = 'Register: Mercury Tours';

class Register extends Page {
    constructor(driver) {
        super(driver);
        this.form = {
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
        };
        this.cofirmRegistration = {
            greetingText: By.xpath('//*[contains(text(),\'Dear\')]'),
            userName: By.xpath('//*[contains(text(),\'Your user name is\')]')
        };
    }

    async goTo() {
        await this.open(path);
        await this.driver.wait(until.titleIs(title), 1000);
    }

    async fillInForm(option = {}) {
        await this._enterFirstName(option.firstName);
        await this._enterLastName(option.lastName);
        await this._enterPhone(option.phone);
        await this._enterUserName(option.userName);
        await this._enterAddress1(option.address1);
        await this._enterAddress2(option.address2);
        await this._enterCity(option.city);
        await this._enterState(option.state);
        await this._enterPostalCode(option.postalCode);
        await this._selectCountry();
        await this._enterEmail(option.email);
        await this._enterPassword(option.password);
        await this._enterConfirmPassword(option.confirmPassword);
        await this._clickSubmitButton();
    }

    async getGreetengText() {
        return await this.driver.wait(until.elementLocated(this.cofirmRegistration.greetingText), 1000).getText();
    }

    async getUserNameConfim() {
        return await this.driver.wait(until.elementLocated(this.cofirmRegistration.userName), 1000).getText();
    }

    async _enterFirstName(val) {
        await this.driver.findElement(this.form.firstName).click();
        await this.driver.findElement(this.form.firstName).sendKeys(val);
    }

    async _enterLastName(val) {
        await this.driver.findElement(this.form.lastName).click();
        await this.driver.findElement(this.form.lastName).sendKeys(val);
    }

    async _enterPhone(val) {
        await this.driver.findElement(this.form.phone).click();
        await this.driver.findElement(this.form.phone).sendKeys(val);
    }

    async _enterUserName(val) {
        await this.driver.findElement(this.form.userName).click();
        await this.driver.findElement(this.form.userName).sendKeys(val);
    }

    async _enterAddress1(val) {
        await this.driver.findElement(this.form.address1).click();
        await this.driver.findElement(this.form.address1).sendKeys(val);
    }

    async _enterAddress2(val) {
        await this.driver.findElement(this.form.address2).click();
        await this.driver.findElement(this.form.address2).sendKeys(val);
    }

    async _enterCity(val) {
        await this.driver.findElement(this.form.city).click();
        await this.driver.findElement(this.form.city).sendKeys(val);
    }

    async _enterState(val) {
        await this.driver.findElement(this.form.state).click();
        await this.driver.findElement(this.form.state).sendKeys(val);
    }

    async _enterPostalCode(val) {
        await this.driver.findElement(this.form.postalCode).click();
        await this.driver.findElement(this.form.postalCode).sendKeys(val);
    }

    async _enterEmail(val) {
        await this.driver.findElement(this.form.email).click();
        await this.driver.findElement(this.form.email).sendKeys(val);
    }

    async _enterPassword(val) {
        await this.driver.findElement(this.form.password).click();
        await this.driver.findElement(this.form.password).sendKeys(val);
    }

    async _enterConfirmPassword(val) {
        await this.driver.findElement(this.form.confirmPassword).click();
        await this.driver.findElement(this.form.confirmPassword).sendKeys(val);
    }

    async _selectCountry() {
        await this.driver.findElement(this.form.countryDropdown).click();
        await this.driver.findElement(this.form.countryUK).click();
    }
    
    async _clickSubmitButton() {
        await this.driver.findElement(this.form.submitButton).click();
    }
}

module.exports = Register;