import { action, gondola, locator, page } from "@logigear/gondola";

@page
export class contactSalePage {
    // Notificationbar dialog
    @locator
    public dialogNotificationbar = "#activation_warning";
    @locator
    public btCloseNotify = "//div[@id='activation_warning']//button[@class='close_notify_active']";
    @locator
    public btActiveNotify = "//a[contains(.,'Activate account')]";
    @locator
    public btSendYourMessage ="//button[@class='frm_button_submit']";

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
    @action ("content on contact Sale page")
    public async contentContactSalePage(){
       await gondola.waitForElement(this.btSendYourMessage,10);
       await gondola.checkControlExist(this.btSendYourMessage);
    }

}
export default new contactSalePage();