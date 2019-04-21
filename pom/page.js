class Page {
    constructor(driver) {
        this.driver = driver;
        this.baseUrl = 'http://newtours.demoaut.com';
    }

    async goTo(path = '/') {
        await this.driver.get(`${this.baseUrl}${path}`);
    }

    async enterText(target, value) {
        await this.driver.findElement(target).click();
        await this.driver.findElement(target).sendKeys(value);
    }
}

module.exports = Page;
