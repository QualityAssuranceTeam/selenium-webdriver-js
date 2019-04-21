const { Builder, Key, By, until } = require('selenium-webdriver');

class Navigation {
    get headerMenu() {
        return {
            signOnButton: By.xpath('//a[.=\'SIGN-ON\']'),
            registerButton: By.xpath('//a[.=\'REGISTER\']'),
            signOffButton: By.xpath('//a[.=\'SIGN-OFF\']'),
            itineraryButton: By.xpath('//a[.=\'ITINERARY\']'),
            profileButton: By.xpath('//a[.=\'PROFILE\']'),
            supportButton: By.xpath('//a[.=\'SUPPORT\']'),
            contactButton: By.xpath('//a[.=\'CONTACT\']')
        }
    }

    get sideMenu() {
        return {
            homeButton: By.xpath('//a[.=\'Home\')]'),
            flightsButton: By.xpath('//a[.=\'Flights\')]'),
            hotelsButton: By.xpath('//a[.=\'Hotels\')]'),
            carRentalsButton: By.xpath('//a[.=\'Car Rentals\')]'),
            cruisesButton: By.xpath('//a[.=\'Cruises\')]'),
            destinationsButton: By.xpath('//a[.=\'Destinations\')]'),
            vacationsButton: By.xpath('//a[.=\'Vacations\')]')
        };
    }
}

module.exports = Navigation;
