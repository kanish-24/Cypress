Feature: Simple form
Scenario: To validate simple form
Given user opens the simple form url
When user enters first name,last name,email,contact number 
And clicks on submit
Then An alert saying successfull message has to be displayed
   