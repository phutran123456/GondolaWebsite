import { action, gondola,KeyCode, locator, page } from "@logigear/gondola";
import { Account} from "../../../data/Gondola/Account";
import { datatest } from "../../../data/Gondola/datatest";
import { phone } from "../../../data/Gondola/phone";
@page
export class registerPage {
    
    
    @locator
    public txtFirstname = "#FreshdeskUser_first_name";
    @locator
    public txtLastname = "#FreshdeskUser_last_name";
    @locator
    public txtEmail = "#FreshdeskUser_email_SG";
    @locator
    public txtPassword = "#FreshdeskUser_new_password";
    @locator
    public txtConfirmPassword = "#FreshdeskUser_new_password_repeat";
    @locator
    public btGetStarted = "#signup-btn";
    @locator
    public labelError = "//div[@id='regist-step1']/div[3]/label[@class='error']";

    //one last step
    @locator
    public txtTitle = "#FreshdeskUser_title";
    @locator
    public txtCompany = "#FreshdeskUser_company";
    @locator
    public cmbCountry= "//select[@id='country']";
    @locator
    public cmbState = "//select[@id='state']";
    @locator
    public txtPhone = "#FreshdeskUser_phone";
    @locator
    public chkCaptcha ="//div[@class='recaptcha-checkbox-border']";
    @locator
    public btCreate = "//button[@id='signup-btn']";
    @locator
    public messagePhone = "//div[@id='regist-step2']/div[@class='form-group']/label[@class='error']";
    
    @action ("get Random account")
    public async getRandomaccount(){
         let count = await Math.floor(Math.random() * 10000) + 1;
         let emailaddress = await datatest.email + count + "@temp.com";
         let firstName = datatest.firstname + count;
         let acc = new Account(firstName, emailaddress);
         return acc;
    }
    @action(" register new account")
    public async InputInfoUser(acc:any){
        
        //await gondola.waitForClickable(this.txtFirstname,20);
        await gondola.wait(3);
        await gondola.enter(this.txtFirstname,acc.firstName);
        await gondola.enter(this.txtLastname,acc.lastname);
        await gondola.enter(this.txtEmail,acc.emailaddress);
        await gondola.enter(this.txtPassword,acc.password);
        await gondola.enter(this.txtConfirmPassword,acc.password);
        await gondola.click(this.btCreate);

        await gondola.waitForElement(this.txtTitle,10);
        await gondola.enter(this.txtTitle, acc.titlename);
        await gondola.enter(this.txtCompany,acc.company);
        await gondola.select(this.cmbCountry,acc.country);
        await gondola.select(this.cmbState,acc.state);
        await gondola.enter(this.txtPhone,acc.phone);
        await gondola.click(this.btCreate);
    }

    @action(" input new account")
    public async inputAccount(acc:any, password:any){
            
        //await gondola.waitForClickable(this.txtFirstname,20);
        await gondola.wait(3);
        await gondola.enter(this.txtFirstname,acc.firstName);
        await gondola.enter(this.txtLastname,acc.lastname);
    
        //await gondola.click(this.txtEmail,acc.emailaddress);
        //await gondola.pressKey([KeyCode.Control,"v"]);
        await gondola.enter(this.txtEmail,acc.emailaddress);
       
        await gondola.enter(this.txtPassword,password);
        await gondola.enter(this.txtConfirmPassword,password);
        
        await gondola.click(this.btGetStarted);
    
        //await gondola.waitForClickable(this.txtTitle,10);
        await gondola.enter(this.txtTitle, acc.titlename);
        await gondola.enter(this.txtCompany,acc.company);
        await gondola.select(this.cmbCountry,acc.country);
        await gondola.select(this.cmbState,acc.state);
        await gondola.enter(this.txtPhone,acc.phone);
        await gondola.click(this.btCreate);
        
    }
    @action(" input new account with error password")
    public async createAccountwithErrorPassword(acc:any, password:any, message:any){
            
        await gondola.waitForClickable(this.txtFirstname,20);
        await gondola.enter(this.txtFirstname,acc.firstName);
        await gondola.enter(this.txtLastname,acc.lastname);
        await gondola.enter(this.txtEmail,acc.emailaddress);
        await gondola.enter(this.txtPassword,password);
        await gondola.pressKey("Enter");
        let isErrorExisted = (await gondola.getText(this.labelError)).includes(message);
        await gondola.checkEqual(isErrorExisted, true, "No matches found: " + message);
    }
    @action("input new account with error password")
    public async createAccountwithErrorPhone(acc:any, phone:any, message:any){
            
        await gondola.waitForClickable(this.txtFirstname,20);
        await gondola.enter(this.txtFirstname,acc.firstName);
        await gondola.enter(this.txtLastname,acc.lastname);
        await gondola.enter(this.txtEmail,acc.emailaddress); 
        await gondola.enter(this.txtPassword,acc.password);
        await gondola.enter(this.txtConfirmPassword,acc.password);  
        await gondola.click(this.btGetStarted);
    
        await gondola.waitForElement(this.txtTitle,10);
        await gondola.enter(this.txtPhone,phone);
        await gondola.pressKey("Enter");
        let isErrorExisted = (await gondola.getText(this.messagePhone)).includes(message);
        await gondola.checkEqual(isErrorExisted, true, "No matches found: " + message);
    }
    public async createAccountwithValidPhone(acc:any, phone:any){
            
        await gondola.waitForClickable(this.txtFirstname,20);
        await gondola.enter(this.txtFirstname,acc.firstName);
        await gondola.enter(this.txtLastname,acc.lastname);
        await gondola.enter(this.txtEmail,acc.emailaddress); 
        await gondola.enter(this.txtPassword,acc.password);
        await gondola.enter(this.txtConfirmPassword,acc.password);  
        await gondola.click(this.btGetStarted);
    
        await gondola.waitForElement(this.txtTitle,10);
        await gondola.enter(this.txtPhone,phone);
      //  await gondola.pressKey("Enter");
        await gondola.click(this.btCreate);
    }
    
}
export default new registerPage();