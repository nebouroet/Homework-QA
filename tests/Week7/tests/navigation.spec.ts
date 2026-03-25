import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });


test('Apparel', async ({ page }) => {
    
    await page.getByRole('link', { name: 'Apparel & Accessories', exact: true }).click();
    await expect(page).toHaveURL('/?category=Apparel');
})

test('Makeup', async ({ page }) => {
    
    await page.getByRole('link', { name: 'Makeup', exact: true}).click();
    await expect(page).toHaveURL('/?category=Makeup');
})

test('Skincare', async ({ page }) => {

    await page.getByRole('link', { name: 'Skincare', exact: true}).click();
    await expect(page).toHaveURL('/?category=Skincare');
})
})