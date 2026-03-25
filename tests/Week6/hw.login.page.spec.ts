import { test, expect } from '@playwright/test';

test.describe('Login Page', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    await page.getByRole('link',{ name: 'Login or register' }).click();
    });


test('successfull.login', async ({ page }) => {
   
    await page.getByRole('textbox', { name: 'Login name'} ).fill('aguspe');
    await page.getByRole('textbox', { name: 'Password'} ).fill('12341234');
await page.getByRole('button', {name: 'Login'}).click();

await expect(page).toHaveURL('/index.php?rt=account/account')})



test('failed.login', async ({ page }) => {
    
    await page.getByRole('textbox', { name: 'Login name'} ).fill('wrong');
    await page.getByRole('textbox', { name: 'Password'} ).fill('wrong');
await page.getByRole('button', {name: 'Login'}).click();

await expect (page.getByText('Error: Incorrect login or')).toBeVisible()})



test('empty.login2', async ({ page }) => {
   

    await page.getByRole('textbox', { name: 'Password'} ).fill('12341234');
await page.getByRole('button', {name: 'Login'}).click();

const loginInput = page.getByLabel('Login Name', { exact: false });
  const passInput = page.getByLabel('Password', { exact: false });
  await expect(loginInput).toHaveAttribute('required', '');
  await expect(passInput).toHaveAttribute('required', '');
})

test('empty.password', async ({ page }) => {
   
     await page.getByRole('textbox', { name: 'Login name'} ).fill('aguspe');
    
     await page.getByRole('button', {name: 'Login'}).click();

    const loginInput = page.getByLabel('Login Name', { exact: false });
    const passInput = page.getByLabel('Password', { exact: false });
  
    await expect(loginInput).toHaveAttribute('required', '');
    await expect(passInput).toHaveAttribute('required', '');
})


})
