const Nav = require('./nav');

class Page {
    constructor(driver) {
        this.driver = driver;
        this.baseUrl = 'http://newtours.demoaut.com';
        this.nav = new Nav(this.driver);
    }

    async goTo(path = '/') {
        await this.driver.get(`${this.baseUrl}${path}`);
    }

    async enterText(target, value) {
        await target.click();
        await target.sendKeys(value);
    }
}

module.exports = Page;
