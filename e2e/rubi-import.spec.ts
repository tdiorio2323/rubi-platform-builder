import { test, expect } from '@playwright/test';

test('import config updates selection and summary', async ({ page }) => {
  await page.goto('/rubi');

  // Ensure starting at 0
  const featuresCount = page.locator('div:has(> span:text-is("Features Selected")) span.font-semibold');
  await expect(featuresCount).toHaveText(/^0$/);

  // Prepare a virtual JSON file to import
  const payload = {
    name: 'rubi-rose-platform-config.json',
    mimeType: 'application/json',
    buffer: Buffer.from(JSON.stringify({ selectedFeatures: ['auth', 'content', 'ai'] })),
  } as any;

  // Set file on hidden input
  await page.setInputFiles('[data-testid="import-input"]', payload);

  // Count should update to 3, and preview should include known blocks
  await expect(featuresCount).toHaveText(/^3$/);
  await expect(page.getByRole('complementary')).toContainText('Login Portal');
  await expect(page.getByRole('complementary')).toContainText('Content Library');
});

