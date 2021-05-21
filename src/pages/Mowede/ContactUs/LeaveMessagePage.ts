import { action, gondola, locator, page, KeyCode } from "@logigear/gondola";


@page
export class leaveMessagePage {
    constructor() {
        this._LeaveMessagePageUrl = "https://stage1.mowede.com/contact-us/leave-a-message";
    }
    _LeaveMessagePageUrl: string;

    @locator
    public labelErrorInput="/following-sibling::label[@class='error']";
    @locator
    public txtFirstName="//input[@name='data[firstName]']";
    @locator
    public txtErrorFirstName=this.txtFirstName+this.labelErrorInput;
    @locator
    public txtLastName="//input[@name='data[lastName]']";
    @locator
    public txtErrorLastName=this.txtLastName+this.labelErrorInput;
    @locator
    public txtEmail="//input[@name='data[email]']";
    @locator
    public txtErrorEmail = this.txtEmail+this.labelErrorInput;
    @locator
    public txtPhone="//input[@name='data[phone]']";
    @locator
    public txtErrorPhone = this.txtPhone+this.labelErrorInput;
    @locator
    public cmbSelectService="//select[@name='data[service]']";
    @locator
    public txtSelectService=this.cmbSelectService+this.labelErrorInput;
    @locator
    public txtComment="//textarea[@name='data[message]']";
    @locator
    public txtErrorComment = this.txtComment+this.labelErrorInput;
    @locator
    public btSendMessage="//button[contains(.,'SEND MESSAGE')]";
    
    @action("open become a Partner form", "Navigate to become a Partner page")
    public async navigateTo() {
        await gondola.navigate(this._LeaveMessagePageUrl);
        await gondola.maximize();
       
    }
    @action(" check GUI")
    public async checkGUI(value:any){
       
        await gondola.waitForElement(this.txtFirstName,30);
       // let isContentExist =  (await gondola.getText(this.txtContent)).includes(value);
        //await gondola.checkEqual(isContentExist, true, "matches found: " + value); 
        await gondola.checkControlExist(this.txtFirstName);
        await gondola.checkControlExist(this.txtLastName);
        await gondola.checkControlExist(this.txtEmail);
        await gondola.checkControlExist(this.txtPhone);
        await gondola.checkControlExist(this.cmbSelectService);
        await gondola.checkControlExist(this.txtComment);
        await gondola.checkControlExist(this.btSendMessage);        
    }
    @action(" click link")
    public async openPage(link:any){
        await gondola.waitForElement(link,10);    
        await gondola.click(link);
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
        await gondola.pressKey(KeyCode.Enter);
        await this.checkErrorMessage(this.txtErrorEmail,error);
        
    }
}
export default new leaveMessagePage();