import { action, gondola, locator, page } from "@logigear/gondola";
import { datatest } from "../../../data/Gondola/datatest";
import { Account } from "../../../data/Gondola/Account";
@page
export class thankyouPage {
   
  
   @locator
   public txtContent = "//div[contains(text(),'Thank you for your registration!')]";
   @locator
   public txtTitle = "//span[contains(text(),'Please check your email')]";
   @locator
   public linkSupport = "//a[contains(text(),'Contact Support')]";
   @locator
   public linkPhone = "//a[contains(text(),'+1(800) 322-0333')]";
   @locator
   public linkSale = "//a[contains(text(),'sale@logigear.com')]";
   @locator
   public lnkheader="//li[@class='mb2ctm-item mb2ctm-item-825 mb2ctm-dropdow']";
   @locator
   public lnkLogin =this.lnkheader+"/a[contains(.,'Login')]";
   @locator
   public contentMenuItem = this.lnkheader+"//ul[@class='mb2ctm-child-list1 mb2ctm-noparent-list']";
   @locator
   public lnkAccount = this.lnkheader+"/a[@class='sf-with-ul']";
   @locator
   public lnkManageProfile = "//a[contains(.,'Manage My Profile')]";
   @locator
   public lnkChangePassword = "//a[contains(.,'Change Password')]";
   @locator
   public lnkLogout = this.lnkheader+"//a[contains(.,'Logout')]";

    //Product
    @locator
    public header="//div[@class='mod-block clearfix ta-header-main-menu']";
    @locator
    public listHeader="//ul[@class='mb2ctm-list mb2ctm-clr']";
    @locator
    public listProduct="//ul[@class='mb2ctm-child-list2']";
    @locator
    public menu =this.header+this.listHeader;
    @locator
    public Product ="//a[contains(.,'Products')]";
    @locator
    public menuProductWhyTestArchitect ="//a[contains(.,'Why Testarchitect')]";
    @locator
    public menuProductFeatureSupportPlatforms ="//a[contains(.,'Features & Supported Platforms')]";
    @locator
    public menuProductTrainingCoaching ="//a[contains(.,'Training & Coaching')]";
    @locator
    public menuProductPOMBuilder =this.menu+"//a[contains(.,'POM Builder')]";
    @locator
    public menuProductTestArchitectGondola =this.menu+"//a[contains(.,'TestArchitect Gondola')]";
    //Resources
    
    @locator
    public listResources="//ul[@class='mb2ctm-child-list1 mb2ctm-noparent-list']";
    //@locator
    //public menuResources=this.menu;
    @locator
    public Resources ="//a[contains(.,'Resources')]";
    @locator
    public menuResourcesDataSheets ="//a[contains(.,'Data Sheets')]";
    //@locator
    //public menuResourcesCaseStudios =this.menu+"//a[contains(.,'Case Studies')]";
    @locator
    public menuResourcesInforGraphics ="//a[contains(.,'INFOGRAPHICS')]";
    //Support
    @locator
    public listSupport="//li[@class='mb2ctm-item mb2ctm-item-822 mb2ctm-stparent mb2ctm-isparent mb2ctm-mega']";
    //@locator
   // public menuSupport =this.header+this.listHeader+this.listSupport;
    @locator
    public Support ="//li[@class='mb2ctm-item mb2ctm-item-822 mb2ctm-stparent mb2ctm-isparent mb2ctm-mega']//a[contains(.,'Support')]";
    //@locator
    //public menuSupportGetStart =this.menu+"//a[contains(.,'Get Started')]";
    @locator
    public menuSupportBestPractices ="//a[contains(.,'Best Practices')]";
    @locator
    public menuSupportReleaseNotes ="//a[contains(.,'Release Notes')]";
    @locator
    public menuSupportSubmitTicket ="//a[contains(.,'Submit a Ticket')]";

    //Company
    @locator
    public listCompany="//li[@class='mb2ctm-item mb2ctm-item-318 mb2ctm-stparent mb2ctm-isparent mb2ctm-mega mb2ctm-hover']";
    @locator
    public Company ="//a[contains(.,'Company')]";
    @locator
    public menuCompanyAboutLogigear ="//a[contains(.,'About LogiGear')]";
    @locator
    public menuCompanyRequestDemo ="//a[contains(.,'Request A Demo')]";
    @locator
    public menuCompanyAwards ="//a[contains(.,'Awards')]";
    
   // Notificationbar dialog
   @locator
   public dialogNotificationbar = "#activation_warning";
   @locator
   public btCloseNotify = "//div[@id='activation_warning']//button[@class='close_notify_active']";
   @locator
   public btActiveNotify = "//a[contains(.,'Activate account')]";
   
   
   @action("check displays on header")
   public async checkUsernameonHeader(value: any) {
      
      await gondola.waitForEnabled(this.lnkAccount, 10);
      let account = (await gondola.getText(this.lnkAccount)).includes(value);
      await gondola.checkEqual(account, false, "matches found: " + value);
      await gondola.waitForClickable(this.lnkAccount, 10);
      await gondola.moveMouse(this.lnkAccount, {x:8, y:5});
      await gondola.wait(3);
      await gondola.waitForClickable(this.lnkManageProfile, 10);
      await gondola.checkControlExist(this.lnkManageProfile);
      await gondola.checkControlExist(this.lnkChangePassword);
      await gondola.checkControlExist(this.lnkLogout);

      await gondola.click(this.lnkLogout);
      await gondola.checkControlExist(this.lnkLogin);
     
   }
   @action("check Items on ThankYou Page ")
   public async checkItemThankYouPage(){
       await gondola.waitForClickable(this.txtContent,30);
       await gondola.checkControlExist(this.txtContent);
       await gondola.checkControlExist(this.txtTitle);
       await gondola.checkControlExist(this.linkSupport);
       await gondola.checkControlExist(this.linkSale);
       await gondola.checkControlExist(this.linkPhone);
      
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
      await gondola.checkControlNotExist(this.dialogNotificationbar);
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

      await gondola.waitForEnabled(this.lnkAccount, 70);
      await gondola.moveMouse(this.lnkAccount, {x:8, y:5});
      let isMenuExist = (await gondola.getText(this.contentMenuItem)).includes(value);
      await gondola.checkEqual(isMenuExist, true, "No matches found: " + value);
   }
   @action("check context menu item existed")
   public async checkMenuItemNoExistonAccount(value: any) {

      await gondola.waitForEnabled(this.lnkAccount, 10);
      await gondola.click(this.lnkAccount);
      let isMenuExist = (await gondola.getText(this.contentMenuItem)).includes(value);
      await gondola.checkEqual(isMenuExist, false, "matches found: " + value);
   }
}
export default new thankyouPage();