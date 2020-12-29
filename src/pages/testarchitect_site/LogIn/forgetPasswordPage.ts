import { action, gondola, locator, page,KeyCode } from "gondolajs";

@page
export class forgetPasswordPage {
   
    @locator
    public txtEmail="//input[@id='FreshdeskUser_email_SG']";
    @locator
    public labelErrorInput="/following-sibling::label[@class='error']";
    @locator
    public txtErrorEmail=this.txtEmail+this.labelErrorInput;
    @locator
    public btSubmit="#forgot-btn";
    @locator
    public lnkSignIn="#btnCancel";
    
    @action(" check GUI")
    public async checkGUI(){
        await gondola.waitForClickable(this.txtEmail,60); 
        await gondola.checkControlExist(this.txtEmail);
        await gondola.checkControlExist(this.btSubmit);
        await gondola.checkControlExist(this.lnkSignIn);    
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
export default new forgetPasswordPage();    