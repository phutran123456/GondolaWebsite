import { action, gondola, locator, page } from "@logigear/gondola";
import { datatest } from "../../../data/Gondola/datatest";
@page
export class changePasswordPage {
    
    @locator
    public txtPassword ="//input[@id='FreshdeskUser_password']";
    @locator
    public txtNewPassword ="//input[@id='FreshdeskUser_new_password']";
    @locator
    public txtConfirmNewPassword ="//input[@id='FreshdeskUser_new_password_repeat']";
    @locator
    public btSubmit ="//button[@class=' button-login']";
    @locator
    public labelError ="//tr[2]//label[@class='error']";
    @locator
    public errormessage ="//div[@class='flash-error']";
    @locator
    public textSucess ="//h1[.='Success!']";

    @action ("check content error message on Change Password page")
    public async checkError( message:any,content:any){
        await gondola.waitForClickable(message,60);
        let isErrorMessage = await (await gondola.getText(message)).includes(content);
        gondola.checkEqual(isErrorMessage, true, "match text" + content);
    }
    @action ("Error message on Change Password page")
    public async changeInvalidPassWord(newpass:any, message:any, content:any){
       await gondola.waitForClickable(this.txtPassword,30);
       await gondola.enter(this.txtPassword,datatest.passwordValid)
       await gondola.enter(this.txtNewPassword,newpass);
       await gondola.enter(this.txtConfirmNewPassword,newpass);
       await gondola.click(this.btSubmit);
       await this.checkError(message,content);
      // await gondola.waitForClickable(this.labelError,30);
      // let isErrorMessage = await (await gondola.getText(this.labelError)).includes(message);
      // gondola.checkEqual(isErrorMessage, true, "match text" + message);  
    }
    @action ("Error message on Change Password page")
    public async changeValidPassWord(newpass:any){
       await gondola.waitForClickable(this.txtPassword,30);
       await gondola.enter(this.txtPassword,datatest.passwordValid)
       await gondola.enter(this.txtNewPassword,newpass);
       await gondola.enter(this.txtConfirmNewPassword,newpass);
       await gondola.click(this.btSubmit);
       await gondola.waitForClickable(this.textSucess,30);
       await gondola.checkControlExist(this.textSucess);
    }
}
export default new changePasswordPage();