import { access } from "fs";
import { action, gondola, locator, page } from "gondolajs";
import { datatest } from "../../../data/datatest";
import { Account } from "../../../data/Account";
import downloadPage from "./welcomePage";



@page
export class thankyouPage {
   constructor() {
      this._homePageUrl = "https://stage1.gondolatest.com/en/thankyou/";
   }
   _homePageUrl: string;
   @locator
   public lnkDownload = "//a[contains(.,'Download Now')]";
   @locator
   public txtContent = "div.elementor-element-52b4f2b .elementor-text-editor";
   @locator
   public txtThankyou = "//h4[@class='elementor-heading-title elementor-size-default']";
   @locator
   public txtTitle = "//strong[.='Please check your email']";
   @locator
   public txtAccount = "//header[@class='banner navbar navbar-default navbar-static-top dark-header']//li[@class='account-menu dropdown']";
   @locator
   public lnkContact = "//a[contains(.,'Contact Support.')]";
   @locator
   public lnkEmail = "//span[.='gondola@logigear.com']";
   @locator
   public lnkInstallGondola = "//a[.='Installing Gondola']";
   @locator
   public lnkUnderstandingGondola = "//a[.='Understanding Gondola']";
   @locator
   public lnkWhyGondola = "//ul[@id='menu-footer-primary-en']//a[.='Why Gondola?']";
   @locator
   public lnkFeature = "//ul[@id='menu-footer-primary-en']//a[.='Features']";
   @locator
   public txtEmailAddress = "//input[@id='field_lggtd']";
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
   public contentMenuItem = "//header[@class='banner navbar navbar-default navbar-static-top dark-header']//li[@class='account-menu dropdown']/ul[@class='dropdown-menu']";
   @locator
   public lnkContactSupport = "//a[contains(.,'Contact Support')]";
   // Notificationbar dialog
   @locator
   public dialogNotificationbar = "//div[@id='notify_active']";
   @locator
   public btCloseNotify = "//button[@id='close_notify_active']";
   @locator
   public btActiveNotify = "//a[contains(.,'Activate account')]";



   @action("open website Gondola", "Navigate to thank you page")
   public async navigateTo() {
      await gondola.navigate(this._homePageUrl);
      await gondola.maximize();
   }
   @action("check GUI")
   public async checkGUI() {
      await gondola.waitForElement(this.lnkDownload, 10);

      await gondola.checkControlExist(this.lnkDownload);
      await gondola.checkText(this.txtThankyou, datatest.textheader);
      await gondola.checkControlExist(this.txtTitle);
      await gondola.checkControlExist(this.lnkContact);
      await gondola.checkControlExist(this.lnkEmail);
      await gondola.checkControlExist(this.lnkInstallGondola);
      await gondola.checkControlExist(this.lnkUnderstandingGondola);
      await gondola.checkControlExist(this.txtEmailAddress);
      let text = await (await gondola.getText(this.txtContent)).includes(datatest.textEmail);
      gondola.checkEqual(text, true, "match text" + datatest.textEmail);
   }

   @action(" click link")
   public async openLink(link: any) {
      await gondola.waitForClickable(link, 60);
      await gondola.click(link);

   }
   @action("verify notification bar")
   public async verifyNotificationBar() {
      await gondola.waitForElement(this.dialogNotificationbar, 10);
      await gondola.checkControlExist(this.dialogNotificationbar);
   }
   @action("verify notification bar is not existed")
   public async verifyNotificationBarnonExisted() {
      await gondola.checkControlNotExist("Active account");
   }
   @action("close notification bar")
   public async closeNotificationBar() {
      await gondola.waitForClickable(this.dialogNotificationbar, 30);
      await gondola.checkControlExist(this.btCloseNotify);
      await gondola.click(this.btCloseNotify);
   }
   @action("active notification bar")
   public async activeNotify() {
      await gondola.waitForClickable(this.dialogNotificationbar, 10);
      await gondola.checkControlExist(this.btActiveNotify);
      await gondola.click(this.btActiveNotify);
   }
   @action("check context menu item not existed")
   public async checkMenuItemExistonAccount(value: any) {

      await gondola.waitForEnabled(this.lnkHeaderAccount, 10);
      await gondola.click(this.lnkHeaderAccount);
      let isMenuExist = (await gondola.getText(this.contentMenuItem)).includes(value);
      await gondola.checkEqual(isMenuExist, true, "No matches found: " + value);
   }
   @action("check context menu item existed")
   public async checkMenuItemNoExistonAccount(value: any) {

      await gondola.waitForEnabled(this.lnkHeaderAccount, 10);
      await gondola.click(this.lnkHeaderAccount);
      let isMenuExist = (await gondola.getText(this.contentMenuItem)).includes(value);
      await gondola.checkEqual(isMenuExist, false, "matches found: " + value);
   }
   @action("check displays on header")
   public async checkUsernameonHeader(value: any) {
      await gondola.waitForEnabled(this.lnkHeaderAccount, 10);
      let account = (await gondola.getText(this.contentMenuItem)).includes(value);
      await gondola.checkEqual(account, false, "matches found: " + value);
      await gondola.waitForClickable(this.lnkHeaderAccount, 10);
      await gondola.moveMouse(this.lnkHeaderAccount, {x:8, y:5});
      //await gondola.click(this.lnkHeaderAccount);
      await gondola.waitForClickable(this.lnkHeaderLoguot, 10);
      await gondola.checkControlExist(this.lnkHeaderLoguot);

      await gondola.click(this.lnkHeaderLoguot);
      await gondola.checkControlExist(this.lnkHeaderLogIn);
      await gondola.checkControlExist(this.lnkHeaderSignUp);
   }

}
export default new thankyouPage();