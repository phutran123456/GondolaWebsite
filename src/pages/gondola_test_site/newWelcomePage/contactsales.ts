import { action, gondola, locator, page } from "gondolajs";

@page
export class contactUsPage {
    // Notificationbar dialog
    @locator
    public dialogNotificationbar ="//div[@id='notify_active']";
    public btCloseNotify ="//button[@id='close_notify_active']";
    public btActiveNotify ="//a[contains(.,'Active account')]";
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
export default new contactUsPage();