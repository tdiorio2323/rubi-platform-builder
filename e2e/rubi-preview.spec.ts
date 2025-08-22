import { test, expect } from '@playwright/test';

test('monthly revenue and preview blocks update', async ({ page }) => {
  await page.goto('/rubi');

  // Select features with known revenue totals
  await page.getByRole('button', { name: /Authentication System/i }).click(); // $5,000
  await page.getByRole('button', { name: /Content Management/i }).click();     // $8,000

  // Assert Monthly Revenue reflects $13,000 total
  const revenueRow = page.locator('div:has-text("Monthly Revenue")').first();
  await expect(revenueRow).toContainText('$13,000');

  // Live Preview area should show blocks for selected features
  const previewAside = page.getByRole('complementary');
  await expect(previewAside).toContainText('Login Portal');      // from auth preview
  await expect(previewAside).toContainText('Content Library');   // from content preview
});

