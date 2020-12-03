import { action, gondola, locator, page,KeyCode } from "gondolajs";
import LicenseAgreementPage from "../../pages/testarchitect_site/LicenseAgreementPage";
import PrivacyPolicyPage from "../../pages/testarchitect_site/PrivacyPolicyPage";
@page
export class downloadPage {
   constructor() {
      this._downloadPageUrl = "https://stage1.testarchitect.com/new-free-download";
   }
   _downloadPageUrl: string;

    @locator
    public txtFirstName ="//input[@id='inputFirstName']";
    @locator
    public messageFirstName="//div[@class='help-block with-errors erorr-chkLicense firstName']";
    @locator
    public errormessage="/label[@class='error']";
    @locator
    public Okmessage="/label[@class='error valid']";
    @locator
    public txtErrorMessageFirstName=this.messageFirstName+this.errormessage;
    @locator
    public txtOKMessageFisrtName=this.messageFirstName+this.Okmessage;
    @locator
    public txtLastName ="//input[@id='inputLastName']";
    @locator
    public messageLastName="//div[@class='help-block with-errors erorr-chkLicense lastName']";
    @locator
    public txtErrorMessageLastName=this.messageLastName+this.errormessage;
    @locator
    public txtOKMessageLastName=this.messageLastName+this.Okmessage;
    @locator
    public txtWorkEmail ="//input[@id='inputEmail']";
    @locator
    public messageEmail="//div[@class='help-block with-errors erorr-chkLicense email']";
    @locator
    public txtErrorMessageEmail=this.messageEmail+this.errormessage;
    @locator
    public txtOKMessageEmail=this.messageEmail+this.Okmessage;
    @locator
    public cmbTestingNeeds ="//select[@id='selectTestingNeeds']";
    @locator
    public buttonTestingNeeds ="//button[@class='multiselect dropdown-toggle btn btn-default']";
    @locator
    public containerSelectMobileTesting ="//ul[@class='multiselect-container dropdown-menu']";
    @locator
    public chb ="//label[@class='checkbox']";
    @locator
    public chbSelectAll =this.chb+"/input[@value='multiselect-all']";
    @locator
    public chbSelectWebTesting =this.chb+"/input[@value='Web Testing']";
    @locator
    public chbSelectMobileTesting =this.chb+"/input[@value='Mobile Testing']";
    @locator
    public messageTestingNeeds="//div[@class='help-block with-errors erorr-chkLicense testingNeed']";
    @locator
    public txtErrorMessageTestingNeeds=this.messageTestingNeeds+this.errormessage;
    @locator
    public txtOKMessageTestingNeeds=this.messageTestingNeeds+this.Okmessage;
    @locator
    public txtPhone ="//input[@id='inputPhone']";
    @locator
    public messagePhone="//div[@class='help-block with-errors erorr-chkLicense phone']";
    @locator
    public txtOKMessagePhone=this.messagePhone+this.Okmessage;
    @locator
    public txtErrorMessagePhone=this.messagePhone+this.errormessage;
    @locator
    public txtComment="#inputMessage";
    @locator
    public chbRecieveNews="#Subscribe";
    @locator
    public chbAccept="#chkLicense";
    @locator
    public messageAccept="//div[@class='help-block with-errors erorr-chkLicense chkLicense']";
    @locator
    public txtErrorMessageAccept=this.messageAccept+this.errormessage;
    @locator
    public txtOKMessageAccept=this.messageAccept+this.Okmessage;
    @locator
    public licenseAgreement= "//strong[@id='license_reading']";
    @locator
    public lnkLicenseAgreement= this.licenseAgreement+"/a[@href='/legal/eula']";
    @locator
    public lnkPrivacyPolicy= this.licenseAgreement+"/a[@href='/legal/privacy-policy']";
    @locator
    public bt_Submit= "#sbutton";

    @action("open website Gondola", "Navigate to home page")
    public async navigateTo() {
        await gondola.navigate(this._downloadPageUrl);
        await gondola.maximize();
    }
    @action(" click on control")
   public async clickorOpenLink(control: any) {
      await gondola.waitForClickable(control, 60);
      await gondola.click(control);
   }
    @action ("input invalid format phone on Download page")
    public async invalidFormatPhone(string:any, message:any){
       await gondola.waitForClickable(this.txtPhone,30);
       await gondola.enter(this.txtPhone,string);
       await gondola.pressKey("Enter");
       let text = await (await gondola.getText(this.txtErrorMessagePhone)).includes(message);
       gondola.checkEqual(text, true, "match text" + message);
       
    }
    @action ("input invalid format email on Download page")
    public async invalidFormatEmail(string:any, message:any){
       await gondola.waitForClickable(this.txtWorkEmail,30);
       await gondola.enter(this.txtWorkEmail,string);
       await gondola.pressKey("Enter");
       let text = await (await gondola.getText(this.txtErrorMessageEmail)).includes(message);
       gondola.checkEqual(text, true, "match text" + message);
       
    }
    @action ("input invalid format email on Download page")
    public async invalidFormatFirstName(string:any, message:any){
       await gondola.waitForClickable(this.txtFirstName,30);
       await gondola.enter(this.txtFirstName,string);
       await gondola.pressKey("Enter");
       let text = await (await gondola.getText(this.txtErrorMessageFirstName)).includes(message);
       gondola.checkEqual(text, true, "match text" + message);
       
    }
    @action ("input invalid format email on Download page")
    public async invalidFormatLastName(string:any, message:any){
       await gondola.waitForClickable(this.txtLastName,30);
       await gondola.enter(this.txtLastName,string);
       await gondola.pressKey("Enter");
       let text = await (await gondola.getText(this.txtErrorMessageLastName)).includes(message);
       gondola.checkEqual(text, true, "match text" + message);
       
    }
    @action ("select item Testing Need on Download page")
    public async checkItemonTestingNeeds(item:any){
       await gondola.waitForClickable(this.buttonTestingNeeds,30);
       await gondola.click(this.buttonTestingNeeds);
      // await gondola.waitForClickable(this.containerSelectMobileTesting,30);
      await gondola.waitForClickable(item,30);
      await gondola.click(item);
    }
    @action ("unselect item Testing Need on Download page")
    public async unselectItemonTestingNeeds(item:any, value:any){
       await this.checkItemonTestingNeeds(item);
       let text = await (await gondola.getText(this.buttonTestingNeeds)).includes(value);
       gondola.checkEqual(text, false, "match text" + value);
       
    }
    @action ("select item Testing Need on Download page")
    public async selectItemonTestingNeeds(item:any, value:any){
      await this.checkItemonTestingNeeds(item);
       let text = await (await gondola.getText(this.buttonTestingNeeds)).includes(value);
       gondola.checkEqual(text, true, "match text" + value);
       
    }
    @action ("check error message displayed below control on Download page")
    public async checkErrorMessage(control:any,message:any){
         let text = await (await gondola.getText(control)).includes(message);
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
    @action ("check valid control displayed below control on Download page")
    public async checkValueonField(control:any, value:any){
      await gondola.waitForClickable(control,30);
      let text = await (await gondola.get(control)).includes(value);
      gondola.checkEqual(text, true, "match text" + value);
    }
    @action ("check valid control displayed below control on Download page")
    public async checkValidMessage(control:any){
      await gondola.waitForClickable(control,30);
      await gondola.checkControlExist(control);
    }
    @action ("input valid format on Download page")
    public async enterValidFormat(control:any,string:any,invalidError:any){
       await gondola.waitForClickable(control,30);
       await gondola.enter(control,string);
       await gondola.pressKey(KeyCode.Enter);
       await this.checkValidMessage(invalidError);  
       
    }
    @action ("input valid format on Download page")
    public async enterTextonCommentField(string:any){
       await gondola.waitForClickable(this.txtComment,30);
       await gondola.enter(this.txtComment,string);
       await gondola.pressKey(KeyCode.Enter); 
    }
    @action ("open link on Download page")
    public async openLinkonAgree(title:any){
      await this.clickorOpenLink(this.lnkLicenseAgreement);
      await gondola.switchBrowserTab("next");
      await gondola.waitForClickable(title,30);
      await gondola.checkControlExist(title);
      await gondola.closeCurrentTab();
    }

}    
export default new downloadPage();