import { action, gondola, locator, page,KeyCode } from "gondolajs";

@page
export class loginPage {
   
    @locator
    public labelErrorInput="/following-sibling::label[@class='error']";
    @locator
    public txtEmail ="//input[@id='lg-email']";
    @locator
    public txtErrorEmail = this.txtEmail+this.labelErrorInput;
    @locator
    public txtPassword = "//input[@id='lg-password']";
    @locator
    public txtErrorPassword = this.txtPassword+this.labelErrorInput;
    @locator
    public btLogin = "//button[@id='login-btn']";
    @locator
    public lnkSignUp = "//a[@id='lnkRegister']";
    @locator
    public lnkForgotPassword = "#lnkForgotPassword";
    @locator
    public txterrormessage ="//div[@id='system-message']/div[@class='flash-error']";
    @action(" login account")
    public async login(username: string ,password: string){

        await gondola.waitForElement(this.txtEmail,30);
        await gondola.enter(this.txtEmail,username );
        await gondola.enter(this.txtPassword,password);
        await gondola.click(this.btLogin);
    }

    @action(" check GUI")
    public async checkGUI(){
        await gondola.waitForClickable(this.txtEmail,60); 
        await gondola.checkControlExist(this.txtEmail);    
        await gondola.checkControlExist(this.txtPassword);
        await gondola.checkControlExist(this.btLogin);
        await gondola.checkControlExist(this.lnkSignUp);
        await gondola.checkControlExist(this.lnkForgotPassword);
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
    @action(" enter value on input control")
    public async checkInvalidEmailFormat(email: string, error:string ){

        await gondola.waitForElement(this.txtEmail,30);
        await gondola.enter(this.txtEmail,email);
        //await gondola.pressKey(KeyCode.Enter);
        await this.checkErrorMessage(this.txtErrorEmail,error);
        
    }

}    
export default new loginPage();