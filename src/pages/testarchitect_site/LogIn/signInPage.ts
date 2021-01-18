import { action, gondola, locator, page,KeyCode } from "@logigear/gondola";
import { Account} from "../../../data/Gondola/Account";
import { email } from "../../../data/TestArchitect/email";
import { name } from "../../../data/TestArchitect/name";
import { password } from "../../../data/TestArchitect/password";

@page
export class signInPage {
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
    public txtEmail="//input[@id='FreshdeskUser_email_SG']";
    @locator
    public txtErrorEmail = this.txtEmail+this.labelErrorInput;
    @locator
    public txtPassword="//input[@id='FreshdeskUser_new_password']";
    @locator
    public txtErrorPassword = this.txtPassword+this.labelErrorInput;
    @locator
    public txtPasswordRepeat="//input[@id='FreshdeskUser_new_password_repeat']";
    @locator
    public txtErrorPasswordRepeat = this.txtPasswordRepeat+this.labelErrorInput;
    @locator
    public btGetStarted="#signup-btn";
    @locator
    public lnkSignIn="#btnCancel";
    //One last step Page
    @locator
    public txtTitle="//input[@id='FreshdeskUser_title']";
    @locator
    public txtCompany="//input[@id='FreshdeskUser_company']";
    @locator
    public cmbCountry="//select[@id='country']";
    @locator
    public cmbState="//select[@id='state']";
    @locator
    public txtPhone="//input[@id='FreshdeskUser_phone']";
    @locator
    public txtErrorPhone = this.txtPhone+this.labelErrorInput;
    @locator
    public btCreateFreeAccount="#signup-btn";
    @locator
    public btBack="#back-step";

    @action(" check GUI")
    public async checkGUI(){
        await gondola.waitForClickable(this.txtFirstName,60); 
        await gondola.checkControlExist(this.txtFirstName);    
        await gondola.checkControlExist(this.txtLastName);
        await gondola.checkControlExist(this.txtPassword);    
        await gondola.checkControlExist(this.txtPasswordRepeat);
        await gondola.checkControlExist(this.txtEmail);
        await gondola.checkControlExist(this.btGetStarted);
        await gondola.checkControlExist(this.lnkSignIn);

    }
    @action ("get Random account")
    public async getRandomaccount(){
         let count = await Math.floor(Math.random() * 10000) + 1;
         let emailaddress = await email.email + count + "@temp.com";
         let firstName = name.validFirstName + count;
         let acc = new Account(firstName, emailaddress);
         return acc;
    }
    @action(" check GUI LastStep")
    public async checkGUILastStep(acc:any){
        await gondola.wait(3);
        await gondola.enter(this.txtFirstName,acc.firstName);
        await gondola.enter(this.txtLastName,acc.lastname);
        await gondola.enter(this.txtEmail,acc.emailaddress);
       
        await gondola.enter(this.txtPassword,password.passwordValid);
        await gondola.enter(this.txtPasswordRepeat,password.passwordValid);
        
        await gondola.click(this.btGetStarted);
        //GUI last step
        await gondola.wait(3);
        await gondola.waitForClickable(this.txtTitle,60); 
        await gondola.checkControlExist(this.txtTitle);    
        await gondola.checkControlExist(this.txtCompany);
        await gondola.checkControlExist(this.cmbCountry);    
        await gondola.checkControlExist(this.cmbState);
        await gondola.checkControlExist(this.txtPhone);
        await gondola.checkControlExist(this.btCreateFreeAccount);
        await gondola.checkControlExist(this.btBack);
    }
    @action(" input new account")
    public async inputAccount(acc:any){
            
       
        await gondola.wait(3);
        await gondola.enter(this.txtFirstName,acc.firstName);
        await gondola.enter(this.txtLastName,acc.lastname);
        await gondola.enter(this.txtEmail,acc.emailaddress);
        await gondola.enter(this.txtPassword,password.passwordValid);
        await gondola.enter(this.txtPasswordRepeat,password.passwordValid);
        await gondola.click(this.btGetStarted);
        await gondola.wait(3);
        //await gondola.waitForClickable(this.txtTitle,10);
        await gondola.enter(this.txtTitle, acc.titlename);
        await gondola.enter(this.txtCompany,acc.company);
        await gondola.select(this.cmbCountry,acc.country);
        await gondola.select(this.cmbState,acc.state);
        await gondola.enter(this.txtPhone,acc.phone);
        await gondola.click(this.btCreateFreeAccount);
        
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
    @action(" enter value on input Email control")
    public async checkInvalidPasswordFormat(value: string, error:string ){
        await gondola.wait(3);
        await gondola.waitForElement(this.txtPassword,30);
        await gondola.enter(this.txtPassword,value);
        await gondola.pressKey(KeyCode.Enter);
        await this.checkErrorMessage(this.txtErrorPassword,error);  
    }
    @action(" enter value on input control")
    public async checkInvalidEmailFormat(email: string, error:string ){

        await gondola.waitForElement(this.txtEmail,30);
        await gondola.enter(this.txtEmail,email);
        //await gondola.pressKey(KeyCode.Enter);
        await this.checkErrorMessage(this.txtErrorEmail,error);  
    }
    
    @action ("input valid format on page")
    public async enterValidFormat(control:any,string:any){

       await gondola.wait(3);
       await gondola.waitForClickable(control,30);
       await gondola.enter(control,string);
       await gondola.pressKey(KeyCode.Enter);     
    }
    @action ("input valid with space format on page")
    public async enterValidwithSpace(control:any,string:any,otherControl:any){
       await gondola.waitForClickable(control,30);
       await gondola.enter(control,string);
       await gondola.click(otherControl);     
    }
    @action ("input valid with space format on page")
    public async enterString(control:any,string:any,otherControl:any){
       await gondola.waitForClickable(control,30);
       await gondola.enter(control,string);
       await gondola.click(otherControl);     
    }
    @action ("input invalid format phone on Download page")
    public async invalidFormatPhone(string:any, message:any){
      await gondola.wait(3);
       await gondola.waitForClickable(this.txtPhone,30);
       await gondola.enter(this.txtPhone,string);
      // await gondola.pressKey(KeyCode.Enter);
      await gondola.click(this.txtCompany); 
       let text = await (await gondola.getText(this.txtErrorPhone)).includes(message);
       gondola.checkEqual(text, true, "match text" + message);
       
    }
    @action ("check valid control displayed on control")
    public async checkValueNotSpaceonField(control:any, value:any){
      await gondola.waitForClickable(control,30);
      let text = await gondola.get(control);
      await gondola.checkEqual(text,value.trim());
    }
    @action ("input invalid format email on Download page")
    public async invalidFormatEmail(string:any, message:any){
       await gondola.wait(3);
       await gondola.waitForClickable(this.txtEmail,30);
       await gondola.enter(this.txtEmail,string);
       await gondola.pressKey(KeyCode.Enter);
       let text = await (await gondola.getText(this.txtErrorEmail)).includes(message);
       gondola.checkEqual(text, true, "match text" + message);
       
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
    @action ("Error message for Repeat Password on page")
    public async inputInvalidRepeatPassWord(newpass:any, message:any){
       await gondola.waitForClickable(this.txtPassword,30);
       await gondola.enter(this.txtPassword,password.passwordValid)
       await gondola.enter(this.txtPasswordRepeat,newpass);
       await gondola.pressKey(KeyCode.Enter);
       let text = await (await gondola.getText(this.txtErrorPasswordRepeat)).includes(message);
       gondola.checkEqual(text, true, "match text" + message);
       
    }
    @action ("check valid control displayed below control on page")
    public async checkValueonField(control:any, value:any){
      await gondola.waitForClickable(control,30);
      let text = await (await gondola.get(control)).includes(value);
      gondola.checkEqual(text, true, "match text" + value);
    }
    @action(" input new account with existed email")
    public async createAccountwithExistedEmail(acc:any, email:any, message:any){
         
        await gondola.wait(3);
        await gondola.waitForClickable(this.txtFirstName,20);
        await gondola.enter(this.txtFirstName,acc.firstName);
        await gondola.enter(this.txtLastName,acc.lastname);
        await gondola.enter(this.txtEmail,email);
        await gondola.enter(this.txtPassword,password.passwordValid);
        await gondola.enter(this.txtPasswordRepeat,password.passwordValid);
        await gondola.click(this.btGetStarted);
        await gondola.wait(3);
        await gondola.click(this.btCreateFreeAccount);
        await gondola.wait(3);
        await gondola.waitForClickable(this.txtErrorEmail,20);
        let isErrorExisted = (await gondola.getText(this.txtErrorEmail)).includes(message);
        await gondola.checkEqual(isErrorExisted, true, "No matches found: " + message);
    }
}    
export default new signInPage();    