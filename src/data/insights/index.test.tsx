import { describe, expect, test } from 'vitest';
import { insights } from './index';

describe('getInsights', () => {
  test.each([
    { expected: 'home-break-ins' },
  ])('getInsights()', async ({ expected }) => {
    expect(insights[0].slug).toStrictEqual(expected);
  });
});
