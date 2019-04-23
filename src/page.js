const Menu = require('./menu');
const Utils = require('./utils');

class Page {
    constructor(driver) {
        this.driver = driver;
        this.baseUrl = 'http://newtours.demoaut.com';
        this.menu = new Menu(this.driver);
        this.utils = new Utils(this.driver);
    }

    async open(path = undefined) {
        await this.driver.get(`${this.baseUrl}${path || this.path}`);
    }
}

module.exports = Page;
