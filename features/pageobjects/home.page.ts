import { $ } from '@wdio/globals'
import Page from './page';

class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    public get creatAccount() { return $('/html/body/div[2]/header/div[1]/div/ul/li[3]/a'); }

    public get signOut() { return $('/html/body/div[2]/header/div[1]/div/ul/li[2]/div/ul/li[3]/a'); }

    public get signIn() { return $('/html/body/div[2]/header/div[1]/div/ul/li[2]/a'); }

    public get dropDown(){ return $('/html/body/div[2]/header/div[1]/div/ul/li[2]/span/button'); }

    /**
     * this method will click on Create Account present on Nav Bar
     */
    public async clickOnCreatAccount() {
        await this.creatAccount.click();
        await browser.refresh();
        await this.creatAccount.click();
    }

    /**
     * this method will click on Sign In present on Nav Bar
     */
    public async clickOnSignIn() {
        await this.signIn.click();
    }

    /**
     * this method will click on Sign out present on Nav Bar
     */
    public async clickOnSignOut() {
        await this.dropDown.click();
        await this.signOut.click();
        browser.waitUntil(async ()=>{return await (await $('//*[@id="maincontent"]/div[1]/h1/span')).isDisplayed()},{timeout:5000})
    }

    /**
     * Open URL
     */
    public open(path: string) {
        return super.open(path);
    }
}

export default new HomePage();