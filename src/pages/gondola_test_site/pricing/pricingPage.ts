import { action, gondola, locator, page } from "gondolajs";
import registerPage from "../register/registerPage";
import { datatest } from "../../../data/datatest";
import loginPage from "../login/loginPage";
import thankyouPage from "../thankyouPage/thankyouPage";
import { Account} from "../../../data/Account";
import remindPage from "../Active account/remindPage";
import downloadPage from "../thankyouPage/welcomePage";
import installPage from "../thankyouPage/installPage";
import welcomePage from "../thankyouPage/welcomePage";

@page
export class pricingPage {
    @locator
    public btContactSale = "//a[contains(.,'Contact Sales')]";
    @locator
    public btFreeSignUp = "//a[contains(.,'Free Sign Up')]";
    @locator
    public btFreeDownload = "//div[@id='pricing-free-download']//a[.='Free Download']";
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
    @locator
    public btCloseNotify ="//button[@id='close_notify_active']";
    @locator
    public btActiveNotify ="//a[contains(.,'Active account')]";
    
    @action(" click links")
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
    @action ("check GUI before login on Pricing page")
    public async checkGUIbeforeLogin(){
      
       await gondola.waitForElement(this.btContactSale,20);
       await gondola.checkControlExist(this.btContactSale);
       await gondola.checkControlExist(this.btFreeSignUp);
    } 
   
    @action ("check login with inactive account on Pricing page")
    public async loginInactiveAccount(email: any, password: any){
       
      if (await gondola.doesControlExist(this.lnkHeaderAccount)){
         await gondola.click(this.lnkHeaderAccount);
         await gondola.click(this.lnkHeaderLogout);
      }
       await gondola.click(this.btFreeSignUp);
       await loginPage.login(email,password);
       await this.verifyNotificationBar();
       await this.closeNotificationBar();
       await gondola.waitForElement(this.btContactSale,20);
       await gondola.checkControlExist(this.btContactSale);
       await gondola.checkControlExist(this.btFreeDownload);
       await gondola.click(this.btFreeDownload);
       await remindPage.checkGUI(datatest.textContent);

    } 
    @action ("check login with active account on Pricing page")
    public async loginActiveAccount(email: any, password: any){
       
      if (await gondola.doesControlExist(this.lnkHeaderAccount)){
         await gondola.click(this.lnkHeaderAccount);
         await gondola.click(this.lnkHeaderLogout);
      }
       await gondola.click(this.btFreeSignUp);
       await loginPage.login(email,password);
       await gondola.waitForElement(this.btContactSale,20);
       await gondola.checkControlExist(this.btContactSale);
       await gondola.checkControlExist(this.btFreeDownload);
       await gondola.click(this.btFreeDownload);
       await gondola.switchBrowserTab("next");
       await installPage.checkInstallPage();

   } 
    @action ("check register new account on Pricing page")
    public async registerNewAccount(){
       
      if (await gondola.doesControlExist(this.lnkHeaderAccount)){
         await gondola.click(this.lnkHeaderAccount);
         await gondola.click(this.lnkHeaderLogout);
      }
       await gondola.click(this.btFreeSignUp);
       await loginPage.openLink(loginPage.lnkSignUp);
       let acc:Account = await registerPage.getRandomaccount();
       await registerPage.InputInfoUser(acc);
       await thankyouPage.openLink(thankyouPage.lnkHeaderPricing);
       await gondola.waitForElement(this.btContactSale,20);
       await gondola.checkControlExist(this.btContactSale);
       await gondola.checkControlExist(this.btFreeDownload);
       await gondola.click(this.btFreeDownload);
       await remindPage.checkGUI(datatest.textContent);
   }  
}
export default new pricingPage();