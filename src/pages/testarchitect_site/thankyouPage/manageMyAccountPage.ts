import { action, gondola, locator, page, KeyCode } from "@logigear/gondola";
import { phone } from "../../../data/TestArchitect/phone";
@page
export class manageMyAccountPage {
    
    @locator
    public txtPhone ="#FreshdeskUser_phone";
    @locator
    public txtErrorMessagePhone ="//input[@id='FreshdeskUser_phone']/following-sibling::label[@class='error']";
    @locator
    public btSaveChanges="#signup-btn";
    @locator
    public labelErrorInput="/following-sibling::label[@class='error']";
    @locator
    public txtFirstName="//input[@id='FreshdeskUser_first_name']";
    @locator
    public txtErrorFirstName=this.txtFirstName+this.labelErrorInput;
    @locator
    public txtLastName="//input[@id='FreshdeskUser_last_name']";
    @locator
    public txtErrorLastName=this.txtLastName+this.labelErrorInput;
    @locator
    public txtEmail="#FreshdeskUser_email_SG";
    @locator
    public txtTitle="//input[@id='FreshdeskUser_title']";
    @locator
    public txtCompany="//input[@id='FreshdeskUser_company']";
    @locator
    public cmbCountry="//select[@id='country']";
    @locator
    public cmbState="//select[@id='state']";

    @action ("check GUI")
    public async checkGUI(){
      await gondola.waitForClickable(this.txtFirstName,60); 
      await gondola.checkControlExist(this.txtFirstName);    
      await gondola.checkControlExist(this.txtLastName);
      await gondola.checkControlExist(this.txtEmail);    
      await gondola.checkControlExist(this.txtTitle);
      await gondola.checkControlExist(this.txtEmail);
      await gondola.checkControlExist(this.txtCompany);
      await gondola.checkControlExist(this.cmbCountry);
      await gondola.checkControlExist(this.cmbState);
      await gondola.checkControlExist(this.btSaveChanges);

  }
    @action ("update number phone on manage My Account page")
    public async updateNumberPhone(phone:any, message:any){
       await gondola.waitForClickable(this.txtPhone,30);
       await gondola.enter(this.txtPhone,phone);
       await gondola.pressKey("Enter");
       let text = await (await gondola.getText(this.txtErrorMessagePhone)).includes(message);
       gondola.checkEqual(text, true, "match text" + message);
       
    }
    @action ("update valid number phone on manage My Account page")
    public async updateNumberPhoneSuccess(phone:any){
       await gondola.waitForClickable(this.txtPhone,30);
       await gondola.enter(this.txtPhone,phone);
       await gondola.click(this.btSaveChanges);     
    }
    @action ("check number phone on manage My Account page")
    public async checkNumberPhoneSuccess(phone:any){
        await gondola.waitForClickable(this.txtPhone,30);
        let text = await (await gondola.get(this.txtPhone)).includes(phone);
        await gondola.checkEqual(text, true, "text: " + phone);   
    }
    @action ("input valid format on page")
    public async enterValidFormat(control:any,string:any){

       await gondola.wait(3);
       await gondola.waitForClickable(control,30);
       await gondola.enter(control,string);
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
    @action ("input valid with space format on page")
    public async enterValidwithSpace(control:any,string:any,otherControl:any){
       await gondola.waitForClickable(control,30);
       await gondola.enter(control,string);
       await gondola.click(otherControl);     
    }
    @action ("check valid control displayed on control")
    public async checkValueNotSpaceonField(control:any, value:any){
      await gondola.waitForClickable(control,30);
      let text = await gondola.get(control);
      await gondola.checkEqual(text,value.trim());
    }
}
export default new manageMyAccountPage();