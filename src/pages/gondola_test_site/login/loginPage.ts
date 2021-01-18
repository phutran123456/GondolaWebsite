import { action, gondola, locator, page } from "@logigear/gondola";

@page
export class loginPage {
    
    
    @locator
    public txtUsername = "//input[@id='lg-email']";
    @locator
    public txtPassword = "//input[@id='lg-password']";
    @locator
    public btLogin = "//button[@id='login-btn']";
    @locator
    public lnkSignUp = "//a[@id='lnkRegister']";
    
    @action(" login account")
    public async login(username: string ,password: string){

        await gondola.waitForElement(this.txtUsername,30);
        await gondola.enter(this.txtUsername,username );
        await gondola.enter(this.txtPassword,password);
        await gondola.click(this.btLogin);
    }
    @action(" click link")
    public async openLink(link:any){
        await gondola.waitForClickable(link,60);    
        await gondola.click(link);
    }
    @action(" check GUI")
    public async checkGUI(){
        await gondola.waitForClickable(this.txtUsername,60); 
        await gondola.checkControlExist(this.txtUsername);    
        await gondola.checkControlExist(this.txtPassword);
        await gondola.checkControlExist(this.btLogin);
    }
}
export default new loginPage();