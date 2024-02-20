import { describe, expect, test } from 'vitest';
import getInsights from './index';

describe('getInsights', () => {
  test.each([
    { expected: 'home-break-ins' },
  ])('getInsights()', async ({ expected }) => {
    expect(getInsights()[0].slug).toStrictEqual(expected);
  });
});
