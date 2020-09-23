import { action, gondola, locator, page } from "gondolajs";

@page
export class loginPage {
    
    
    @locator
    public txt_username = "";
    public txt_password = "";
    public bt_Login = "";
    
    @action(" login account")
    public async login(username: string ,password: string){
        await gondola.waitForElement(this.txt_username);
        await gondola.enter(this.txt_username,username );
        await gondola.enter(this.txt_password,password);
        await gondola.click(this.bt_Login);

    }
}
export default new loginPage();