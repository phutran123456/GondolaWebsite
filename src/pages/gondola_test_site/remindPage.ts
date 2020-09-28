import { action, gondola, locator, page } from "gondolajs";
import thankyouPage from "./thankyouPage"

@page
export class reminderPage {
    @locator
    public lnkResendActive ="//a[@id='send_code']";
    public btActiveAccount ="//button[@id='btn_activation']";
    public txtTitle ="//h1[.='Please Active Your Account']";
    public txtContent ="//p[contains(.,'To verify your identity, a security code has been sent to you. Please check the')]";
    public txtSecurityCode="//input[@id='security_code_input']";
    

    public async checkGUI(value:any){
       
        await gondola.waitForElement(this.txtTitle,30);
        let isContentExist =  (await gondola.getText(this.txtContent)).includes(value);
        await gondola.checkEqual(isContentExist, true, "matches found: " + value); 
        await gondola.checkControlExist(this.txtTitle);
        await gondola.checkControlExist(this.btActiveAccount);
        await gondola.checkControlExist(this.lnkResendActive);
        
    }
     
    public async checkMaximumNumberResendActive(){

    }

}
export default new reminderPage();