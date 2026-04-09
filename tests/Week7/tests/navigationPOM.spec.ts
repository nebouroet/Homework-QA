import { test, expect } from '@playwright/test';
import { NavigationPage } from '../pages/NavigationPage';

test.describe('Navigation with POM', () => {
  
    let navPage: NavigationPage;

    test.beforeEach(async ({ page }) => {

        navPage = new NavigationPage(page);
    await page.goto('/');
  });

  test('Apparel', async ({ page }) => {
await navPage.navigateToApparel();
await expect(page).toHaveURL('/?category=Apparel');  });

  test('Makeup', async ({ page }) => {
    await navPage.navigateToMakeup();
    await expect(page).toHaveURL('/?category=Makeup');  });


  test('Skincare', async ({ page }) => {
    await navPage.navigateToSkincare();
    await expect(page).toHaveURL('/?category=Skincare');
  });

    test('Fragrance', async ({ page } ) => {
    await navPage.navigateToFragrance();
    await expect(page).toHaveURL('/?category=Fragrance');
  });

    test('Men', async ({ page }) => {
    await navPage.navigateToMen();
    await expect(page).toHaveURL('/?category=Men');
  });

    test('Hair Care', async ({ page }) => {
    await navPage.navigateToHaircare();
    await expect(page).toHaveURL('/?category=Hair%20Care');
  });   

    test('Books', async ({ page }) => {
        await navPage.navigateToBooks();
        await expect(page).toHaveURL('/?category=Books'); 
    })
})    