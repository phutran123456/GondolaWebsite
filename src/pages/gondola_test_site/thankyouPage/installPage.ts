import { action, gondola, locator, page } from "gondolajs";


@page
export class installPage {
    @locator
    public btInstall ="//button[@class='ms-Button ux-button install ms-Button--default root-39']";
    
    @action(" check Install Gondola page")
    public async checkInstallPage(){
        
        await gondola.waitForElement(this.btInstall,30);
        await gondola.checkControlExist(this.btInstall);
        
    }
    @action(" click link")
    public async openLink(link:any){
       // await gondola.waitForElement(this.lnk_WhyGondola);    
       // await gondola.click(this.lnk_WhyGondola);
        await gondola.waitForClickable(link,60);    
        await gondola.click(link);

    }
}
export default new installPage();