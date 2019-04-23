const { Builder, Key, By, until } = require('selenium-webdriver');

class Utils {
    constructor(driver) {
        this.driver = driver;
    }

    async enterText(target, value) {
        await target.click();
        await target.clear();
        await target.sendKeys(value);
    }

    async selectOption(target, text) {
        await this.driver.findElement(By.name(target)).click();
        await this.driver.findElement(By.xpath(`//select[@name=\'${target}\']/option[contains(text(),\'${text}\')]`)).click();
    }
}

module.exports = Utils;
