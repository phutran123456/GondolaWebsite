import { action, gondola, locator, page,KeyCode } from "@logigear/gondola";

@page
export class RequestDemoPage {
    constructor() {
        this._PricingPageUrl = "https://stage1.testarchitect.com/product/testarchitect-team-and-testarchitect-enterprise";
    }
    _PricingPageUrl: string;
    @locator
    public btRequestDemo="//a[contains(.,'Request Demo')]";
    @locator
    //public labelErrorInput="/following-sibling::label[@class='error']";
    public labelErrorInput="/label[contains(@class,'error')]";
    @locator
    public txtFirstName="//input[@id='inputFirstName']";
    @locator
    public txtErrorFirstName="//div[contains(@class,'first_name')]"+this.labelErrorInput;
    @locator
    public txtLastName="//input[@id='inputLastName']";
    @locator
    public txtErrorLastName="//div[contains(@class,'last_name')]"+this.labelErrorInput;
    @locator
    public txtEmail="//input[@id='inputEmail']";
    @locator
    public txtErrorEmail = "//div[contains(@class,'email')]"+this.labelErrorInput;
   
    @locator
    public cmbSelectBusiness="//select[@id='selectBusiness']";
    @locator
    public txtErrorSelectBusiness="//div[contains(@class,'selectBusiness')]"+this.labelErrorInput;
    @locator
    public txtPhone="//input[@id='inputPhone']";
    @locator
    public btFlag="//div[@class='iti iti--allow-dropdown']//div[@class='iti__selected-flag']";
    @locator
    public listFlagPhone="#iti-0__country-listbox";
    @locator
    public cbxFlagJPPhone="//li[@id='iti-0__item-jp-preferred']/span[contains(., 'Japan')]";
    @locator
    public cbxFlagVNPhone="//li[@id='iti-0__item-vn-preferred']/span[contains(., 'Vietnam')]";
    @locator
    public cbxFlagUSPhone="//li[@id='iti-0__item-us-preferred']/span[contains(., 'United States')]";
    @locator
    public txtErrorPhone="//div[contains(@class,'phone')]"+this.labelErrorInput;
    @locator
    public cmbSelectTestingNeeds="//select[@id='selectTestingNeeds']";
    @locator
    public buttonSelectTestingNeeds ="//button[@class='multiselect dropdown-toggle btn btn-default']";
    @locator
    public containerSelectTestingNeeds ="//ul[@class='multiselect-container dropdown-menu']";
    @locator
    public chb ="//label[@class='checkbox']";
    @locator
    public chbSelectAll =this.chb+"/input[@value='multiselect-all']";
    @locator
    public chbSelectWebTesting =this.chb+"/input[@value='Web Testing']";
    @locator
    public chbSelectMobileTesting =this.chb+"/input[@value='Mobile Testing']";
    @locator
    public chbSelectAPITesting =this.chb+"/input[@value='API Testing']";
    @locator
    public chbSelectDesktopTesting =this.chb+"/input[@value='Desktop Windows Testing']";
    @locator
    public txtErrorSelectTestingNeeds="//div[contains(@class,'selectTestingNeeds')]"+this.labelErrorInput;
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
        await gondola.wait(3);
        await gondola.checkControlExist(this.btRequestDemo);
        await gondola.click(this.btRequestDemo);
      
       
        //let  variable= await gondola.doesControlExist(this.btRequestDemo);
        //if(variable==true){
        //     await gondola.doubleClick(this.btRequestDemo);
        //}
    }
    

    @action(" check GUI")
    public async checkGUI(){
        await gondola.waitForClickable(this.txtEmail,60); 
           
        await gondola.checkControlExist(this.txtFirstName);
        await gondola.checkControlExist(this.txtLastName);
        await gondola.checkControlExist(this.txtEmail); 
        await gondola.checkControlExist(this.cmbSelectBusiness);
        await gondola.checkControlExist(this.txtPhone);
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
    @action ("input valid format on page")
    public async enterValidFormat(control:any,string:any){

       await gondola.wait(3);
       await gondola.waitForClickable(control,30);
       await gondola.enter(control,string);
       await gondola.pressKey(KeyCode.Enter);
    }
    
    @action ("check valid control displayed on control")
    public async checkValueNotSpaceonField(control:any, value:any){
      await gondola.waitForClickable(control,30);
      let text = await gondola.get(control);
      await gondola.checkEqual(text,value.trim());
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
    @action ("input invalid format email on Download page")
    public async invalidFormat(control:any,string:any, message:any, content:any){
       await gondola.wait(3);
       await gondola.waitForClickable(control,30);
       await gondola.enter(control,string);
       await gondola.pressKey(KeyCode.Enter);
       let text = await (await gondola.getText(message)).includes(content);
       gondola.checkEqual(text, true, "match text" + content);
       
    }
    @action ("input invalid format phone on Download page")
    public async invalidFormatPhone(string:any, message:any){
       await gondola.waitForClickable(this.txtPhone,30);
       await gondola.enter(this.txtPhone,string);
       await gondola.pressKey(KeyCode.Enter);
       let text = await (await gondola.getText(this.txtErrorPhone)).includes(message);
       gondola.checkEqual(text, true, "match text" + message);
       
    }
    @action ("select item Select Services on Download page")
    public async checkItemonSelectTestingNeeds(item:any){
       if (!(await gondola.doesControlExist(this.containerSelectTestingNeeds))) {
         await gondola.waitForClickable(this.buttonSelectTestingNeeds,30);
         await gondola.click(this.buttonSelectTestingNeeds);
       }
      // await gondola.waitForClickable(this.containerSelectMobileTesting,30);
      await gondola.waitForClickable(item,30);
      await gondola.click(item);
    }
    @action ("select item Select Services on Download page")
    public async selectItemonSelectTestingNeeds(item:any, value:any){
      await this.checkItemonSelectTestingNeeds(item);
       let text = await (await gondola.getText(this.buttonSelectTestingNeeds)).includes(value);
       gondola.checkEqual(text, true, "match text" + value);
       
    }
    
    @action ("input number phone depend on flag national")
    public async inputPhonewithItemPlag(flag:any,value:any, numberphone:any){
      if (!(await gondola.doesControlExist(this.listFlagPhone))) {
         await gondola.waitForClickable(this.btFlag,30);
         await gondola.click(this.btFlag);
       }
      // await gondola.waitForClickable(this.containerSelectMobileTesting,30);
      await gondola.waitForClickable(flag,30);
      await gondola.click(flag);
      await gondola.checkControlProperty(this.btFlag,"title",value);
      await this.enterValidFormat(this.txtPhone,numberphone);
      await gondola.checkControlNotExist(this.txtErrorPhone);
    }
    
    @action ("unselect item Select Services on Download page")
    public async unselectItemonTestingNeeds(item:any, value:any){
       await this.checkItemonSelectTestingNeeds(item);
       let text = await (await gondola.getText(this.buttonSelectTestingNeeds)).includes(value);
       gondola.checkEqual(text, false, "match text" + value);
       
    }

}    
export default new RequestDemoPage();