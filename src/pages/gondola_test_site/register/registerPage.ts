import { action, gondola, locator, page } from "gondolajs";
import { Account} from "../../../data/Account";
import { datatest } from "../../../data/datatest";
@page
export class registerPage {
    
    
    @locator
    public txtFirstname = "#FreshdeskUser_first_name";
    public txtLastname = "#FreshdeskUser_last_name";
    public txtEmail = "#FreshdeskUser_email_SG";
    public txtPassword = "#FreshdeskUser_new_password";
    public txtConfirmPassword = "#FreshdeskUser_new_password_repeat";

    public btLogin = "#signup-btn";

    //one last step
    public txtTitle = "#FreshdeskUser_title";
    public txtCompany = "#FreshdeskUser_company";
    public cmbCountry= "//select[@id='country']";
    public cmbState = "//select[@id='state']";
    public txtPhone = "#FreshdeskUser_phone";
    public chkCaptcha ="//div[@class='recaptcha-checkbox-border']";
    public btCreate = "//button[@id='signup-btn']";

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
        
        await gondola.waitForElement(this.txtFirstname,20);
        await gondola.enter(this.txtFirstname,acc.firstName);
        await gondola.enter(this.txtLastname,acc.lastname);
        await gondola.enter(this.txtEmail,acc.emailaddress);
        await gondola.enter(this.txtPassword,acc.password);
        await gondola.enter(this.txtConfirmPassword,acc.password);
        await gondola.click(this.btLogin);

        await gondola.waitForElement(this.txtTitle,10);
        await gondola.enter(this.txtTitle, acc.titlename);
        await gondola.enter(this.txtCompany,acc.company);
        await gondola.select(this.cmbCountry,acc.country);
        await gondola.select(this.cmbState,acc.state);
        await gondola.enter(this.txtPhone,acc.phone);
        await gondola.click(this.btCreate);
    }

   
}
export default new registerPage();