import { action, gondola, locator, page,KeyCode } from "@logigear/gondola";
import { Account} from "../../data/Gondola/Account";
import { email } from "../../data/TestArchitect/email";
import { name } from "../../data/TestArchitect/name";

@page
export class contactUsPage {
   constructor() {
      this._contactPageUrl = "https://stage1.testarchitect.com/pombuilder/contact.html";
   }
   _contactPageUrl: string;
    
    @locator
    public labelErrorInput="/following-sibling::label[@class='error']";
    @locator
    public txtFirstName="//input[@name='first_name']";
    @locator
    public txtErrorFirstName=this.txtFirstName+this.labelErrorInput;
    @locator
    public txtLastName="//input[@name='last_name']";
    @locator
    public txtErrorLastName=this.txtLastName+this.labelErrorInput;
    @locator
    public txtEmail="//input[@name='email']";
    @locator
    public txtErrorEmail=this.txtEmail+this.labelErrorInput;
    @locator
    public txtCompany="//input[@name='company']";
    @locator
    public cmbCountry="//select[@id='ContactUs_country']";
    @locator
    public txtErrorCountry=this.cmbCountry+this.labelErrorInput;
    @locator
    public cmbState="//select[@id='ContactUs_state']";
    @locator
    public txtPhone="//input[@name='phone']";
    @locator
    public txtErrorPhone = this.txtPhone+this.labelErrorInput;
    @locator
    public txtComment="//textarea[@name='comment']";
    @locator
    public txtErrorComment = this.txtComment+this.labelErrorInput;
    @locator
    public chkSubscribe="#chkSubscribe";
    @locator
    public btSend="//button[contains(text(),'Send')]";
    
    @action("open website TA", "Navigate to home page")
    public async navigateTo() {
        await gondola.navigate(this._contactPageUrl);
        await gondola.maximize();
        
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
       // await gondola.pressKey(KeyCode.Enter);
        await gondola.click(this.txtComment); 
        await this.checkErrorMessage(this.txtErrorEmail,error);  
    }
    
    @action ("input valid format on page")
    public async enterValidFormat(control:any,string:any){

       await gondola.wait(3);
       await gondola.waitForClickable(control,30);
       await gondola.enter(control,string);
       await gondola.pressKey(KeyCode.Enter);     
    }
    @action ("input valid with space format on page")
    public async enterString(control:any,string:any,otherControl:any){
        await gondola.waitForClickable(control,30);
        await gondola.enter(control,string);
        await gondola.click(otherControl);     
    }
    @action ("input valid format on Download page")
    public async enterTextonCommentField(string:any){
       await gondola.waitForClickable(this.txtComment,30);
       await gondola.enter(this.txtComment,string);
       await gondola.pressKey(KeyCode.Enter); 
    }
    @action ("check valid control displayed below control on page")
    public async checkValueonField(control:any, value:any){
      await gondola.waitForClickable(control,30);
      let text = await (await gondola.get(control)).includes(value);
      gondola.checkEqual(text, true, "match text" + value);
    }
    @action ("check valid control displayed on control")
    public async checkValueNotSpaceonField(control:any, value:any){
      await gondola.waitForClickable(control,30);
      let text = await gondola.get(control);
      await gondola.checkEqual(text,value.trim());
    }
    @action ("input invalid format email on Download page")
    public async invalidFormatName(control:any,string:any, message:any, content:any){
       await gondola.wait(3);
       await gondola.waitForClickable(control,30);
       await gondola.enter(control,string);
       await gondola.pressKey(KeyCode.Enter);
       let text = await (await gondola.getText(message)).includes(content);
       gondola.checkEqual(text, true, "match text" + content);
       
    }
    @action ("input invalid format phone on Download page")
    public async invalidFormatPhone(string:any, message:any){
      await gondola.wait(3);
       await gondola.waitForClickable(this.txtPhone,30);
       await gondola.enter(this.txtPhone,string);
      // await gondola.pressKey(KeyCode.Enter);
      await gondola.click(this.txtComment); 
       let text = await (await gondola.getText(this.txtErrorPhone)).includes(message);
       gondola.checkEqual(text, true, "match text" + message);
       
    }
}    
export default new contactUsPage();  