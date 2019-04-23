const Nav = require('./nav');
const Wrapper = require('./wrapper');

class Page {
    constructor(driver) {
        this.driver = driver;
        this.baseUrl = 'http://newtours.demoaut.com';
        this.nav = new Nav(this.driver);
        this.wrapper = new Wrapper(this.driver);
    }

    async goTo(path = '/') {
        await this.driver.get(`${this.baseUrl}${path}`);
    }
}

module.exports = Page;
