## BUG REPORT
#### BUG-01: Flight Finder - search for One way tickets returns Round trip tickets
**Prerequisites**:
* Registered user - `oliver.lo@example.com / test0123`

**Steps to reproduce**:
1. Go to Mercury Tours website.
2. Click on 'SIGN-ON' button.
3. Enter registered user's credentials.
4. Click 'SUBMIT' button.
5. Go to Flight Finder page.
6. Select the 'One Way' checkbox.
7. Click 'CONTINUE' button.
8. Observe the results.

**Observed result**:
The results only contain round trip (two way) tickets. No one way tickets are present.

**Expected result**:
The results should contain one way tickets only.
