import { action, gondola, locator, page,KeyCode } from "gondolajs";
@page
export class downloadPage {
   constructor() {
      this._downloadPageUrl = "https://stage1.testarchitect.com/new-free-download";
   }
   _downloadPageUrl: string;

    @locator
    public txtName ="//input[@id='inputFirstName']";
    @locator
    public txtErrorMessageName="//div[@class='help-block with-errors erorr-chkLicense firstName'/label[@class='error']";
    @locator
    public txtWorkEmail ="//input[@id='inputEmail']";
    @locator
    public txtErrorMessageEmail="//div[@class='help-block with-errors erorr-chkLicense email']/label[@class='error']";
    @locator
    public cmbTestingNeeds ="//select[@id='selectTestingNeeds']";
    @locator
    public chbSelectAll ="//label[@class='checkbox']/input[@value='multiselect-all']";
    @locator
    public chbSelectWebTesting ="//label[@class='checkbox']/input[@value='Web Testing']";
    @locator
    public chbSelectMobileTesting ="//label[@class='checkbox']/input[@value='Mobile Testing']";
    @locator
    public txtErrorMessageTestingNeeds="//div[@class='help-block with-errors erorr-chkLicense testingNeed']/label[@class='error']";
    @locator
    public txtPhone ="//input[@id='inputPhone']";
    @locator
    public txtErrorMessagePhone="";
    @locator
    public txtComment="#inputMessage";
    @locator
    public chbRecieveNews="#Subscribe";
    @locator
    public chbAccept="#chkLicense";
    @locator
    public lnkLicenseAgreement= "//strong[@id='license_reading']/a[@href='/legal/eula']";
    @locator
    public lnkPrivacyPolicy= "//strong[@id='license_reading']/a[@href='/legal/privacy-policy']";
    @locator
    public bt_Submit= "#sbutton";

    @action("open website Gondola", "Navigate to home page")
    public async navigateTo() {
        await gondola.navigate(this._downloadPageUrl);
        await gondola.maximize();
    }
    @action ("input invalid format phone on Download page")
    public async invalidFormatPhone(string:any, message:any){
       await gondola.waitForClickable(this.txtPhone,30);
       await gondola.enter(this.txtPhone,string);
       //await gondola.pressKey("Enter");
       let text = await (await gondola.getText(this.txtErrorMessagePhone)).includes(message);
       gondola.checkEqual(text, true, "match text" + message);
       
    }
    @action ("input invalid format email on Download page")
    public async invalidFormatEmail(string:any, message:any){
       await gondola.waitForClickable(this.txtWorkEmail,30);
       await gondola.enter(this.txtWorkEmail,string);
      // await gondola.pressKey("Enter");
       let text = await (await gondola.getText(this.txtErrorMessageEmail)).includes(message);
       gondola.checkEqual(text, true, "match text" + message);
       
    }
    @action ("input invalid format email on Download page")
    public async invalidFormatName(string:any, message:any){
       await gondola.waitForClickable(this.txtName,30);
       await gondola.enter(this.txtName,string);
      // await gondola.pressKey("Enter");
       let text = await (await gondola.getText(this.txtErrorMessageName)).includes(message);
       gondola.checkEqual(text, true, "match text" + message);
       
    }
    @action ("input invalid format email on Download page")
    public async invalidFormatTestingNeeds(item:any,message:any){
       await gondola.waitForClickable(this.txtName,30);
       await gondola.select(this.cmbTestingNeeds,item);
      // await gondola.pressKey("Enter");
       let text = await (await gondola.getText(this.txtErrorMessageTestingNeeds)).includes(message);
       gondola.checkEqual(text, true, "match text" + message);
       
    }
    @action ("input invalid format on Download page")
    public async invalidFormat(control:any,string:any,error:any,message:any){
       await gondola.waitForClickable(control,30);
       await gondola.enter(control,string);
       //await gondola.pressKey("Enter");
       let text = await (await gondola.getText(error)).includes(message);
       gondola.checkEqual(text, true, "match text" + message);
       
    }
}    
export default new downloadPage();