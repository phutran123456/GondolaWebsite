import { action, gondola, locator, page } from "gondolajs";
import { datatest } from "../../../data/Gondola/datatest";
@page
export class downloadPage {
    
    @locator
    public linkRestart ="#restart-download";
    public txtTitle ="//h2[@class='elementor-heading-title elementor-size-default']";
    @action ("check content error message on Change Password page")
    public async checkContent( ){
        await gondola.waitForClickable(this.linkRestart,60);
        let isTitle = await (await gondola.getText(this.txtTitle)).includes(datatest.contentTitleDownload);
        await gondola.checkEqual(isTitle, true, "match text" + datatest.contentTitleDownload);
        await gondola.checkControlExist(this.linkRestart);
    }
}
export default new downloadPage();