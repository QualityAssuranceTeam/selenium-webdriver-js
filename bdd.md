#### TC-01: User Registration
1. Go to Mercury Tours website.
2. Click on 'REGISTER' button.
3. Fill in the registration form.
4. Click on 'SUBMIT' button.

**Expected Result**:
The user is registered and landed on a confimration page.

---
#### TC-02: User Login
**Prerequisites**:
* Registered user - `oliver.lo@example.com / test0123`

**Steps to reproduce**:
1. Go to Mercury Tours website.
2. Click on 'SIGN-ON' button.
3. Enter registered user's credentials.
6. Click 'SUBMIT' button.

**Expected Result**:
The user is successfully logged in and lands on Find a Flight page.

---
#### TC-03: Book a flight
**Prerequisites**:
* Registered user - `oliver.lo@example.com / test0123`

**Steps to reproduce**:
1. Go to Mercury Tours website.
2. Click on 'SIGN-ON' button.
3. Enter registered user's credentials.
4. Click 'SUBMIT' button.
5. Go to Flight Finder page.
6. Fill in the search form.
7. Click 'CONTINUE' button.
8. Select departure flight.
9. Select return flight.
10. Click 'CONTINUE' button.
11. Fill in the book a flight form.
12. Click on 'SECURE PURCHASE' button.

**Expected Result**:
The flight is booked and the user lands on a Flight Confimration page.

---
#### TC-04: Itinerary preview
**Prerequisites**:
* Registered user - `oliver.lo@example.com / test0123`
* A flight is booked for that user.

**Steps to reproduce**:
1. Go to Mercury Tours website.
2. Click on 'ITINERARY' button.

**Expected Result**:
The user lands on the Itinerary page which contains the booked flights information.

---
#### TC-05: Cancel reservations
**Prerequisites**:
* Registered user - `oliver.lo@example.com / test0123`
* A flight is booked for that user.

**Steps to reproduce**:
1. Go to Mercury Tours website.
2. Click on 'ITINERARY' button.
3. Click on 'CANCEL ALL RESERVATIONS' button.

**Expected Result**:
The user lands on the Home page and user's booked flights are removed.
