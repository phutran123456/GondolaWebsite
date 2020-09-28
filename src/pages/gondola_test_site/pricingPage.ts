import { action, gondola, locator, page } from "gondolajs";

@page
export class pricingPage {
    @locator
    public lnkHeaderLogIn = "//header[@class='banner navbar navbar-default navbar-static-top dark-header']//a[.='Log In']";
    public btContactSale = "//a[contains(.,'Contact Sales')]";
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
}
export default new pricingPage();