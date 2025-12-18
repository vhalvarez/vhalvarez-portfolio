import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Victor Alvarez/);
});

test('has heading', async ({ page }) => {
  await page.goto('/');
  // Text is encrypted: <span aria-label="Hi, I'm Victor 👋" ...>
  // We match by label.
  await expect(page.getByLabel(/Victor/i)).toBeVisible();
});
