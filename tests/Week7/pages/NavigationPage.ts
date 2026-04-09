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

    async navigateToApparel() {
  await this.page.getByRole('link', { name: 'Apparel & Accessories', exact: true }).click();
  }

    async navigateToMakeup() {
    await this.page.getByRole('link', { name: 'Makeup', exact: true  }).click();
  } 

    async navigateToSkincare() {
    await this.page.getByRole('link', { name: 'Skincare', exact: true }).click();
  }

    async navigateToFragrance() {
    await this.page.getByRole('link', { name: 'Fragrance', exact: true }).click();
  } 

    async navigateToMen() {
    await this.page.getByRole('link', { name: 'Men', exact: true }).click();
  }

    async navigateToHaircare    () {
    await this.page.getByRole('link', { name: 'Hair Care', exact: true }).click();
  }

    async navigateToBooks() { 
        await this.page.getByRole('link', { name: 'Books', exact: true }).click();
    }   
}