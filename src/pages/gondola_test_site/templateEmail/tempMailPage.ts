import { action, gondola, KeyCode, locator, page } from "gondolajs";
import homeGondola from "../../../pages/gondola_test_site/HomeGondola";
import registerPage from "../../../pages/gondola_test_site/register/registerPage";
import { Account } from "../../../data/Gondola/Account";
import { datatest } from "../../../data/Gondola/datatest";
import thankyouPage from "../thankyouPage/thankyouPage";
@page

export class tempMailPage {
    constructor() {
        this._homePageUrl = "https://temp-mail.org/vi/";
      
    }
    _homePageUrl: string;
@locator  
public btCopyEmail = "//button[@class='btn-rds icon-btn bg-theme click-to-copy copyIconGreenBtn']";
@locator
public addressEmail ="//input[@id='mail']";
@locator  
public emailContentGondola = "//span[contains(.,'Gondola Team')]";
@locator  
public activeLink="//p[.='Please click on the link below to complete your registration.']/following-sibling::table//a";
//a[contains(@href,' http://sso-stage1.logigear.com/activation')]

@action("open website Gondola", "Navigate to home page")
public async navigateTo() {
    await gondola.navigate(this._homePageUrl);
    await gondola.maximize();
}

@action ("get temp mail")
public async getRandomEmail(){

    await this.navigateTo();
    await gondola.waitForClickable(this.btCopyEmail,90);
    let email:any=await gondola.getControlProperty(this.addressEmail,"innerText");
    await gondola.report("email name: "+email);
    await gondola.click(this.btCopyEmail);
    let firstName = datatest.firstname;
    
    let acc = new Account(firstName, email);
    return acc;
}

@action(" click links on page")
public async openLink(link:any){
   
    await gondola.waitForElement(link,120);    
    await gondola.click(link);
}
}
export default new tempMailPage();