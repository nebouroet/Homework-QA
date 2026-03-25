import { Locator, Page, expect } from '@playwright/test';

export class NavigationPage {

    readonly page: Page;
    readonly apparelLink: Locator;
    readonly makeupLink: Locator;
    readonly skincareLink: Locator;
    readonly fragranceLink: Locator;
    readonly menLink: Locator;
    readonly haircareLink: Locator;
    readonly booksLink: Locator;

    constructor(page: Page) {

        this.page = page;
        this.apparelLink = page.getByRole('link', {name: 'Apparel & Accessories', exact: true});
        this.makeupLink = page.getByRole('link', {name: 'Makeup', exact: true});
        this.skincareLink = page.getByRole('link', {name: 'Skincare', exact: true});
        this.fragranceLink = page.getByRole('link', {name: 'Fragrance', exact: true});
        this.menLink = page.getByRole('link', { name: 'Men', exact: true });
        this.haircareLink = page.getByRole('link', { name: 'Hair Care', exact: true });
        this.booksLink = page.getByRole('link', { name: 'Books', exact: true });   
    }

    async clickApparel() {
    await this.apparelLink.click();
    await expect(this.page).toHaveURL('/?category=Apparel');
  }

    async clickMakeup() {
    await this.makeupLink.click();
    await expect(this.page).toHaveURL('/?category=Makeup');
  } 

    async clickSkincare() {
    await this.skincareLink.click();
    await expect(this.page).toHaveURL('/?category=Skincare');
  }

    async clickFragrance() {
    await this.fragranceLink.click();
    await expect(this.page).toHaveURL('/?category=Fragrance');
  } 

    async clickMen() {
    await this.menLink.click();
    await expect(this.page).toHaveURL('/?category=Men');
  }

    async clickHaircare() {
    await this.haircareLink.click();
    await expect(this.page).toHaveURL('/?category=Hair%20Care');
  }

    async clickBooks() { 
        await this.booksLink.click();
        await expect(this.page).toHaveURL('/?category=Books');
    }   
}