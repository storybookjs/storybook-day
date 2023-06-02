import { test, expect } from '@chromaui/test-archiver';

test('Ticket page', async ({ page }) => {
  await page.goto('/tickets/MOCK_USERNAME');

  await expect(page).toHaveTitle(/MOCK_USERNAME’s ticket to Storybook Day/);
});
