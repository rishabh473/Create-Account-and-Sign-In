import { $ } from '@wdio/globals'
import Page from './page';

class SignInPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get email () {return $('//*[@id="email"]');}

    public get password () {return $('//*[@id="pass"][@name="login[password]"]');}

    public get submit () {return $('//*[@id="send2"][@class="action login primary"]'); }

    /**
     * this method will enter credentials like email and password and sign in to the users account
     */
    public async signInUsingCredentials (email: string, password: string) {
        await this.email.setValue(email);
        await this.password.setValue(password);
        await this.submit.scrollIntoView();
        await browser.takeScreenshot();
        await this.submit.click();
        // await expect($('//*[@id="maincontent"]/div[2]/div[1]/div[1]/h1/span')).toHaveText('My Account')
        await expect($('//*[@id="maincontent"]/div[1]/h1/span')).toHaveText('Home Page')
        console.log("User Sign In Successfull")
    }
}

export default new SignInPage();