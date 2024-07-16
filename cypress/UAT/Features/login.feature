
Feature: Login

# Scenario is used when we want to test  with multiple test data
Scenario Outline: Validate login for multiple users

Given Open the browser and enter the url

When user enter username as <username>

And enter password as <password>

And Click on submit button

Then Login should be successful

# Test data should be given in Scenario outline
Examples:
    | username | password |
    | admIn    | admin123 |
    | admin    | 123admin |
    | Admin    | admin12  |

    
