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
                firstName: this.driver.findElement(By.name('passFirst0')),
                lastName: this.driver.findElement(By.name('passLast0'))
            },
            creditCard: {
                number: this.driver.findElement(By.name('creditnumber')),
                firstName: this.driver.findElement(By.name('cc_frst_name')),
                middleName: this.driver.findElement(By.name('cc_mid_name')),
                lastName: this.driver.findElement(By.name('cc_last_name'))
            },
            billing: {
                address1: this.driver.findElement(By.name('billAddress1')),
                address2: this.driver.findElement(By.name('billAddress2')),
                city: this.driver.findElement(By.name('billCity')),
                state: this.driver.findElement(By.name('billState')),
                postalCode: this.driver.findElement(By.name('billZip'))
            },
            delivery: {
                address1: this.driver.findElement(By.name('delAddress1')),
                address2: this.driver.findElement(By.name('delAddress2')),
                city: this.driver.findElement(By.name('delCity')),
                state: this.driver.findElement(By.name('delState')),
                postalCode: this.driver.findElement(By.name('delZip'))
            },
            purchaseButton: this.driver.findElement(By.name('buyFlights'))
        };
    }

    get dropdown() {
        return {
            passengers: {
                meal: 'pass.0.meal'
            },
            creditCard: {
                cardType: 'creditCard',
                expMonth: 'cc_exp_dt_mn',
                expYear: 'cc_exp_dt_yr'
            },
            billing: {
                country: 'billCountry'
            },
            delivery: {
                country: 'delCountry'
            }
        };
    }

    async fillInForm(option = {}) {
        await this.fillInPassengers(option);
        await this.fillInCreditCard(option);
        await this.fillInBillingAddress(option);
        await this.fillInDeliveryAddress(option);
    }

    async fillInPassengers (option = {}) {
        await this.utils.enterText(this.form.passengers.firstName, option.passengers.firstName || '');
        await this.utils.enterText(this.form.passengers.lastName, option.passengers.lastName || '');
        await this.utils.selectOption(this.dropdown.passengers.meal, option.passengers.meal || '');
    }

    async fillInCreditCard (option = {}) {
        await this.utils.selectOption(this.dropdown.creditCard.cardType, option.creditCard.cardType || '');
        await this.utils.enterText(this.form.creditCard.number, option.creditCard.number || '');
        await this.utils.selectOption(this.dropdown.creditCard.expMonth, option.creditCard.expMonth || '');
        await this.utils.selectOption(this.dropdown.creditCard.expYear, option.creditCard.expYear || '');
        await this.utils.enterText(this.form.creditCard.firstName, option.creditCard.firstName || '');
        await this.utils.enterText(this.form.creditCard.middleName, option.creditCard.middleName || '');
        await this.utils.enterText(this.form.creditCard.lastName, option.creditCard.lastName || '');
    }

    async fillInBillingAddress (option = {}) {
        await this.utils.enterText(this.form.billing.address1, option.billing.address1 || '');
        await this.utils.enterText(this.form.billing.address2, option.billing.address2 || '');
        await this.utils.enterText(this.form.billing.city, option.billing.city || '');
        await this.utils.enterText(this.form.billing.state, option.billing.state || '');
        await this.utils.enterText(this.form.billing.postalCode, option.billing.postalCode || '');
        await this.utils.selectOption(this.dropdown.billing.country, option.billing.country || '');
    }

    async fillInDeliveryAddress (option = {}) {
        await this.utils.enterText(this.form.delivery.address1, option.delivery.address1 || '');
        await this.utils.enterText(this.form.delivery.address2, option.delivery.address2 || '');
        await this.utils.enterText(this.form.delivery.city, option.delivery.city || '');
        await this.utils.enterText(this.form.delivery.state, option.delivery.state || '');
        await this.utils.enterText(this.form.delivery.postalCode, option.delivery.postalCode || '');
        await this.utils.selectOption(this.dropdown.delivery.country, option.delivery.country || '');
    }
}

module.exports = BookFlight;