
import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {

    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly loginOrRegisterLink: Locator;


constructor(page: Page) {

    this.page = page;
    this.usernameInput = page.locator('#loginFrm_loginname');
    this.passwordInput = page.locator('#loginFrm_password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.loginOrRegisterLink = page.getByRole('link', { name: 'Login or register' });
}

async goto() {
    await this.page.goto('/'); 
    await this.loginOrRegisterLink.click();
  }

async login(username: string, password: string) {

    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
 }

}
