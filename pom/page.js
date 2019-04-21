const baseUrl = 'http://newtours.demoaut.com';

class Page {
    constructor(driver) {
        this.driver = driver;
    }

    async open(path = '/') {
        await this.driver.get(`${baseUrl}${path}`);
    }

    async enterText(tar, val) {
        await this.driver.findElement(tar).click();
        await this.driver.findElement(tar).sendKeys(val);
    }
}

module.exports = Page;
