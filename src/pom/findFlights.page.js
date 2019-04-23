const Page = require('../page');
const { Builder, Key, By, until } = require('selenium-webdriver');

class FindFlight extends Page {
    constructor(driver) {
        super(driver);
        this.path = '/mercuryreservation.php';
    }

    get button() {
        return {
            roundTrip: this.driver.findElement(By.xpath('//input[@name=\'tripType\' and @value=\'roundtrip\']')),
            oneWay: this.driver.findElement(By.xpath('//input[@name=\'tripType\' and @value=\'oneway\']')),
            economyClass: this.driver.findElement(By.xpath('//input[@name=\'servClass\' and @value=\'Coach\']')),
            businessClass: this.driver.findElement(By.xpath('//input[@name=\'servClass\' and @value=\'Business\']')),
            firstClass: this.driver.findElement(By.xpath('//input[@name=\'servClass\' and @value=\'First\']')),
            continueButton: this.driver.findElement(By.name('findFlights'))
        }
    }

    get dropdown() {
        return {
            passengers: 'passCount',
            departing: 'fromPort',
            fromMonth: 'fromMonth',
            fromDay: 'fromDay',
            arriving: 'toPort',
            toMonth: 'toMonth',
            toDay: 'toDay',
            airline: 'airline'
        }
    }

    async selectFlightDetails(option = {}) {
        await this.utils.selectOption(this.dropdown.passengers, option.passengers || '');
        await this.utils.selectOption(this.dropdown.departing, option.departing || '');
        await this.utils.selectOption(this.dropdown.fromMonth, option.fromMonth || '');
        await this.utils.selectOption(this.dropdown.fromDay, option.fromDay || '');
        await this.utils.selectOption(this.dropdown.arriving, option.arriving || '');
        await this.utils.selectOption(this.dropdown.toMonth, option.toMonth || '');
        await this.utils.selectOption(this.dropdown.toDay, option.toDay || '');
        await this.utils.selectOption(this.dropdown.airline, option.airline || '');
    }
}

module.exports = FindFlight;
