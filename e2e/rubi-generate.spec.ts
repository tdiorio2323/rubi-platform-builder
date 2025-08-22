import { test, expect } from '@playwright/test';
import fs from 'fs/promises';
import path from 'path';
import os from 'os';

test('generate code downloads scaffold ts', async ({ page }) => {
  await page.goto('/rubi');

  // Select two features
  await page.getByRole('button', { name: /Authentication System/i }).click();
  await page.getByRole('button', { name: /Content Management/i }).click();

  // Trigger Generate Code and capture download
  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('button', { name: /Generate Code/i }).click(),
  ]);

  const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), 'rubi-generate-'));
  const targetPath = path.join(tmpDir, 'scaffold.ts');
  await download.saveAs(targetPath);
  const content = await fs.readFile(targetPath, 'utf8');

  expect(content).toContain('selectedFeatures');
  expect(content).toMatch(/'auth'/);
  expect(content).toMatch(/'content'/);
  expect(content).toMatch(/export function setupRubiPlatform/);
});

