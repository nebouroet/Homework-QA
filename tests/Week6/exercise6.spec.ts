import { test, expect } from '@playwright/test';

// successful login test //

test('successfull.login', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link',{ name: 'Login or register' }).click();
    await page.getByRole('textbox', { name: 'Login name'} ).fill('aguspe');
    await page.getByRole('textbox', { name: 'Password'} ).fill('12341234');
await page.getByRole('button', {name: 'Login'}).click();

await expect(page).toHaveURL('https://raider-test-site.onrender.com/index.php?rt=account/account')})

// failed login test //


test('failed.login', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link',{ name: 'Login or register' }).click();
    await page.getByRole('textbox', { name: 'Login name'} ).fill('wrong');
    await page.getByRole('textbox', { name: 'Password'} ).fill('wrong');
await page.getByRole('button', {name: 'Login'}).click();

await expect (page.getByText('Error: Incorrect login or')).toBeVisible()})

// empty login test //

//first ver//

test('empty.login', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link',{ name: 'Login or register' }).click();
await page.getByRole('button', {name: 'Login'}).click();
const message = await page.getByRole('textbox', {name: 'Login name'}).evaluate((element: HTMLInputElement) => element.validationMessage);
expect(message).toBe('Please fill out this field.'); })

//second ver//

test('empty.login2', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link',{ name: 'Login or register' }).click();
await page.getByRole('button', {name: 'Login'}).click();
const loginInput = page.getByLabel('Login Name', { exact: false });
  const passInput = page.getByLabel('Password', { exact: false });
  await expect(loginInput).toHaveAttribute('required', '');
  await expect(passInput).toHaveAttribute('required', '');
})

