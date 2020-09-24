import { action, gondola, locator, page } from "gondolajs";

@page
export class loginPage {
    
    
    @locator
    public txt_username = "//input[@id='lg-email']";
    public txt_password = "//input[@id='lg-password']";
    public chk_captcha ="//div[@class='recaptcha-checkbox-checkmark']";
    public bt_Login = "//button[@id='login-btn']";
    
    @action(" login account")
    public async login(username: string ,password: string){
        await gondola.waitForElement(this.chk_captcha);
        await gondola.enter(this.txt_username,username );
        await gondola.enter(this.txt_password,password);
        await gondola.click(this.chk_captcha);
        
        await gondola.click(this.bt_Login);

    }
}
export default new loginPage();