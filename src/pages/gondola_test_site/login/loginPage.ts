import { action, gondola, locator, page } from "gondolajs";

@page
export class loginPage {
    
    
    @locator
   
    public txtUsername = "//input[@id='lg-email']";
    public txtPassword = "//input[@id='lg-password']";
    //public chk_captcha ="//div[@class='recaptcha-checkbox-checkmark']";
    public btLogin = "//button[@id='login-btn']";
    public lnkSignUp = "//a[@id='lnkRegister']";
    
    @action(" login account")
    public async login(username: string ,password: string){

        await gondola.waitForElement(this.txtUsername,30);
        await gondola.enter(this.txtUsername,username );
        await gondola.enter(this.txtPassword,password);
        
       // await gondola.click(this.chk_captcha);
        await gondola.click(this.btLogin);

    }
    @action(" click link")
    public async openLink(link:any){
       // await gondola.waitForElement(this.lnk_WhyGondola);    
       // await gondola.click(this.lnk_WhyGondola);
        await gondola.waitForClickable(link,60);    
        await gondola.click(link);

    }
}
export default new loginPage();