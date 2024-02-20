import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    alias: {
      '@/': new URL('./src/', import.meta.url).pathname,
    },
    coverage: {
      enabled: true,
      provider: 'istanbul',
      reporter: ['text', 'json', 'html', 'lcov'],
    },
  },
});
