import { test, expect } from '@playwright/test';
import fs from 'fs/promises';
import path from 'path';
import os from 'os';

test('export config downloads valid JSON', async ({ page }) => {
  await page.goto('/rubi');

  // Select two features: auth (2 weeks) + content (3 weeks)
  await page.getByRole('button', { name: /Authentication System/i }).click();
  await page.getByRole('button', { name: /Content Management/i }).click();

  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: /Export Config/i }).click(),
  ]);

  // Persist the download to a temp file so we can read it
  const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), 'rubi-export-'));
  const targetPath = path.join(tmpDir, 'export.json');
  await download.saveAs(targetPath);

  const raw = await fs.readFile(targetPath, 'utf8');
  const data = JSON.parse(raw);

  expect(Array.isArray(data.selectedFeatures)).toBeTruthy();
  expect(new Set(data.selectedFeatures)).toEqual(new Set(['auth', 'content']));
  expect(data.summary?.totalFeatures).toBe(2);
  expect(data.summary?.developmentWeeks).toBe(5);
});

