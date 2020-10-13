import { action, gondola, locator, page } from "gondolajs";

@page
export class manageMySubscriptionsPage {
    
    @locator
    public btSendYourMessage ="//button[@class('frm_button_submit')]";

    
    @action ("content on manage My Subscriptions page")
    public async contentPage(){
       await gondola.waitForElement(this.btSendYourMessage,30);
       await gondola.checkControlExist(this.btSendYourMessage);
    }

}
export default new manageMySubscriptionsPage();