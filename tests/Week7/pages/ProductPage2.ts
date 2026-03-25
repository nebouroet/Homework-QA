import { Page, expect } from '@playwright/test';

export class ProductPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async verifyUrl(productId: number) {
    await expect(this.page).toHaveURL(
      `https://raider-test-site.onrender.com/product/${productId}`
    );
  }

  async verifyHeading(name: string) {
    await expect(
      this.page.getByRole('heading', { name })
    ).toBeVisible();
  }

  async verifyName(name: string) {
    await expect(this.page.getByText(name)).toBeVisible();
  }

  async verifyAddToCartButton() {
    await expect(
      this.page.getByRole('button', { name: 'Add to Cart' })
    ).toBeVisible();
  }

  async verifyDescription(snippet: string) {
    await expect(
      this.page.getByText(snippet, { exact: false })
    ).toBeVisible({ timeout: 6000 });
  }

  async verifyPrice(price: string) {
    await expect(
      this.page.getByText(price)
    ).toBeVisible({ timeout: 5000 });
  }

  async verifyAllDetails(opts: {
    id: number;
    name: string;
    price: string;
    descriptionSnippet: string;
  }) {
    await this.verifyUrl(opts.id);
    await this.verifyHeading(opts.name);
    await this.verifyName(opts.name);
    await this.verifyAddToCartButton();
    await this.verifyDescription(opts.descriptionSnippet);
    await this.verifyPrice(opts.price);
  }
}