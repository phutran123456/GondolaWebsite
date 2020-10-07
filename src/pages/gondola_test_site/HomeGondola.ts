import { action, gondola, locator, page } from "gondolajs";

@page
export class homeGondolaPage {
    constructor() {
        this._homePageUrl = "https://stage1.gondolatest.com/en/welcome-2/";
    }
    _homePageUrl: string;
    @locator
    public lnkLogin = "//header[@class='banner navbar navbar-default navbar-static-top dark-header']//a[.='Log In']";
    @locator
    public lnkSignUp = "//header[@class='banner navbar navbar-default navbar-static-top dark-header']//a[.='Sign Up']";
    
    
    
    @action("open website Gondola", "Navigate to home page")
    public async navigateTo() {
        await gondola.navigate(this._homePageUrl);
        await gondola.maximize();
    }
    @action("select login tab")
    public async login(){
        await gondola.waitForElement(this.lnkLogin);
        await gondola.click(this.lnkLogin);

    }
    @action("select Sign Up tab")
    public async signup(){
        await gondola.waitForElement(this.lnkSignUp);
        await gondola.click(this.lnkSignUp);

    }
    

    
};
export default new homeGondolaPage();