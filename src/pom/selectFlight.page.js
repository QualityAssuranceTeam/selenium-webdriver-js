const By = require('selenium-webdriver');
const Page = require('../page');

class SelectFlight extends Page {
    constructor(driver) {
        super(driver);
        this.path = '/mercuryreservation2.php';
    }

    get flight() {
        return {
            depart: {
                $270: this.driver.findElement(By.xpath('//input[@value=\'Blue Skies Airlines$360$270$5:03\']')),
                $271: this.driver.findElement(By.xpath('//input[@value=\'Blue Skies Airlines$361$271$7:10\']')),
                $274: this.driver.findElement(By.xpath('//input[@value=\'Pangea Airlines$362$274$9:17\']')),
                $281: this.driver.findElement(By.xpath('//input[@value=\'Unified Airlines$363$281$11:24\']'))
            },
            return: {
                $270: this.driver.findElement(By.xpath('//input[@value=\'Blue Skies Airlines$630$270$12:23\']')),
                $273: this.driver.findElement(By.xpath('//input[@value=\'Blue Skies Airlines$631$273$14:30\']')),
                $282: this.driver.findElement(By.xpath('//input[@value=\'Pangea Airlines$632$282$16:37\']')),
                $303: this.driver.findElement(By.xpath('//input[@value=\'Unified Airlines$633$303$18:44\']'))
            }
        };
    }

    get button() {
        return {
            continueButton: this.driver.findElement(By.name('reserveFlights'))
        };
    }
}

module.exports = SelectFlight;
