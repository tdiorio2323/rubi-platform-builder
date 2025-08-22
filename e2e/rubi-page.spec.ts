import { test, expect } from '@playwright/test';

test('Rubi page renders header', async ({ page }) => {
  await page.goto('/rubi');
  await expect(page.getByRole('heading', { name: /Creator Platform Builder/i })).toBeVisible();
});

