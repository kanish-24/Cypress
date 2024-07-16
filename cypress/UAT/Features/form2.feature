
Feature: Simple form
Scenario: To validate simple form functionality
Given User launch the browser and open the url
When when user enters the first name, last name, email-id, contact us, message
And clicks on submit button
Then An alert saying Thank You for reaching out to us message should be displayed