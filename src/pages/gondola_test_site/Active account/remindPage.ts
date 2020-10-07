import { action, gondola, locator, page } from "gondolajs";


@page
export class reminderPage {
    @locator
    public lnkHere ="//a[@id='send_code']";
    public btActiveAccount ="//button[@id='btn_activation']";
    public txtTitle ="//h1[.='Please Active Your Account']";
    public txtContent ="//p[contains(.,'To verify your identity, a security code has been sent to you. Please check the')]";
    public txtSecurityCode="//input[@id='security_code_input']";
    
    @action(" check GUI")
    public async checkGUI(value:any){
       
        await gondola.waitForElement(this.txtTitle,30);
        let isContentExist =  (await gondola.getText(this.txtContent)).includes(value);
        await gondola.checkEqual(isContentExist, true, "matches found: " + value); 
        await gondola.checkControlExist(this.txtSecurityCode);
        await gondola.checkControlExist(this.btActiveAccount);
        await gondola.checkControlExist(this.lnkHere);
       
        
    }
    @action(" click link")
    public async openPage(link:any){
       // await gondola.waitForElement(this.lnk_WhyGondola);    
       // await gondola.click(this.lnk_WhyGondola);
        await gondola.waitForElement(link,10);    
        await gondola.click(link);

    }
    

}
export default new reminderPage();