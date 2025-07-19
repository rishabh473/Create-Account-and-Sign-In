Feature: To Check Creation of Account and Sign In Feature

    Scenario Outline: TC_001_User creates a new Account
        Given User navigates to <URL>
        When User will click on create an account to start account creation
        Then User will enter <firstName>, <lastName>, <passWord> and <email> and click on create account
        Then User will verify whether account creation is successfull with a Thankyou message
        Then User will sign out

        Examples:
            | URL                                       | lastName    | passWord     | email                | firstName |
            | https://magento.softwaretestingboard.com/ | test272     | test272$     | test272@test.com     | test272   |
            #| https://magento.softwaretestingboard.com/ | <firstName> | <firstName>$ | <firstName>@test.com | test174   |


    Scenario Outline: TC_002_User sign in using the created account
        Given User navigates to <URL>
        Then User will click on sign in
        Then User will enter <email> and <passWord> and click on sign in

        Examples:
            | URL                                       | passWord     | email                |
            | https://magento.softwaretestingboard.com/ | test272$     | test272@test.com     |
            #| https://magento.softwaretestingboard.com/ | <firstName>$ | <firstName>@test.com |


