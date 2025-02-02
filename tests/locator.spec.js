// @ts-check
import { test, expect } from '@playwright/test';

test('Testcase Login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  const inputUsername = page.locator('#user-name');
  //const inputUsername = page.locator('text=Log in');
  await inputUsername.fill('standard_user');
  await expect(inputUsername).toHaveValue('standard_user');

  const inputPassword = page.locator('#password');
  await inputPassword.fill('secret_sauce');
  await expect(inputPassword).toHaveValue('secret_sauce');

  const buttonLogin = page.locator('#login-button');
  //const buttonLogin = page.locator('text=Login');
  await buttonLogin.click();
});

  


