import { action, gondola, locator, page,KeyCode } from "@logigear/gondola";

@page
export class HomeTAPage {
   constructor() {
      this._homePageUrl = "https://stage1.testarchitect.com";
   }
   _homePageUrl: string;
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
    public Product =this.header+this.listHeader+"//a[contains(.,'Products')]";
    @locator
    public menuProductWhyTestArchitect =this.menu+"//a[contains(.,'Why Testarchitect')]";
    @locator
    public menuProductFeatureSupportPlatforms =this.menu+"//a[contains(.,'Features & Supported Platforms')]";
    @locator
    public menuProductTrainingCoaching =this.menu+"//a[contains(.,'Training & Coaching')]";
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
    public Resources =this.menu+"//a[contains(.,'Resources')]";
    @locator
    public menuResourcesDataSheets =this.menu+"//a[contains(.,'Data Sheets')]";
    @locator
    public menuResourcesCaseStudios =this.menu+"//a[contains(.,'Case Studies')]";
    @locator
    public menuResourcesInforGraphics =this.menu+"//a[contains(.,'InforGraphics')]";
    //Support
    @locator
    public listSupport="//li[@class='mb2ctm-item mb2ctm-item-822 mb2ctm-stparent mb2ctm-isparent mb2ctm-mega']";
    //@locator
   // public menuSupport =this.header+this.listHeader+this.listSupport;
    @locator
    public Support =this.menu+this.listSupport+"//a[contains(.,'Support')]";
    @locator
    public menuSupportGetStart =this.menu+"//a[contains(.,'Get Started')]";
    @locator
    public menuSupportBestPractices =this.menu+"//a[contains(.,'Best Practices')]";
    @locator
    public menuSupportReleaseNotes =this.menu+"//a[contains(.,'Release Notes')]";
    @locator
    public menuSupportSubmitTicket =this.menu+"//a[contains(.,'Submit a Ticket')]";

    //Company
    @locator
    public listCompany="//li[@class='mb2ctm-item mb2ctm-item-318 mb2ctm-stparent mb2ctm-isparent mb2ctm-mega mb2ctm-hover']";
    @locator
    public Company =this.menu+this.listCompany+"//a[contains(.,'Company')]";
    @locator
    public menuCompanyAboutLogigear =this.menu+"//a[contains(.,'About LogiGear')]";
    @locator
    public menuCompanyRequestDemo =this.menu+"//a[contains(.,'Request A Demo')]";
    @locator
    public menuCompanyAwards =this.menu+"//a[contains(.,'Awards')]";
    @locator
    public menuLogin ="//a[contains(.,'Login')]";
    //@locator
    //public menuContact ="";
    @locator
    public menuFreeDownload ="//a[contains(.,'Free Download')]";
   
    //account
    @locator
   public lnkheader="//ul[@class='mb2ctm-list mb2ctm-clr sf-js-enabled']";
   @locator
   public lnkLogin =this.lnkheader+"/a[contains(.,'Login')]";
   @locator
   public contentMenuItem = this.lnkheader+"//ul[@class='mb2ctm-child-list1 mb2ctm-noparent-list']";
   @locator
   public lnkAccount = "//li[@class='mb2ctm-item mb2ctm-item-825 mb2ctm-dropdow']/a[@class='sf-with-ul']";
   
   @locator
   public lnkManageProfile = "//a[contains(.,'Manage My Profile')]";
   @locator
   public lnkChangePassword = this.lnkheader+"//a[contains(.,'Change Password')]";
   @locator
   public lnkLogout = this.lnkheader+"//a[contains(.,'Logout')]";

   // Notificationbar dialog
   @locator
   public dialogNotificationbar = "#activation_warning";
   @locator
   public btCloseNotify = "//div[@id='activation_warning']//button[@class='close_notify_active']";
   @locator
   public btActiveNotify = "//a[contains(.,'Activate account')]";
   


   @action("open website TA", "Navigate to home page")
    public async navigateTo() {
        await gondola.navigate(this._homePageUrl);
        await gondola.maximize();
        
    }
    @action(" click on control")
   public async clickorOpenLink(control: any) {
      await gondola.waitForClickable(control, 60);
      await gondola.click(control);
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
export default new HomeTAPage();