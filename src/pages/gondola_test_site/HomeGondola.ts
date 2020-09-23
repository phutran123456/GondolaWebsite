import { action, gondola, locator, page } from "gondolajs";

@page
export class homeGondolaPage {
    constructor() {
        this._homePageUrl = "https://gondolatest.com/en/welcome/";
    }
    _homePageUrl: string;
    @locator
    public lnk_Login = "//main[@class='capsule']//h1";
    @action("open website Gondola", "Navigate to home page")
    public async navigateTo() {
        await gondola.navigate(this._homePageUrl);
        await gondola.maximize();
    }
    @action("select login tab")
    public async login(){
        await gondola.waitForElement(this.lnk_Login);
        await gondola.click(this.lnk_Login);

    }
}
export default new homeGondolaPage();