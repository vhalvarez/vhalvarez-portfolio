import { test, expect } from '@playwright/test';

test('theme toggle works', async ({ page, isMobile }) => {
  await page.goto('/');

  if (isMobile) {
    // Open dock logic
    const menuBtn = page.getByLabel('Toggle Menu');
    await expect(menuBtn).toBeVisible();
    await menuBtn.click({ force: true });
    await page.waitForTimeout(1000); // Allow animation content to mount
  }

  // Find toggle by partial label "Mode" (Light Mode / Dark Mode) targeting only visible element
    // Use :visible to avoid strict mode violation (Desktop vs Mobile versions)
    const toggleBtn = page.locator('a[aria-label$=" Mode"]:visible');
    await expect(toggleBtn).toBeVisible();

  // Check initial state (assuming dark default, so button says "Light Mode")
  // But if system is light, it might render "Dark Mode".
  // Let's just click and check HTML class change.
  
  const html = page.locator('html');
  const initialClass = await html.getAttribute('class') || '';
  const isDarkInfo = initialClass.includes('dark');
  
  await toggleBtn.click();
  
  // Wait for change
  await expect(html).not.toHaveClass(initialClass); // Basic check: class changed? 
  // Better: check specific 'dark' class toggle
  if (isDarkInfo) {
    await expect(html).not.toHaveClass(/dark/);
  } else {
    await expect(html).toHaveClass(/dark/);
  }
});
