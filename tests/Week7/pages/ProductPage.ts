import { Locator, Page, expect } from '@playwright/test';

export class ProductPage {

    readonly page: Page;
    readonly productsLink: Locator;
    readonly productCards: Locator;


constructor(page: Page) {
   
    this.page = page;
    this.productsLink = page.getByRole('navigation').getByRole('link', { name: 'Home' });
    this.productCards = page.locator('.product-link');
}

async navigateToProducts() {

    await this.page.goto('/');
    await this.productsLink.click()
}

async verifyAllProductsAreVisible() {
    await expect(this.productCards.first()).toBeVisible();
    const allProducts = await this.productCards.all();
    for (const product of allProducts) {
      await expect(product).toBeVisible();
    }
  }
}
