const Page = require('../page');
const { Builder, Key, By, until } = require('selenium-webdriver');

class Login extends Page {
    constructor(driver) {
        super(driver);
        this.path = '/mercurysignon.php';
    }

    get form() {
        return {
            userName: this.driver.findElement(By.name('userName')),
            password: this.driver.findElement(By.name('password')),
            loginButton: this.driver.findElement(By.name('login'))
        };
    }

    async fillInForm(option = {}) {
        await this.utils.enterText(this.form.userName, option.userName || '');
        await this.utils.enterText(this.form.password, option.password || '');
    }
}

module.exports = Login;
