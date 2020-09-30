import { access } from "fs";
import { action, gondola, locator, page } from "gondolajs";
import { datatest } from "../../../data/datatest";
import { Account} from "../../../data/Account";
import  downloadPage  from "./downloadPage";



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
    @locator
    public lnkContactUs = "//a[.='Contact Us']";
    @locator
    public lnkHeaderLogIn = "//header[@class='banner navbar navbar-default navbar-static-top dark-header']//a[.='Log In']";
    @locator
    public lnkHeaderSignUp = "//header[@class='banner navbar navbar-default navbar-static-top dark-header']//a[.='Sign Up']";
    @locator
    public lnkHeaderLoguot = "//header[@class='banner navbar navbar-default navbar-static-top dark-header']//a[.='Logout']";
    @locator
    public lnkHeaderAccount = "//header[@class='banner navbar navbar-default navbar-static-top dark-header']//li[@class='account-menu dropdown']";
    @locator
    public contentMenuItem ="//header[@class='banner navbar navbar-default navbar-static-top dark-header']//li[@class='account-menu dropdown']/ul[@class='dropdown-menu']";

    // Notificationbar dialog
    @locator
    public dialogNotificationbar ="//div[@id='notify_active']";
    @locator
    public btCloseNotify ="//button[@id='close_notify_active']";
    @locator
    public btActiveNotify ="//a[contains(.,'Active account')]";


    @action(" check GUI")
    @action("open website Gondola", "Navigate to thank you page")
    public async navigateTo() {
        await gondola.navigate(this._homePageUrl);
        await gondola.maximize();
    }
    public async checkGUI()
    {   
        await gondola.waitForElement(this.lnkDownload,10);
     
        await gondola.checkControlExist(this.lnkDownload);
        await gondola.checkText(this.txtThankyou,datatest.textheader);
        await gondola.checkControlExist(this.txtTitle);
        await gondola.checkControlExist(this.lnkContact);
        await gondola.checkControlExist(this.lnkEmail);
        await gondola.checkControlExist(this.lnkInstallGondola);
        await gondola.checkControlExist(this.lnkUnderstandingGondola);
        await gondola.checkControlExist(this.txtEmailAddress);
        let text =await (await gondola.getText(this.txtContent)).includes(datatest.textEmail);
        gondola.checkEqual(text, true, "match text"+datatest.textEmail);
    }
    
    public async openDownloadPage(){
        await gondola.waitForElement(this.lnkDownload,10);
        await gondola.click(this.lnkDownload);
    }
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
    @action ("active notification bar")
    public async activeNotify(){
       await gondola.waitForElement(this.dialogNotificationbar,10);
       await gondola.checkControlExist(this.btActiveNotify);
       await gondola.click(this.btActiveNotify);
    }
    @action ("check context menu item not existed")
    public async checkMenuItemExistonAccount(value: any){

       await gondola.waitForElement(this.lnkHeaderAccount,10);
       await gondola.click(this.lnkHeaderAccount);
      
        let isMenuExist =  (await gondola.getText(this.contentMenuItem)).includes(value);
        await gondola.checkEqual(isMenuExist, true, "No matches found: " + value);    
    }
    @action ("check context menu item existed")
    public async checkMenuItemNoExistonAccount(value: any){

       await gondola.waitForElement(this.lnkHeaderAccount,10);
       await gondola.click(this.lnkHeaderAccount);
       let isMenuExist =  (await gondola.getText(this.contentMenuItem)).includes(value);
       await gondola.checkEqual(isMenuExist, false, "matches found: " + value); 
   }
   @action ("check displays on header")
   public async checkUsernameonHeader(value:any){
       await gondola.waitForElement(this.lnkHeaderAccount,10);
       let account =  (await gondola.getText(this.contentMenuItem)).includes(value);
       await gondola.checkEqual(account, false, "matches found: " + value);
       await gondola.click(this.lnkHeaderAccount);
       await gondola.click(this.lnkHeaderLoguot);
       await gondola.checkControlExist(this.lnkHeaderLogIn);
       await gondola.checkControlExist(this.lnkHeaderSignUp);
   }
   @action ("get Random account")
   public async getRandomaccount(){
        let count = await Math.floor(Math.random() * 10000) + 1;
        let emailaddress = await datatest.email + count + "@temp.com";
        let firstName = datatest.firstname + count;
        let acc = new Account(firstName, emailaddress);
        return acc;
   }
}
export default new thankyouPage();