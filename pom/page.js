const Frame = require('./frame');

class Page {
    constructor(driver) {
        this.driver = driver;
        this.baseUrl = 'http://newtours.demoaut.com';
        this.navigation = new Frame();
    }

    async goTo(path = '/') {
        await this.driver.get(`${this.baseUrl}${path}`);
    }

    async enterText(target, value) {
        await this.driver.findElement(target).click();
        await this.driver.findElement(target).sendKeys(value);
    }

    async clickOn(target) {
        await this.driver.findElement(target).click();
    }
}

module.exports = Page;
