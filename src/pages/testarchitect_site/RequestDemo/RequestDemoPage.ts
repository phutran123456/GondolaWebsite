import { action, gondola, locator, page,KeyCode } from "@logigear/gondola";

@page
export class RequestDemoPage {
    constructor() {
        this._PricingPageUrl = "https://testarchitect.com/product/testarchitect-team-and-testarchitect-enterprise";
    }
    _PricingPageUrl: string;
    @locator
    public btRequestDemo="//span[contains(.,'Request Demo')]";
    @locator
    //public labelErrorInput="/following-sibling::label[@class='error']";
    public labelErrorInput="label[contains(@class,'error')]";
    @locator
    public txtFirstName="//input[@id='inputFirstName']";
    @locator
    public txtErrorFirstName="//div[contains(@class,'firstName')]"+this.labelErrorInput;
    @locator
    public txtLastName="//input[@id='inputLastName']";
    @locator
    public txtErrorLastName="//div[contains(@class,'lastName')]"+this.labelErrorInput;
    @locator
    public txtEmail="//input[@id='inputEmail']";
    @locator
    public txtErrorEmail = "//div[contains(@class,'email')]"+this.labelErrorInput;
    @locator
    public txtCompany="//input[@id='inputCompany']";
    @locator
    public txtErrorCompany = "//div[contains(@class,'company')]"+this.labelErrorInput;
    @locator
    public cmbSelectBusiness="//select[@id='selectBusiness']";
    @locator
    public txtSelectBusiness="//div[contains(@class,'selectBusiness')]"+this.labelErrorInput;
    @locator
    public txtPhone="//input[@id='inputPhone']";
    @locator
    public txtErrorPhone="//div[contains(@class,'phone')]"+this.labelErrorInput;
    @locator
    public cmbCountry="//select[@id='ContactUs_country']";
    @locator
    public txtErrorCountry="//div[contains(@class,'country')]"+this.labelErrorInput;
    @locator
    public cmbSelectTestingNeeds="//select[@id='selectTestingNeeds']";
    @locator
    public txtSelectTestingNeeds="//div[contains(@class,'testingNeed')]"+this.labelErrorInput;
    @locator
    public txtComment="//textarea[@name='comment']";
    @locator
    public txtErrorComment = this.txtComment+this.labelErrorInput;
    @locator
    public chkSubscribe="#chkSubscribe";
    @locator
    public btRequestNow = "//button[@id='sbutton']";

    @action("open Request Demo form", "Navigate to Pricing page")
    public async navigateTo() {
        await gondola.navigate(this._PricingPageUrl);
        await gondola.maximize();
        this.clickorOpenLink(this.btRequestDemo);
    }
    

    @action(" check GUI")
    public async checkGUI(){
        await gondola.waitForClickable(this.txtEmail,60); 
           
        await gondola.checkControlExist(this.txtFirstName);
        await gondola.checkControlExist(this.txtLastName);
        await gondola.checkControlExist(this.txtEmail); 
        await gondola.checkControlExist(this.txtCompany);
        await gondola.checkControlExist(this.cmbSelectBusiness);
        await gondola.checkControlExist(this.txtPhone);
        await gondola.checkControlExist(this.cmbCountry);
        await gondola.checkControlExist(this.cmbSelectTestingNeeds);
        await gondola.checkControlExist(this.txtComment);
        await gondola.checkControlExist(this.chkSubscribe);
        await gondola.checkControlExist(this.btRequestNow);
       
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
        await gondola.pressKey(KeyCode.Enter);
        await this.checkErrorMessage(this.txtErrorEmail,error);
        
    }

}    
export default new RequestDemoPage();