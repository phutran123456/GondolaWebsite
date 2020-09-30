import { action, gondola, locator, page } from "gondolajs";


@page
export class downloadPage {
    @locator
    public btInstall ="//button[@class='ms-Button ux-button install ms-Button--default root-39']";
    
    public async checkDownloadPage(){
        await gondola.waitForElement(this.btInstall,30);
        await gondola.checkControlExist(this.btInstall);
        
    }
}
export default new downloadPage();