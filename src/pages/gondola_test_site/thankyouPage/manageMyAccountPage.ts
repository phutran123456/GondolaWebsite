import { action, gondola, locator, page } from "gondolajs";
import { phone } from "../../../data/Gondola/phone";
@page
export class manageMyAccountPage {
    
    @locator
    public txtPhone ="#FreshdeskUser_phone";
    public txtErrorMessagePhone ="//input[@id='FreshdeskUser_phone']/following-sibling::label[@class='error']";
    public btSaveChanges="#signup-btn";
    
    @action ("update number phone on manage My Account page")
    public async updateNumberPhone(phone:any, message:any){
       await gondola.waitForClickable(this.txtPhone,30);
       await gondola.enter(this.txtPhone,phone);
       await gondola.pressKey("Enter");
       let text = await (await gondola.getText(this.txtErrorMessagePhone)).includes(message);
       gondola.checkEqual(text, true, "match text" + message);
       
    }
    @action ("update valid number phone on manage My Account page")
    public async updateNumberPhoneSuccess(phone:any){
       await gondola.waitForClickable(this.txtPhone,30);
       await gondola.enter(this.txtPhone,phone);
       await gondola.click(this.btSaveChanges);     
    }
    @action ("check number phone on manage My Account page")
    public async checkNumberPhoneSuccess(phone:any){
        await gondola.waitForClickable(this.txtPhone,30);
        let text = await (await gondola.get(this.txtPhone)).includes(phone);
        await gondola.checkEqual(text, true, "text: " + phone);   
    }
}
export default new manageMyAccountPage();