import { test, expect} from'@playwright/test';

test('products are visible', async ({ page }) => {

        await page.goto('/');

    await page.getByRole('navigation').getByRole('link', { name: 'Home' }).click();
    const productItems = page.locator('.product-link');
    await expect(productItems).toHaveCount(8);
    await expect(productItems.first()).toBeVisible();

    const allProducts = await productItems.all();

    for (const product of allProducts) {
    await expect(product).toBeVisible();
  }
  const count = await productItems.count();
  console.log(`Found ${count} products.`);
  expect(count).toBeGreaterThan(0);
});