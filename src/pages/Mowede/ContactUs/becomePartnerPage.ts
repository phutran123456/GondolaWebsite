import { action, gondola, locator, page, KeyCode } from "@logigear/gondola";
import { name } from "../../../data/TestArchitect/name";
import { email } from "../../../data/TestArchitect/email";
import { comment } from "../../../data/TestArchitect/comment";
import { phone } from "../../../data/Mowede/phone";
import { valueItem } from "../../../data/Mowede/valueItem";

@page
export class becomePartnerPage {
    constructor() {
        this._BecomePartnerPageUrl = "https://stage1.mowede.com/contact-us/become-a-partner";
    }
    _BecomePartnerPageUrl: string;
    @locator
    public labelErrorInput="/following-sibling::label[@class='error']";
    @locator
    public txtFirstName="//input[@name='data[firstName]']";
    @locator
    public txtErrorFirstName=this.txtFirstName+this.labelErrorInput;
    @locator
    public txtLastName="//input[@name='data[lastName]']";
    @locator
    public txtErrorLastName=this.txtLastName+this.labelErrorInput;
    @locator
    public txtEmail="//input[@name='data[email]']";
    @locator
    public txtErrorEmail = this.txtEmail+this.labelErrorInput;
    @locator
    public txtPhone="//input[@name='data[phone]']";
    @locator
    public txtErrorPhone = this.txtPhone+this.labelErrorInput;
    @locator
    public btFlag="//div[@class='iti iti--allow-dropdown']//div[@class='iti__selected-flag']";
    @locator
    public listFlagPhone="#iti-0__country-listbox";
    @locator
    public cbxFlagJPPhone="//li[@id='iti-0__item-jp']/span[contains(., 'Japan')]";
    @locator
    public cbxFlagVNPhone="//li[@id='iti-0__item-vn']/span[contains(., 'Vietnam')]";
    @locator
    public cbxFlagUSPhone="//li[@id='iti-0__item-us']/span[contains(., 'United States')]";
    @locator
    public cmbSelectService="//select[@id='multipleTest']";
    @locator
    public txtErrorSelectService= "//label[@id='select-check-box-error']";
    @locator
    public buttonSelectService ="//button[@class='multiselect dropdown-toggle btn btn-default']";
    @locator
    public containerSelectService ="//ul[@class='multiselect-container dropdown-menu']";
    @locator
    public chb ="//label[@class='checkbox']";
    @locator
    public chbSelectAll =this.chb+"/input[@value='multiselect-all']";
    @locator
    public chbSelectProduct =this.chb+"/input[@value='0']";
    @locator
    public chbSelectApplication =this.chb+"/input[@value='2']";
    @locator
    public txtComment="//textarea[@name='data[message_question]']";
    @locator
    public txtErrorComment = this.txtComment+this.labelErrorInput;
    @locator
    public btSendMessage="//button[contains(.,'SEND MESSAGE')]";
    
    @action("open become a Partner form", "Navigate to become a Partner page")
    public async navigateTo() {
        await gondola.navigate(this._BecomePartnerPageUrl);
        await gondola.maximize();
       
    }
    @action(" check GUI")
    public async checkGUI(){
       
        await gondola.waitForElement(this.txtFirstName,30);
       // let isContentExist =  (await gondola.getText(this.txtContent)).includes(value);
        //await gondola.checkEqual(isContentExist, true, "matches found: " + value); 
        await gondola.checkControlExist(this.txtFirstName);
        await gondola.checkControlExist(this.txtLastName);
        await gondola.checkControlExist(this.txtEmail);
        await gondola.checkControlExist(this.txtPhone);
        await gondola.checkControlExist(this.cmbSelectService);
        await gondola.checkControlExist(this.txtComment);
        await gondola.checkControlExist(this.btSendMessage);        
    }

    @action(" register Partner")
    public async registerPartner() {
      await gondola.waitForElement(this.txtFirstName,30);
      await this.enterValidFormat(this.txtFirstName,name.validFirstName);
      await gondola.checkControlNotExist(this.txtErrorFirstName);
      await this.enterValidFormat(this.txtLastName,name.validLastName);
      await gondola.checkControlNotExist(this.txtErrorLastName);
      await this.enterValidFormat(this.txtEmail,email.validEmail);
      await gondola.checkControlNotExist(this.txtErrorEmail);
      await this.inputPhonewithItemPlag(this.cbxFlagJPPhone,phone.CodeJP,phone.PhoneJP);
      await gondola.checkControlNotExist(this.txtErrorPhone);
      await this.selectItemonSelectService(this.chbSelectAll,valueItem.ItemAll);
      await this.clickorOpenLink(this.txtFirstName);
      await this.enterValidFormat(this.txtComment,comment.line1);
      await gondola.checkControlNotExist(this.txtErrorComment);
      await this.clickorOpenLink(this.btSendMessage);
    }
    @action(" click on control")
    public async clickorOpenLink(control: any) {
       await gondola.waitForClickable(control, 60);
       await gondola.click(control);
    }
   
    @action ("check error message displayed below control on Download page")
    public async checkErrorMessage(control:any,message:any){
         let text = await (await gondola.getText(control)).includes(message);
       gondola.checkEqual(text, true, "match text" + message);   
    }
    @action(" enter value on input control")
    public async checkInvalidEmailFormat(email: string, error:string ){

        await gondola.waitForElement(this.txtEmail,30);
        await gondola.enter(this.txtEmail,email);
        await gondola.pressKey(KeyCode.Enter);
        await this.checkErrorMessage(this.txtErrorEmail,error);
        
    }
    @action ("input valid format on page")
    public async enterValidFormat(control:any,string:any){

       await gondola.wait(3);
       await gondola.waitForClickable(control,30);
       await gondola.enter(control,string);
       await gondola.pressKey(KeyCode.Enter);  
      

    }
    
    @action ("check valid control displayed on control")
    public async checkValueNotSpaceonField(control:any, value:any){
      await gondola.waitForClickable(control,30);
      let text = await gondola.get(control);
      await gondola.checkEqual(text,value.trim());
    }
    @action ("input valid format on page")
    public async enterTextonCommentField(string:any){
       await gondola.waitForClickable(this.txtComment,30);
       await gondola.enter(this.txtComment,string);
       await gondola.pressKey(KeyCode.Enter); 
    }
    @action ("check valid control displayed below control on page")
    public async checkValueonField(control:any, value:any){
      await gondola.waitForClickable(control,30);
      let text = await (await gondola.get(control)).includes(value);
      gondola.checkEqual(text, true, "match text" + value);
    }
    @action ("input invalid format email on Download page")
    public async invalidFormatName(control:any,string:any, message:any, content:any){
       await gondola.wait(3);
       await gondola.waitForClickable(control,30);
       await gondola.enter(control,string);
       await gondola.pressKey(KeyCode.Enter);
       let text = await (await gondola.getText(message)).includes(content);
       gondola.checkEqual(text, true, "match text" + content);
       
    }
    @action ("input invalid format phone on Download page")
    public async invalidFormatPhone(string:any, message:any){
       await gondola.waitForClickable(this.txtPhone,30);
       await gondola.enter(this.txtPhone,string);
       await gondola.pressKey(KeyCode.Enter);
       let text = await (await gondola.getText(this.txtErrorPhone)).includes(message);
       gondola.checkEqual(text, true, "match text" + message);
       
    }
    @action ("select item Select Services on Download page")
    public async checkItemonSelectService(item:any){
       if (!(await gondola.doesControlExist(this.containerSelectService))) {
         await gondola.waitForClickable(this.buttonSelectService,30);
         await gondola.click(this.buttonSelectService);
       }
      // await gondola.waitForClickable(this.containerSelectMobileTesting,30);
      await gondola.waitForClickable(item,30);
      await gondola.click(item);
    }
    @action ("select item Select Services on Download page")
    public async selectItemonSelectService(item:any, value:any){
      await this.checkItemonSelectService(item);
       let text = await (await gondola.getText(this.buttonSelectService)).includes(value);
       gondola.checkEqual(text, true, "match text" + value);
       
    }
    @action ("unselect item Select Services on Download page")
    public async unselectItemonServices(item:any, value:any){
       await this.checkItemonSelectService(item);
       let text = await (await gondola.getText(this.buttonSelectService)).includes(value);
       gondola.checkEqual(text, false, "match text" + value);
       
    }
    @action ("input number phone depend on flag national")
    public async inputPhonewithItemPlag(flag:any,value:any, numberphone:any){
      if (!(await gondola.doesControlExist(this.listFlagPhone))) {
         await gondola.waitForClickable(this.btFlag,30);
         await gondola.wait(3);
         await gondola.click(this.btFlag);
       }
      // await gondola.waitForClickable(this.containerSelectMobileTesting,30);
      await gondola.waitForClickable(flag,30);
      await gondola.click(flag);
      await gondola.checkControlProperty(this.btFlag,"title",value);
      await this.enterValidFormat(this.txtPhone,numberphone);
      await gondola.checkControlNotExist(this.txtErrorPhone);
    }
    
}
export default new becomePartnerPage();