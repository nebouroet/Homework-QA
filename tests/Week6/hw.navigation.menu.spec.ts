import { test, expect } from '@playwright/test';

test.describe('Navigation Menu', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    
});

test('apparel', async ({ page }) => {

  await page.getByRole('link', { name: 'Apparel & Accessories' }).click();
await expect (page).toHaveURL('/?category=Apparel');
await expect (page.getByRole('heading', { name: 'Apparel' })).toBeVisible();
})

test('Makeup', async ({ page }) => {
    
  await page.getByRole('link', { name: 'Makeup', exact: true }).click();
await expect (page).toHaveURL('/?category=Makeup');
await expect (page.getByRole('heading', { name: 'Makeup' })).toBeVisible();
})

test('Skincare', async ({ page }) => {
    
      await page.getByRole('link', { name: 'Skincare', exact: true }).click();
    await expect (page).toHaveURL('/?category=Skincare');
await expect (page.getByRole('heading', { name: 'Skincare' })).toBeVisible();
})

test('Fragrance', async ({ page }) => {
    await page.goto('/');
await page.getByRole('link', { name: 'Fragrance', exact: true }).click();
await expect (page).toHaveURL('/?category=Fragrance');
await expect (page.getByRole('heading', { name: 'Fragrance' })).toBeVisible();
})

test('Men', async ({ page }) => {

await page.getByRole('link', { name: 'Men', exact: true }).click();

const heading = page.getByRole('heading', { name: 'Men', exact: true });
await expect (page).toHaveURL('https://raider-test-site.onrender.com/?category=Men');
await expect(heading).toBeVisible({ timeout: 5000 })
})

test('Hair Care', async ({ page }) => {

    await page.getByRole('link', { name: 'Hair Care', exact: true }).click();
await expect (page).toHaveURL('/?category=Hair%20Care');
await expect (page.getByRole('heading', { name: 'Hair Care' })).toBeVisible();
})

test('Books', async ({ page }) => {

    await page.getByRole('link', { name: 'Books', exact: true }).click();
await expect (page).toHaveURL('/?category=Books');
await expect (page.getByRole('heading', { name: 'Books' })).toBeVisible();
})

test('Home', async ({ page }) => {

    await page.getByRole('navigation').getByRole('link', { name: 'Home' }).click();
await expect (page).toHaveURL('/');

})
})


