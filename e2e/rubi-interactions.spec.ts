import { test, expect } from '@playwright/test';

async function getFeaturesSelectedCount(page: import('@playwright/test').Page) {
  const row = page.locator('div:has-text("Features Selected")').first();
  const countText = await row.locator('span.font-semibold').last().innerText();
  return parseInt(countText, 10);
}

test('feature toggles update summary count', async ({ page }) => {
  await page.goto('/rubi');

  // Initial state
  await expect(page.getByRole('heading', { name: /Creator Platform Builder/i })).toBeVisible();
  await expect(page.getByText('Features Selected')).toBeVisible();
  const featuresCount = page.locator('div:has(> span:text-is("Features Selected")) span.font-semibold');
  await expect(featuresCount).toHaveText(/^0$/);

  // Toggle a couple features on
  await page.getByRole('button', { name: /Authentication System/i }).click();
  await page.getByRole('button', { name: /Content Management/i }).click();
  await expect(featuresCount).toHaveText(/^2$/);

  // Development Time should reflect 2 + 3 = 5 weeks
  await expect(page.getByText('Development Time')).toBeVisible();
  await expect(page.locator('div:has-text("Development Time")').first()).toContainText('5 weeks');

  // Toggle one off
  await page.getByRole('button', { name: /Authentication System/i }).click();
  await expect(featuresCount).toHaveText(/^1$/);
});
