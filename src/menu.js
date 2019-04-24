const { By } = require('selenium-webdriver');

class Menu {
    constructor(driver) {
        this.driver = driver;
    }

    get headerNotAuth() {
        return {
            signOnButton: this.driver.findElement(By.xpath('//a[.=\'SIGN-ON\']')),
            registerButton: this.driver.findElement(By.xpath('//a[.=\'REGISTER\']')),
            supportButton: this.driver.findElement(By.xpath('//a[.=\'SUPPORT\']')),
            contactButton: this.driver.findElement(By.xpath('//a[.=\'CONTACT\']'))
        }
    }

    get headerAuth() {
        return {
            signOffButton: this.driver.findElement(By.xpath('//a[.=\'SIGN-OFF\']')),
            itineraryButton: this.driver.findElement(By.xpath('//a[.=\'ITINERARY\']')),
            profileButton: this.driver.findElement(By.xpath('//a[.=\'PROFILE\']')),
        }
    }

    get leftSide() {
        return {
            homeButton: this.driver.findElement(By.xpath('//a[.=\'Home\']')),
            flightsButton: this.driver.findElement(By.xpath('//a[.=\'Flights\']')),
            hotelsButton: this.driver.findElement(By.xpath('//a[.=\'Hotels\']')),
            carRentalsButton: this.driver.findElement(By.xpath('//a[.=\'Car Rentals\']')),
            cruisesButton: this.driver.findElement(By.xpath('//a[.=\'Cruises\']')),
            destinationsButton: this.driver.findElement(By.xpath('//a[.=\'Destinations\']')),
            vacationsButton: this.driver.findElement(By.xpath('//a[.=\'Vacations\']'))
        };
    }
}

module.exports = Menu;
