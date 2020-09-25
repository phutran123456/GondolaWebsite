import { action, gondola, locator, page } from "gondolajs";

@page
export class startPage {
    @locator
    public lnk_WhyGondola = "//header[@class='banner navbar navbar-default navbar-static-top dark-header']//a[.='Why Gondola?']";
    public lnk_Features = "//header[@class='banner navbar navbar-default navbar-static-top dark-header']//a[.='Features']";
    public lnk_Pricing = "//header[@class='banner navbar navbar-default navbar-static-top dark-header']//a[.='Pricing']";
 
    public dialog_notificationbar ="";

    @action(" click link")
    public async openLink(link: Element){
       // await gondola.waitForElement(this.lnk_WhyGondola);    
       // await gondola.click(this.lnk_WhyGondola);
        await gondola.waitForElement(link);    
        await gondola.click(link);

    }
    @action ("verify notification bar")
    public async verifyNotificationBar(){
       await gondola.waitForElement(this.dialog_notificationbar);
       await gondola.checkControlExist(this.dialog_notificationbar);
    }
    
}
export default new startPage();