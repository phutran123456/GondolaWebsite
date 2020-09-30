import { action, gondola, locator, page } from "gondolajs";
import { downloadPage } from "./downloadPage";

@page
export class thankyouPage {
    constructor() {
        this._homePageUrl = "https://stage1.gondolatest.com/en/welcome-2/";
    }
    _homePageUrl: string;
    @locator
    public lnkDownload ="//a[contains(.,'Download Now')]";
    @locator
    public txtContent ="div.elementor-element-52b4f2b .elementor-text-editor";
    @locator
    public txtThankyou= "//h4[@class='elementor-heading-title elementor-size-default']";
    @locator
    public txtTitle= "//strong[.='Please check your email']";
    @locator
    public txtAccount= "//header[@class='banner navbar navbar-default navbar-static-top dark-header']//li[@class='account-menu dropdown']";
    @locator
    public lnkContact= "//a[contains(.,'Contact Support.')]";
    @locator
    public lnkEmail= "//span[.='gondola@logigear.com']";
    @locator
    public lnkInstallGondola = "//a[.='Installing Gondola']";
    @locator
    public lnkUnderstandingGondola = "//a[.='Understanding Gondola']";
    @locator
    public lnkWhyGondola ="//ul[@id='menu-footer-primary-en']//a[.='Why Gondola?']";
    @locator
    public lnkFeature ="//ul[@id='menu-footer-primary-en']//a[.='Features']";
    @locator
    public txtEmailAddress="//input[@id='field_lggtd']";
    @locator
    public lnkHeaderWhyGondola = "//header[@class='banner navbar navbar-default navbar-static-top dark-header']//a[.='Why Gondola?']";
    @locator
    public lnkHeaderFeatures = "//header[@class='banner navbar navbar-default navbar-static-top dark-header']//a[.='Features']";
    @locator
    public lnkHeaderPricing = "//header[@class='banner navbar navbar-default navbar-static-top dark-header']//a[.='Pricing']";
    public lnkPricing = "//ul[@id='menu-footer-primary-en']//a[.='Pricing']";
    @locator
    public lnkHeaderBlog = "//header[@class='banner navbar navbar-default navbar-static-top dark-header']//li[@class='menu-blog']";
    @locator
    public lnkHeaderAboutUs = "//header[@class='banner navbar navbar-default navbar-static-top dark-header']//a[.='About Us']";
    public lnkContactUs = "//a[.='Contact Us']";
    @locator
    public lnkHeaderLogIn = "//header[@class='banner navbar navbar-default navbar-static-top dark-header']//a[.='Log In']";
    public lnkHeaderAccount = "//header[@class='banner navbar navbar-default navbar-static-top dark-header']//li[@class='account-menu dropdown']";
    public contentMenuItem ="//header[@class='banner navbar navbar-default navbar-static-top dark-header']//li[@class='account-menu dropdown']/ul[@class='dropdown-menu']";

    // Notificationbar dialog
    @locator
    public dialogNotificationbar ="//div[@id='notify_active']";
    @locator
    public btCloseNotify ="//button[@id='close_notify_active']";
    @locator
    public btActiveNotify ="//a[contains(.,'Active account')]";

    // Action Open website Gondola https://stage1.gondolatest.com/en/welcome-2/
    @action("open website Gondola", "Navigate to thank you page")
    public async navigateTo() {
        await gondola.navigate(this._homePageUrl);
        await gondola.maximize();
    }
    // Action Check GUI
    @action(" check GUI")
    public async checkGUI(textheader:string)
    {   
        await gondola.waitForElement(this.lnkDownload,10);
        await gondola.checkControlExist(this.lnkDownload);
        await gondola.checkText(this.txtThankyou,textheader);
        await gondola.checkControlExist(this.txtTitle);
        await gondola.checkControlExist(this.lnkContact);
        await gondola.checkControlExist(this.lnkEmail);
        await gondola.checkControlExist(this.lnkInstallGondola);
        await gondola.checkControlExist(this.lnkUnderstandingGondola);
        await gondola.checkControlExist(this.txtEmailAddress);
    }
    public async openDownloadPage(){
        await gondola.waitForElement(this.lnkDownload,10);
        await gondola.click(this.lnkDownload);
    }
    //Action Click link
    @action(" click link")
    public async openLink(link:any){
       // await gondola.waitForElement(this.lnk_WhyGondola);    
       // await gondola.click(this.lnk_WhyGondola);
        await gondola.waitForElement(link,10);    
        await gondola.click(link);
    }
    //Action verify notification bar
    @action ("verify notification bar")
    public async verifyNotificationBar(){
       await gondola.waitForElement(this.dialogNotificationbar,5);
       await gondola.checkControlExist(this.dialogNotificationbar);
    }
    //Action close notification bar
    @action ("close notification bar")
    public async closeNotificationBar(){
       await gondola.waitForElement(this.dialogNotificationbar,10);
       await gondola.checkControlExist(this.btCloseNotify);
       await gondola.click(this.btCloseNotify);
    }
    //Action active notification bar
    @action ("active notification bar")
    public async activeNotify(){
       await gondola.waitForElement(this.dialogNotificationbar,10);
       await gondola.checkControlExist(this.btActiveNotify);
       await gondola.click(this.btActiveNotify);
    }
    //Action check context menu item not existed
    @action ("check context menu item not existed")
    public async checkMenuItemExistonAccount(value: any){
       await gondola.waitForElement(this.lnkHeaderAccount,10);
       await gondola.click(this.lnkHeaderAccount);
       let isMenuExist =  (await gondola.getText(this.contentMenuItem)).includes(value);
       await gondola.checkEqual(isMenuExist, true, "No matches found: " + value);    
    }
    //Action check context menu item existed
    @action ("check context menu item existed")
    public async checkMenuItemNoExistonAccount(value: any){
       await gondola.waitForElement(this.lnkHeaderAccount,10);
       await gondola.click(this.lnkHeaderAccount);
       let isMenuExist =  (await gondola.getText(this.contentMenuItem)).includes(value);
       await gondola.checkEqual(isMenuExist, false, "matches found: " + value); 
   }
}
export default new thankyouPage();