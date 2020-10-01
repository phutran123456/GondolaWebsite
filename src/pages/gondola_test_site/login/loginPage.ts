import { action, gondola, locator, page } from "gondolajs";

@page
export class loginPage {
    
    
    @locator
   
    public txtUsername = "//input[@id='lg-email']";
    public txtPassword = "//input[@id='lg-password']";
    //public chk_captcha ="//div[@class='recaptcha-checkbox-checkmark']";
    public bt_Login = "//button[@id='login-btn']";
    
    @action(" login account")
    public async login(username: string ,password: string){

        await gondola.waitForElement(this.txtUsername,30);
        await gondola.enter(this.txtUsername,username );
        await gondola.enter(this.txtPassword,password);
        
       // await gondola.click(this.chk_captcha);
        await gondola.click(this.bt_Login);

    }
}
export default new loginPage();