import { action, gondola, locator, page } from "gondolajs";


@page
export class welcomePage {
    @locator
    public Account = "//header[@class='banner navbar navbar-default navbar-static-top dark-header']//li[@class='account-menu dropdown']";
    @locator
    public btFreeDownload = "//div[@class='elementor-element elementor-element-8dec206 elementor-position-left elementor-vertical-align-top elementor-widget elementor-widget-image-box']//a[.='Free Download']";
    @locator
    public contentMenuItem = "//header[@class='banner navbar navbar-default navbar-static-top dark-header']//li[@class='account-menu dropdown']/ul[@class='dropdown-menu']";
    @locator
    public lnkHeaderAccount = "//header[@class='banner navbar navbar-default navbar-static-top dark-header']//li[@class='account-menu dropdown']"; 
    @locator
    public lnkManageMySubcriptions = "//header[@class='banner navbar navbar-default navbar-static-top dark-header']//a[contains(.,'Manage My Subscriptions')]"; 
    @locator
    public lnkManageChangePassword = "//header[@class='banner navbar navbar-default navbar-static-top dark-header']//a[contains(.,'Change Password')]"; 
    @locator
    public lnkManageMyProfile = "//header[@class='banner navbar navbar-default navbar-static-top dark-header']//a[contains(.,'Manage My Profile')]"; 
    @locator
    public lnkFreeDownload = "//header[@class='banner navbar navbar-default navbar-static-top dark-header']//li[@class='account-menu dropdown']//a[.='Free Download']";
    // Notificationbar dialog
    @locator
    public dialogNotificationbar = "#activation_warning";
    @locator
    public btCloseNotify = "//div[@id='activation_warning']//button[@class='close_notify_active']";
    @locator
    public btActiveNotify = "//a[contains(.,'Activate account')]";

    
    @action("verify notification bar")
    public async verifyNotificationBar() {
      await gondola.waitForElement(this.dialogNotificationbar, 10);
      await gondola.checkControlExist(this.dialogNotificationbar);
    }
    @action("close notification bar")
    public async closeNotificationBar() {
      await gondola.waitForClickable(this.dialogNotificationbar, 30);
      await gondola.checkControlExist(this.btCloseNotify);
      await gondola.click(this.btCloseNotify);
    }
    @action(" check Install Gondola page")
    public async checkDownloadPage(){
        
        await gondola.waitForElement(this.btFreeDownload,30);
        await gondola.checkControlExist(this.btFreeDownload);
        
    }
    @action(" click link")
    public async openLink(link:any){
        await gondola.waitForClickable(link,30);
        //await gondola.wait(30);    
        await gondola.click(link);

    }
    @action("check context menu item existed")
   public async checkMenuItemNoExistonAccount(value: any) {

      await gondola.waitForClickable(this.lnkHeaderAccount, 10);
      await gondola.click(this.lnkHeaderAccount);
      let isMenuExist = (await gondola.getText(this.contentMenuItem)).includes(value);
      await gondola.checkEqual(isMenuExist, false, "matches found: " + value);
   }
   @action("check context menu item not existed")
   public async checkMenuItemExistonAccount(value: any) {
      await gondola.waitForClickable(this.lnkHeaderAccount, 30);
      await gondola.moveMouse(this.lnkHeaderAccount,{x:5, y:5});
      let isMenuExist = (await gondola.getText(this.contentMenuItem)).includes(value);
      await gondola.checkEqual(isMenuExist, true, "No matches found: " + value);
   }
}
export default new welcomePage();