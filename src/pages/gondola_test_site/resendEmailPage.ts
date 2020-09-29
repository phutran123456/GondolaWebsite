import { action, gondola, locator, page } from "gondolajs";
import { datatest } from "../../data/datatest";
@page
export class reminderPage {
    @locator
    public btResendActiveEmail ="//button[@id='btn_sendactive']";
    @locator
    public txtEmail ="//input[@id='lg-email']";
    @locator
    public lnkActivePAge ="//a[@id='return_active']";
    @locator
    public txtMessage ="//div[@id='system_message']";

    
    public async checkGUI(){
        await gondola.waitForElement(this.btResendActiveEmail,10);
        await gondola.checkControlExist(this.btResendActiveEmail);
        await gondola.checkControlExist(this.txtEmail);
        await gondola.checkControlExist(this.lnkActivePAge);
   
    }
    public async checkMaximumNumberResendActive(){
        
        await gondola.enter(this.txtEmail,datatest.username_nonactive);
    
        let i=1;
        while (i <= 4){
            
            await gondola.click(this.btResendActiveEmail);
            //await gondola.checkControlExist(datatest.messageResendEmail);
            //get message
    
            if (await gondola.doesControlExist(this.txtMessage)){
                await gondola.checkText(this.txtMessage, datatest.warningActiveCode);
            } else if (i === 4){
                await gondola.checkEqual(false, true, "Message still not appears after retry 3 times");
            }
    
            i++;
        }
    
    }

}
export default new reminderPage();