const Page = require('./page');
const { Builder, Key, By, until } = require('selenium-webdriver');

class Login extends Page {
    constructor(driver) {
        super(driver);
        this.path = '/mercurysignon.php';
        this.title = 'Sign-on: Mercury Tours';
    }

    get form() {
        return {
            userName: this.driver.findElement(By.name('userName')),
            password: this.driver.findElement(By.name('password')),
            loginButton: this.driver.findElement(By.name('login'))
        };
    }

    async open(timeout = 1000) {
        await this.goTo(this.path);
        await this.driver.wait(until.titleIs(this.title), timeout);
    }

    async fillInForm(option = {}) {
        await this.enterText(this.form.userName, option.userName || '');
        await this.enterText(this.form.password, option.password || '');
    }
}

module.exports = Login;