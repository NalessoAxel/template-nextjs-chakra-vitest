import { test, expect } from '@playwright/test';

test('should navigate to the about page', async ({ page }) => {
  await page.goto('/');
  await page.click('text=About');
  await expect(page).toHaveURL('/About');
  await expect(page.locator('h1')).toContainText('Welcome to the About page');
});
