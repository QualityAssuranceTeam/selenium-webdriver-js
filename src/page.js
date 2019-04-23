const Menu = require('./menu');
const Utils = require('./utils');

class Page {
    constructor(driver) {
        this.driver = driver;
        this.menu = new Menu(driver);
        this.utils = new Utils(driver);
        this.baseUrl = 'http://newtours.demoaut.com';
    }

    async open(path = undefined) {
        await this.driver.get(`${this.baseUrl}${ path || this.path }`);
    }
}

module.exports = Page;
