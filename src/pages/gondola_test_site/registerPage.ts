import { action, gondola, locator, page } from "gondolajs";


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

    
    @action(" login account")
    public async InputInfoUser(firstname: string ,lastname: string ,email: string ,password: string, confirmpassword: string){
        
    

        await gondola.waitForElement(this.txt_Firstname);
       
        await gondola.enter(this.txt_Firstname,firstname);
        await gondola.enter(this.txt_Lastname,lastname);
        await gondola.enter(this.txt_Email,email);
        await gondola.enter(this.txt_Password,password);
        await gondola.enter(this.txt_ConfirmPassword,password);
        
        await gondola.click(this.bt_Login);
    }
    public async InputOneLastStep(title:string, company:string, country:string,state:string, phone:string){
       // await gondola.waitForElement(this.chk_captcha);
        await gondola.enter(this.txt_Title, title);
        await gondola.enter(this.txt_Company,company);
        await gondola.select(this.cmb_Country,country);
        await gondola.select(this.cmb_State,state);
        await gondola.enter(this.txt_Phone,phone);
       // await gondola.click(this.chk_captcha);
        await gondola.click(this.bt_Create);
    }

   
}
export default new registerPage();