import { Given, When, Then } from '@wdio/cucumber-framework';
// import { expect, $ } from '@wdio/globals'
import HomePage from '../pageobjects/home.page';
import SignInPage from '../pageobjects/sign_in.page';
// import SignOutPage from '../pageobjects/s.page';
import CreateAccountPage from '../pageobjects/create_account.page';

Given(/^User navigates to (.+)$/, async (page) => {
    await HomePage.open(page)
});

When(/^User will click on create an account to start account creation$/, async () => {
    // await browser.refresh();
    await browser.takeScreenshot();
    await HomePage.clickOnCreatAccount();
    // await browser.refresh();
});

Then(/^User will enter (.+), (.+), (.+) and (.+) and click on create account$/, async (first, last, password, email) => {
    await CreateAccountPage.EnterDetails(first, last, email, password)
});

Then(/^User will verify whether account creation is successfull with a Thankyou message$/, async () => {
    await CreateAccountPage.thankyouMesssageDisplay();
});

Then(/^User will sign out$/, async () => {
    await HomePage.clickOnSignOut();
});

Then(/^User will click on sign in$/, async () => {
    await HomePage.clickOnSignIn();
});

Then(/^User will enter (.+) and (.+) and click on sign in$/, async (email, password) => {
    await SignInPage.signInUsingCredentials(email, password);
});