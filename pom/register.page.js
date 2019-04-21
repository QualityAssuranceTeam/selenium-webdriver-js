const Page = require('./page');
const { Builder, Key, By, until } = require('selenium-webdriver');

class Register extends Page {
    constructor(driver) {
        super(driver);
        this.path = '/mercuryregister.php';
        this.title = 'Register: Mercury Tours';
    }

    get form() {
        return {
            firstName: this.driver.findElement(By.name('firstName')),
            lastName: this.driver.findElement(By.name('lastName')),
            phone: this.driver.findElement(By.name('phone')),
            userName: this.driver.findElement(By.name('userName')),
            address1: this.driver.findElement(By.name('address1')),
            address2: this.driver.findElement(By.name('address2')),
            city: this.driver.findElement(By.name('city')),
            state: this.driver.findElement(By.name('state')),
            postalCode: this.driver.findElement(By.name('postalCode')),
            countryDropdown: this.driver.findElement(By.name('country')),
            countryUK: this.driver.findElement(By.xpath('//select/option[contains(text(),\'UNITED KINGDOM\')]')),
            email: this.driver.findElement(By.name('email')),
            password: this.driver.findElement(By.name('password')),
            confirmPassword: this.driver.findElement(By.name('confirmPassword')),
            submitButton: this.driver.findElement(By.name('register'))
        };
    }

    get confirmRegistration() {
        return {
            greetingText: this.driver.findElement(By.xpath('//*[contains(text(),\'Dear\')]')),
            userName: this.driver.findElement(By.xpath('//*[contains(text(),\'Your user name is\')]'))
        };
    }

    async open(timeout = 1000) {
        await this.goTo(this.path);
        await this.driver.wait(until.titleIs(this.title), timeout);
    }

    async fillInForm(option = {}) {
        await this.enterText(this.form.firstName, option.firstName || '')
        await this.enterText(this.form.lastName, option.lastName || '');
        await this.enterText(this.form.phone, option.phone || '');
        await this.enterText(this.form.userName, option.userName || '');
        await this.enterText(this.form.address1, option.address1 || '');
        await this.enterText(this.form.address2, option.address2 || '');
        await this.enterText(this.form.city, option.city || '');
        await this.enterText(this.form.state, option.state || '');
        await this.enterText(this.form.postalCode, option.postalCode || '');
        await this.selectCountry();
        await this.enterText(this.form.email, option.email || '');
        await this.enterText(this.form.password, option.password || '');
        await this.enterText(this.form.confirmPassword, option.confirmPassword || '');
    }
    
    async selectCountry() {
        await this.form.countryDropdown.click();
        await this.form.countryUK.click();
    }
}

module.exports = Register;
