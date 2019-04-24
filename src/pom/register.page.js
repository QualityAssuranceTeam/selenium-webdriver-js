const { By } = require('selenium-webdriver');
const Page = require('../page');

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

    async fillInForm(options = {}) {
        await this.utils.enterText(this.form.firstName, options.firstName || '')
        await this.utils.enterText(this.form.lastName, options.lastName || '');
        await this.utils.enterText(this.form.phone, options.phone || '');
        await this.utils.enterText(this.form.userName, options.userName || '');
        await this.utils.enterText(this.form.address1, options.address1 || '');
        await this.utils.enterText(this.form.address2, options.address2 || '');
        await this.utils.enterText(this.form.city, options.city || '');
        await this.utils.enterText(this.form.state, options.state || '');
        await this.utils.enterText(this.form.postalCode, options.postalCode || '');
        await this.utils.selectOption(this.form.country, options.country || '')
        await this.utils.enterText(this.form.email, options.email || '');
        await this.utils.enterText(this.form.password, options.password || '');
        await this.utils.enterText(this.form.confirmPassword, options.confirmPassword || '');
    }
}

module.exports = Register;
