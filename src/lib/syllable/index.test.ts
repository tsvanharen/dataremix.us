import { describe, test, expect } from 'vitest';
import normalize from './normalize';

describe('normalize', () => {
  test.each([
    { str: 'Åland', expected: 'Aland' },
    { str: 'õ', expected: 'o' },
  ])('normalize($str)', ({ str, expected }) => {
    expect(normalize(str)).toStrictEqual(expected);
  });
});
