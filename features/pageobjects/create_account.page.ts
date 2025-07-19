import { $ } from '@wdio/globals'
import Page from './page';

class CreateAccountPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get firstName() { return $('//*[@id="firstname"]'); }

    public get lastName() { return $('//*[@id="lastname"]'); }

    public get email() { return $('//*[@id="email_address"]'); }

    public get password() { return $('//*[@id="password"]'); }

    public get passwordConfirm() { return $('//*[@id="password-confirmation"]'); }

    public get submit() { return $('//*[@id="form-validate"]/div/div[1]/button'); }

    public get thankyouMessage() { return $('//*[@id="maincontent"]/div[1]/div[2]/div/div/div'); }

    /**
     * this method will enter details such as firstname lastname email etc to create an account
     */
    public async EnterDetails(firstname: string, lastname: string, email: string, password: string) {
        // if(await $('//div[contains(text(),"Ad")]').isDisplayed()==true){
        // browser.refresh();
        // }
        await this.firstName.setValue(firstname);
        await this.lastName.setValue(lastname);
        await this.email.setValue(email);
        await this.password.setValue(password);
        await this.passwordConfirm.setValue(password);
        await this.submit.scrollIntoView();
        await browser.takeScreenshot();
        await this.submit.click();
    }

    /**
    * this method which will check whether Thankyou message is displayed or not indicating successfull account creation
    */
    public async thankyouMesssageDisplay() {
        await expect(await this.thankyouMessage).toHaveText("Thank you for registering with Main Website Store.")
        await this.thankyouMessage.scrollIntoView();
        await browser.takeScreenshot();
        console.log("Account is Successfully created")
    }
}

export default new CreateAccountPage();