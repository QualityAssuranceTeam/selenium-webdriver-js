const { By } = require('selenium-webdriver');
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

    async fillInForm(options = {}) {
        await this.fillInPassengers(options);
        await this.fillInCreditCard(options);
        await this.fillInBillingAddress(options);
        await this.fillInDeliveryAddress(options);
    }

    async fillInPassengers (options = {}) {
        await this.utils.enterText(this.form.passengers.firstName, options.passengers.firstName || '');
        await this.utils.enterText(this.form.passengers.lastName, options.passengers.lastName || '');
        await this.utils.selectOption(this.dropdown.passengers.meal, options.passengers.meal || '');
    }

    async fillInCreditCard (options = {}) {
        await this.utils.selectOption(this.dropdown.creditCard.cardType, options.creditCard.cardType || '');
        await this.utils.enterText(this.form.creditCard.number, options.creditCard.number || '');
        await this.utils.selectOption(this.dropdown.creditCard.expMonth, options.creditCard.expMonth || '');
        await this.utils.selectOption(this.dropdown.creditCard.expYear, options.creditCard.expYear || '');
        await this.utils.enterText(this.form.creditCard.firstName, options.creditCard.firstName || '');
        await this.utils.enterText(this.form.creditCard.middleName, options.creditCard.middleName || '');
        await this.utils.enterText(this.form.creditCard.lastName, options.creditCard.lastName || '');
    }

    async fillInBillingAddress (options = {}) {
        await this.utils.enterText(this.form.billing.address1, options.billing.address1 || '');
        await this.utils.enterText(this.form.billing.address2, options.billing.address2 || '');
        await this.utils.enterText(this.form.billing.city, options.billing.city || '');
        await this.utils.enterText(this.form.billing.state, options.billing.state || '');
        await this.utils.enterText(this.form.billing.postalCode, options.billing.postalCode || '');
        await this.utils.selectOption(this.dropdown.billing.country, options.billing.country || '');
    }

    async fillInDeliveryAddress (options = {}) {
        await this.utils.enterText(this.form.delivery.address1, options.delivery.address1 || '');
        await this.utils.enterText(this.form.delivery.address2, options.delivery.address2 || '');
        await this.utils.enterText(this.form.delivery.city, options.delivery.city || '');
        await this.utils.enterText(this.form.delivery.state, options.delivery.state || '');
        await this.utils.enterText(this.form.delivery.postalCode, options.delivery.postalCode || '');
        await this.utils.selectOption(this.dropdown.delivery.country, options.delivery.country || '');
    }
}

module.exports = BookFlight;