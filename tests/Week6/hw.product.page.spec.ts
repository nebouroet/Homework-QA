import { test, expect } from '@playwright/test';

test('browse to products and verify detail information', async ({ page }) => {
  
await page.goto('/');
await page.getByRole('link', {name: 'Skinsheen Bronzer Stick'}).click();

await expect(page).toHaveURL('https://raider-test-site.onrender.com/product/1');
await expect(page.getByRole('heading', { name: 'Skinsheen Bronzer Stick' })).toBeVisible();
await expect(page.getByText('Skinsheen Bronzer Stick')).toBeVisible();
await expect(page.getByRole('button', { name: 'Add to Cart' })).toBeVisible();

const description = page.getByText('A smooth, blendable bronzer stick', {exact: false});
await expect(description).toBeVisible({ timeout: 6000 });

const price = page.getByText('$29.50');
await expect(price).toBeVisible({ timeout: 5000 });

})


// loop //


