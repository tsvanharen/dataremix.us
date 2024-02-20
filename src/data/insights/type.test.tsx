/* eslint-disable react/jsx-no-useless-fragment */
import { describe, expect, test } from 'vitest';
import React from 'react';
import { extractStrings } from './type';

describe('extractStrings', () => {
  test.each([
    { obj: '', expected: '' },
    { obj: null, expected: '' },
    { obj: undefined, expected: '' },
    { obj: [], expected: '' },
    { obj: <></>, expected: '' },

    { obj: 'Hello, World', expected: 'Hello, World' },
    { obj: ['Hello, World'], expected: 'Hello, World' },
    { obj: [['Hello'], ['World']], expected: 'Hello World' },
    { obj: <>Hello, World</>, expected: 'Hello, World' },
    {
      obj: (
        <div>
          <h1>Hello, World</h1>
          <ul>
            <li>Here is some text.</li>
          </ul>
          <p>And this is more text!</p>
        </div>
      ),
      expected: 'Hello, World Here is some text. And this is more text!',
    },
  ])('extractStrings($obj)', ({ obj, expected }) => {
    expect(extractStrings(obj)).toStrictEqual(expected);
  });
});
