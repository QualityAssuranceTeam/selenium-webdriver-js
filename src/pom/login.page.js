const { By } = require('selenium-webdriver');
const Page = require('../page');

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

    async fillInForm(options = {}) {
        await this.utils.enterText(this.form.userName, options.userName || '');
        await this.utils.enterText(this.form.password, options.password || '');
    }
}

module.exports = Login;
