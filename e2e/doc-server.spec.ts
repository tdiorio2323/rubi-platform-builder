import { test, expect } from '@playwright/test';

test('serves GEMINI.md at root', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('body')).toContainText('Gemini Docs');
});

