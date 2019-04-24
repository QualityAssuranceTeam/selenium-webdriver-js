const { By } = require('selenium-webdriver');
const Page = require('../page');

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
        };
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
        };
    }

    async selectFlightDetails(options = {}) {
        await this.utils.selectOption(this.dropdown.passengers, options.passengers || '');
        await this.utils.selectOption(this.dropdown.departing, options.departing || '');
        await this.utils.selectOption(this.dropdown.fromMonth, options.fromMonth || '');
        await this.utils.selectOption(this.dropdown.fromDay, options.fromDay || '');
        await this.utils.selectOption(this.dropdown.arriving, options.arriving || '');
        await this.utils.selectOption(this.dropdown.toMonth, options.toMonth || '');
        await this.utils.selectOption(this.dropdown.toDay, options.toDay || '');
        await this.utils.selectOption(this.dropdown.airline, options.airline || '');
    }
}

module.exports = FindFlight;
