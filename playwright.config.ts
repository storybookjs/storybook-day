import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: 'e2e-tests',
  use: {
    baseURL: 'http://localhost:3000'
  }
});
