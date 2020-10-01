import { action, gondola, locator, page } from "gondolajs";
import { Account} from "../../../data/Account";
import { datatest } from "../../../data/datatest";
@page
export class registerPage {
    
    
    @locator
    public txt_Firstname = "#FreshdeskUser_first_name";
    public txt_Lastname = "#FreshdeskUser_last_name";
    public txt_Email = "#FreshdeskUser_email_SG";
    public txt_Password = "#FreshdeskUser_new_password";
    public txt_ConfirmPassword = "#FreshdeskUser_new_password_repeat";

    public bt_Login = "#signup-btn";

    //one last step
    public txt_Title = "#FreshdeskUser_title";
    public txt_Company = "#FreshdeskUser_company";
    public cmb_Country= "//select[@id='country']";
    public cmb_State = "//select[@id='state']";
    public txt_Phone = "#FreshdeskUser_phone";
    public chk_captcha ="//div[@class='recaptcha-checkbox-border']";
    public bt_Create = "//button[@id='signup-btn']";

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
        
        await gondola.waitForElement(this.txt_Firstname,20);
        await gondola.enter(this.txt_Firstname,acc.firstName);
        await gondola.enter(this.txt_Lastname,acc.lastname);
        await gondola.enter(this.txt_Email,acc.emailaddress);
        await gondola.enter(this.txt_Password,acc.password);
        await gondola.enter(this.txt_ConfirmPassword,acc.password);
        await gondola.click(this.bt_Login);

        await gondola.waitForElement(this.txt_Title,10);
        await gondola.enter(this.txt_Title, acc.titlename);
        await gondola.enter(this.txt_Company,acc.company);
        await gondola.select(this.cmb_Country,acc.country);
        await gondola.select(this.cmb_State,acc.state);
        await gondola.enter(this.txt_Phone,acc.phone);
        await gondola.click(this.bt_Create);
    }

   
}
export default new registerPage();