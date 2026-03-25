// Part A: Add baseURL to config//
// Done :))//

//Part B: Add more tests//
//1.  Navigate to Products page, verify at least one product is visible//

import { test, expect } from '@playwright/test';

test('product.page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link',{ name: 'Makeup', exact: true }).click();
const bronzerStick = page.getByRole('link', { name: 'Skinsheen Bronzer Stick', exact: false });
await expect(bronzerStick).toBeVisible();})

//2.  Click a product, verify the product detail page loads//

test('product.details', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link',{ name: 'Skinsheen Bronzer Stick', exact: false }).click();
    
const bronzerStick = page.getByText('Skinsheen Bronzer Stick Makeup $29.50 A smooth, blendable bronzer stick that');
await expect(bronzerStick).toBeVisible();})

//3. Use the navigation menu to visit each page//

test('menu.items', async ({ page }) => {
    await page.goto('/');
  await page.locator('body > header > nav > div > ul > li:nth-child(2) > a').click();
await expect (page).toHaveURL('https://raider-test-site.onrender.com/?category=Apparel');
await page.locator('body > header > nav > div > ul > li:nth-child(3) > a').click();
await expect (page).toHaveURL('https://raider-test-site.onrender.com/?category=Makeup');
await page.locator('body > header > nav > div > ul > li:nth-child(4) > a').click();
await expect (page).toHaveURL('https://raider-test-site.onrender.com/?category=Skincare');
await page.locator('body > header > nav > div > ul > li:nth-child(5) > a').click();
await expect (page).toHaveURL('https://raider-test-site.onrender.com/?category=Fragrance');
await page.locator('body > header > nav > div > ul > li:nth-child(6) > a').click();
await expect (page).toHaveURL('https://raider-test-site.onrender.com/?category=Men');
await page.locator('body > header > nav > div > ul > li:nth-child(7) > a').click();
await expect (page).toHaveURL('https://raider-test-site.onrender.com/?category=Hair%20Care');
await page.locator('body > header > nav > div > ul > li:nth-child(8) > a').click();
await expect (page).toHaveURL('https://raider-test-site.onrender.com/?category=Books');
  await page.getByRole('navigation').getByRole('link', { name: 'Home' }).click();
await expect (page).toHaveURL('https://raider-test-site.onrender.com/');
})


//Part C: Practice debugging//

test.only('debug exercise: failed login', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Login or register' }).click();

    //  I changed 'Login name' to 'Username-Box'//
    
    await page.getByRole('textbox', { name: 'Username-Box' }).fill('aguspe');
    
    await page.getByRole('textbox', { name: 'Password' }).fill('12341234');
    await page.getByRole('button', { name: 'Login' }).click();
});



