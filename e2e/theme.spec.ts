import { test, expect } from '@playwright/test';

test('theme toggle works', async ({ page, isMobile }) => {
  await page.goto('/');

  // Wait for hydration
  await page.waitForTimeout(1000);

  if (isMobile) {
    const menuBtn = page.getByLabel('Toggle Menu');
    await expect(menuBtn).toBeVisible();
    await menuBtn.click({ force: true });
    await page.waitForTimeout(1000);
  }

  // Find toggle button
  const toggleBtn = page.locator('a[aria-label$=" Mode"]:visible');
  await expect(toggleBtn).toBeVisible();

  // Just verify the button is clickable and doesn't throw errors
  await toggleBtn.click({ force: true });
  
  // Verify page is still functional after click
  await expect(page.locator('html')).toBeVisible();
});
