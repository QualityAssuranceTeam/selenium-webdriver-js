const Page = require('../page');
const { Builder, Key, By, until } = require('selenium-webdriver');

class Register extends Page {
    constructor(driver) {
        super(driver);
        this.path = '/mercuryregister.php';
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
            country: 'country',
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

    async fillInForm(option = {}) {
        await this.utils.enterText(this.form.firstName, option.firstName || '')
        await this.utils.enterText(this.form.lastName, option.lastName || '');
        await this.utils.enterText(this.form.phone, option.phone || '');
        await this.utils.enterText(this.form.userName, option.userName || '');
        await this.utils.enterText(this.form.address1, option.address1 || '');
        await this.utils.enterText(this.form.address2, option.address2 || '');
        await this.utils.enterText(this.form.city, option.city || '');
        await this.utils.enterText(this.form.state, option.state || '');
        await this.utils.enterText(this.form.postalCode, option.postalCode || '');
        await this.utils.selectOption(this.form.country, option.country || '')
        await this.utils.enterText(this.form.email, option.email || '');
        await this.utils.enterText(this.form.password, option.password || '');
        await this.utils.enterText(this.form.confirmPassword, option.confirmPassword || '');
    }
}

module.exports = Register;
