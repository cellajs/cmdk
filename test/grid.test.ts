import { expect, test } from '@playwright/test'

test.describe('grid', async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/grid')
  })

  test('correct attributes are applied', async ({ page }) => {
    await expect(page.locator(`[cmdk-grid]`)).toBeDefined()
    await expect(page.locator(`[data-direction]`)).toBeDefined()
  })

  test('arrow up/down changes selected item', async ({ page }) => {
    await page.locator(`[cmdk-input]`).press('ArrowDown')
    await expect(page.locator(`[cmdk-item][aria-selected="true"]`)).toHaveAttribute('data-value', 'C')
    await page.locator(`[cmdk-input]`).press('ArrowLeft')
    await expect(page.locator(`[cmdk-item][aria-selected="true"]`)).toHaveAttribute('data-value', 'B')
    await page.locator(`[cmdk-input]`).press('ArrowRight')
    await expect(page.locator(`[cmdk-item][aria-selected="true"]`)).toHaveAttribute('data-value', 'C')
    await page.locator(`[cmdk-input]`).press('ArrowUp')
    await expect(page.locator(`[cmdk-item][aria-selected="true"]`)).toHaveAttribute('data-value', 'A')
  })
})
