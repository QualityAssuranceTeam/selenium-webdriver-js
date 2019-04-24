const { Builder, Key, By, until } = require('selenium-webdriver');
const Page = require('../page');

class FlightConfirmation extends Page {
    constructor(driver) {
        super(driver);
        this.path = '/mercurypurchase2.php';
    }

    get form () {
        return {
            confirmation: this.driver.findElement(By.xpath('//*[contains(text(),\'itinerary has been booked\')]'))
        };
    }
}

module.exports = FlightConfirmation;
