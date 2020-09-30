import { action, gondola, locator, page } from "gondolajs";
import registerPage from "../gondola_test_site/registerPage";
import { datatest } from "../../data/datatest";
import LoginPage from "../gondola_test_site/loginPage";
import thankyouPage from "./newWelcomePage/thankyouPage";
import { Account} from "../../data/Account";
@page
export class pricingPage {
    @locator
    
    public btContactSale = "//a[contains(.,'Contact Sales')]";
    public btFreeSignUp = "//a[contains(.,'Free Sign Up')]";
    public btFreeDownload = "//a[contains(.,'Free Download')]";
    @locator
    public lnkHeaderLogIn = "//header[@class='banner navbar navbar-default navbar-static-top dark-header']//a[.='Log In']";
    @locator
    public lnkHeaderSignUp = "//header[@class='banner navbar navbar-default navbar-static-top dark-header']//a[.='Sign Up']";
    @locator
    public lnkHeaderLogout = "//header[@class='banner navbar navbar-default navbar-static-top dark-header']//a[.='Logout']";
    @locator
    public lnkHeaderAccount = "//header[@class='banner navbar navbar-default navbar-static-top dark-header']//li[@class='account-menu dropdown']";
    // Notificationbar dialog
    @locator
    public dialogNotificationbar ="//div[@id='notify_active']";
    public btCloseNotify ="//button[@id='close_notify_active']";
    public btActiveNotify ="//a[contains(.,'Active account')]";
    
    @action(" click link")
    public async openLink(link:any){
       // await gondola.waitForElement(this.lnk_WhyGondola);    
       // await gondola.click(this.lnk_WhyGondola);
        await gondola.waitForElement(link,10);    
        await gondola.click(link);
    }
    @action ("verify notification bar")
    public async verifyNotificationBar(){
       await gondola.waitForElement(this.dialogNotificationbar,5);
       await gondola.checkControlExist(this.dialogNotificationbar);
    }
    
    @action ("close notification bar")
    public async closeNotificationBar(){
       await gondola.waitForElement(this.dialogNotificationbar,10);
       await gondola.checkControlExist(this.btCloseNotify);
       await gondola.click(this.btCloseNotify);
    }
    @action ("check GUI before login")
    public async checkGUIbeforeLogin(){
      
       await gondola.waitForElement(this.btContactSale,20);
       await gondola.checkControlExist(this.btContactSale);
       await gondola.checkControlExist(this.btFreeSignUp);
    } 
   
    @action ("check GUI after login with inactive account")
    public async checkGUIafterLoginInactiveAccount(email: any, password: any){
       
      if (await gondola.doesControlExist(this.lnkHeaderAccount)){
         await gondola.click(this.lnkHeaderAccount);
         await gondola.click(this.lnkHeaderLogout);
      }
       await gondola.click(this.lnkHeaderLogIn);
       await LoginPage.login(email,password);
       await thankyouPage.verifyNotificationBar();
       await thankyouPage.closeNotificationBar();
       await thankyouPage.openLink(thankyouPage.lnkHeaderPricing);
       await gondola.waitForElement(this.btContactSale,20);
       await gondola.checkControlExist(this.btContactSale);
       await gondola.checkControlExist(this.btFreeDownload);
    } 
    @action ("check GUI after login with active account")
    public async checkGUIafterLoginActiveAccount(email: any, password: any){
       
      if (await gondola.doesControlExist(this.lnkHeaderAccount)){
         await gondola.click(this.lnkHeaderAccount);
         await gondola.click(this.lnkHeaderLogout);
      }
       await gondola.click(this.lnkHeaderLogIn);
       await LoginPage.login(email,password);
       await thankyouPage.openLink(thankyouPage.lnkHeaderPricing);
       await gondola.waitForElement(this.btContactSale,20);
       await gondola.checkControlExist(this.btContactSale);
       await gondola.checkControlExist(this.btFreeDownload);
    } 
    @action ("check GUI after login with register new account")
    public async checkGUIafterRegisterNewAccount(){
       
      if (await gondola.doesControlExist(this.lnkHeaderAccount)){
         await gondola.click(this.lnkHeaderAccount);
         await gondola.click(this.lnkHeaderLogout);
      }
       await gondola.click(this.lnkHeaderSignUp);
       let acc:Account = await thankyouPage.getRandomaccount();
       await registerPage.InputInfoUser(acc.firstName, datatest.lastname, acc.emailaddress, datatest.password, datatest.password);
       await gondola.report(acc.firstName+ " ,"+datatest.lastname+" ,"+acc.emailaddress+" ,"+datatest.password);
       await registerPage.InputOneLastStep(datatest.titlename, datatest.company, datatest.country, datatest.state, datatest.phone);
       await thankyouPage.openLink(thankyouPage.lnkHeaderPricing);
       await gondola.waitForElement(this.btContactSale,20);
       await gondola.checkControlExist(this.btContactSale);
       await gondola.checkControlExist(this.btFreeDownload);
    }  

}
export default new pricingPage();