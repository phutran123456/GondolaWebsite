import { action, gondola, locator, page } from "@logigear/gondola";


@page
export class becomePartnerPage {
    constructor() {
        this._PricingPageUrl = "https://testarchitect.com/product/testarchitect-team-and-testarchitect-enterprise";
    }
    _PricingPageUrl: string;
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
        await gondola.waitForElement(link,10);    
        await gondola.click(link);
    }
}
export default new becomePartnerPage();