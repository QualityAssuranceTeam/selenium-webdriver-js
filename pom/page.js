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
    
    /* async waitForPageTitle(title, timeout = '1000') {
        return await this.driver.wait(until.titleIs(title), timeout);
    } */
}

module.exports = Page;
