const { Builder, Key, By, until } = require('selenium-webdriver');
const Page = require('../page');

class BookFlight extends Page {
    constructor(driver) {
        super(driver);
        this.path = '/mercurypurchase.php';
    }

    get form() {
        return {
            passengers: {
                firstName: '',
                lastName: ''
            },
            creditCard: {
                number: '',
                firstName: '',
                middleName: '',
                lastName: ''
            },
            billing: {
                address1: '',
                address2: '',
                city: '',
                state: '',
                postalCode: ''
            },
            delivery: {
                address1: '',
                address2: '',
                city: '',
                state: '',
                postalCode: ''
            },
            purchaseButton: ''
        };
    }

    get dropdown() {
        return {
            passengers: {
                meal: ''
            },
            creditCard: {
                cardType: '',
                expMonth: '',
                expYear: ''
            },
            billing: {
                country: ''
            },
            delivery: {
                country: ''
            }
        };
    }
}

module.exports = BookFlight;