import { describe, expect, test } from 'vitest';
import readingEase, { mSplit, scoreDetails } from './flesch-kincaid';

describe('flesch-kincaid', () => {
  test.each([
    { text: '', separators: [], expected: [] },
    { text: 'This is a test.', separators: ['.'], expected: ['This is a test'] },
    { text: 'This is a test.', separators: [','], expected: ['This is a test.'] },
    { text: 'This is a test.', separators: [' '], expected: ['This', 'is', 'a', 'test.'] },
    { text: 'This is a test.', separators: [' ', '.'], expected: ['This', 'is', 'a', 'test'] },
    { text: 'This is a test; this is another part of the test.', separators: [' '], expected: ['This', 'is', 'a', 'test;', 'this', 'is', 'another', 'part', 'of', 'the', 'test.'] },
    { text: 'This is a test; this is another part of the test.', separators: ['.', ';'], expected: ['This is a test', ' this is another part of the test'] },
    { text: 'This is a test! this is another part of the test.', separators: ['!', '.'], expected: ['This is a test', ' this is another part of the test'] },
    { text: 'This is a test! this is another part of the test?', separators: ['!', '?'], expected: ['This is a test', ' this is another part of the test'] },
  ])('mSplit($text, $separators)', ({ text, separators, expected }) => {
    expect(mSplit(text, separators)).toStrictEqual(expected);
  });

  test.each([
    { score: -1000, expected: 0 },
    { score: 10, expected: 2 },
    { score: 20, expected: 2 },
    { score: 30, expected: 3 },
    { score: 40, expected: 3 },
    { score: 50, expected: 4 },
    { score: 55, expected: 4 },
    { score: 60, expected: 5 },
    { score: 65, expected: 5 },
    { score: 70, expected: 6 },
    { score: 75, expected: 6 },
    { score: 80, expected: 7 },
    { score: 85, expected: 7 },
    { score: 90, expected: 8 },
    { score: 100, expected: 9 },
    { score: 1000, expected: 9 },
  ])('scoreDetails($score)', ({ score, expected }) => {
    const sd = scoreDetails(score);
    expect(sd?.ease).toEqual(expected);
  });

  test.each([
    { text: '', expected: undefined },
    { text: 'hi', expected: 9 },
    { text: 'The cat sat on the mat.', expected: 9 },
    { text: 'This sentence, taken as a reading passage unto itself, is being used to prove a point.', expected: 5 },
    { text: 'The Australian platypus is seemingly a hybrid of a mammal and reptilian creature.', expected: 2 },
  ])('readingEase($text)', ({ text, expected }) => {
    expect(readingEase(text).ease).toEqual(expected);
  });
});
