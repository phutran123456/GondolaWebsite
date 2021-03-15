import { action, gondola, locator, page,KeyCode } from "@logigear/gondola";
@page
export class thankyouPage {
    @locator
    public btAddChrome="//a[contains(text(),'Add to Chrome')]";
    @locator
    public btAddEdge="//a[contains(text(),'Add to Edge')]";
    @locator
    public title="//h4/strong[contains(text(),'Cut down')]";
    
    @action(" click on control")
    public async clickorOpenLink(control: any) {
    await gondola.waitForClickable(control, 60);
    await gondola.click(control);
    }
    @action(" enter value on input control")
    public async checkGUI(control: any, content:any ){

        await gondola.waitForElement(control,30);
        await gondola.checkControlExist(control);
        await gondola.checkControlExist(this.btAddChrome);
        await gondola.checkControlExist(this.btAddEdge);
        let text = await (await gondola.getText(control)).includes(content);
        gondola.checkEqual(text, true, "match text" + content); 
         
    }
}    
export default new thankyouPage(); 