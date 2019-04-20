#### BUG: 01
A user with no data can be registered
* Register form has no UI validation.
* Register form has no BE validation.

#### BUG: 02
A fligh can be purcahsed to a passanger with no data
* Checkout form has no UI validation.
* Checkout form has no BE validation

#### BUG: 03
Console errors (thrown on every page)
```
mercuryunderconst.php:78 GET http://newtours.demoaut.com/images/nav/boxad1.gif net::ERR_BLOCKED_BY_CLIENT
mercuryunderconst.php:146 GET http://newtours.demoaut.com/images/spacer.gif 404 (Not Found)
mercuryunderconst.php:1 GET http://newtours.demoaut.com/black 404 (Not Found)
```

#### BUG: 04
Flight search > One way ticket search returns restults for two way tickets (no way to book one way trip)

#### BUG: 05
Purchase form > wronf default Billing and Delivery address

#### BUG: 06 ???
Purchase form > no default passenger first and last name

#### BUG: 07
Purchase form > credit card > expiration year > only past year options are prived (2000,...,2010)

#### BUG: 08
Purchase form > 'Billing address same as Delivery address' checkbox is not respected

#### BUG: 09
Itinerary shwoing wrong flight inforamtion (cannot find real info)

#### BUG: 10
Itinerary > Cancel reservations buttions navigate to Home page

#### BUG: 11
Itinerary and Profile buttons are present only in the Fligh Finder page

#### BUG: 12
Profile page doesn't show any profile inforamtion

#### BUG: 13
Under Construction pages:
* Contact
* Support
* Hotels
* Car Rentals
* Destinations
* Vacations

#### BUG: 14 @form-valdation
Can book a flight with the same departure and arrival locations

#### BUG: 15 @form-validation
Can book a flight with dates in the past

#### BUG: 16 @ux
Economy class, Business class and First class fight tickets are the same price

#### BUG: 17
Flight finder > Preffered Airline option is not respected
