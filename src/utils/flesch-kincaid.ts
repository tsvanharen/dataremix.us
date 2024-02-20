/* eslint-disable no-tabs */
import { syllable } from '@/lib/syllable';

export const scoreDefinitions = [
  {
    isEasy: false, twClassName: 'bg-fuchsia-100', ease: 0, gte: -999999, lt: 0, usGradeLevel: 'Above professional', description: 'Extremely difficult to read.',
  },
  {
    isEasy: false, twClassName: 'bg-red-100', ease: 1, gte: 0, lt: 10, usGradeLevel: 'Professional', description: 'Extremely difficult to read. Best understood by university graduates.',
  },
  {
    isEasy: false, twClassName: 'bg-orange-100', ease: 2, gte: 10, lt: 30, usGradeLevel: 'College graduate', description: 'Very difficult to read. Best understood by university graduates.',
  },
  {
    isEasy: false, twClassName: 'bg-amber-100', ease: 3, gte: 30, lt: 50, usGradeLevel: 'College', description: 'Difficult to read.',
  },
  {
    isEasy: false, twClassName: 'bg-yellow-100', ease: 4, gte: 50, lt: 60, usGradeLevel: '10th to 12th grade', description: 'Fairly difficult to read.',
  },
  {
    isEasy: true, twClassName: 'bg-lime-100', ease: 5, gte: 60, lt: 70, usGradeLevel: '8th & 9th grade', description: 'Plain English. Easily understood by 13- to 15-year-old students.',
  },
  {
    isEasy: true, twClassName: 'bg-green-100', ease: 6, gte: 70, lt: 80, usGradeLevel: '7th grade', description: 'Fairly easy to read.',
  },
  {
    isEasy: true, twClassName: 'bg-teal-100', ease: 7, gte: 80, lt: 90, usGradeLevel: '6th grade', description: 'Easy to read. Conversational English for consumers.',
  },
  {
    isEasy: true, twClassName: 'bg-cyan-100', ease: 8, gte: 90, lt: 100, usGradeLevel: '5th grade', description: 'Very easy to read. Easily understood by an average 11-year-old student.',
  },
  {
    isEasy: true, twClassName: 'bg-sky-100', ease: 9, gte: 100, lt: 9999999, usGradeLevel: 'Below 5th grade', description: 'Very easy to read.',
  },
];

/**
 * Split a string into substrings using the specified separators and return them as an array.
 * @param {string} text
 * @param {string[]} separators
 */
export function mSplit(text: string = '', separators: string[] = []) {
  const reducer = (segments: string[], separator: string) => segments?.reduce((out: string[], segment: string) => out.concat(segment?.split(separator)), []);

  return separators?.reduce(reducer, [text]).filter((x) => x);
}

export function scoreDetails(score: number) {
  return scoreDefinitions.filter((detail) => score >= detail.gte && score < detail.lt)[0];
}

export function readingTimeMinutes(wordCount: number = 0): number {
  // https://en.wikipedia.org/wiki/Reading#:~:text=Research%20published%20in%202019%20concluded,to%20320%20words%20per%20minute.
  const averageWordsPerMinute = 250;

  return Math.ceil(wordCount / averageWordsPerMinute);
}

// source:  https://en.wikipedia.org/wiki/Flesch%E2%80%93Kincaid_readability_tests
/**
Score	        School level (US)   Notes
100.0 – 90.0	5th grade	          Very easy to read. Easily understood by an average 11-year-old student.
 90.0 – 80.0	6th grade	          Easy to read. Conversational English for consumers.
 80.0 – 70.0	7th grade	          Fairly easy to read.
 70.0 – 60.0	8th & 9th grade	    Plain English. Easily understood by 13- to 15-year-old students.
 60.0 – 50.0	10th to 12th grade	Fairly difficult to read.
 50.0 – 30.0	College	            Difficult to read.
 30.0 – 10.0	College graduate	  Very difficult to read. Best understood by university graduates.
 10.0 –  0.0	Professional	      Extremely difficult to read. Best understood by university graduates.
 */
export default function readingEase(text: string = '') {
  const syllableCount = syllable(text);
  const sentences = mSplit(text, ['.', ';', '!', '?']);
  const words = mSplit(text, [' ', '.', ';', '!', '?']);
  const readingTime = readingTimeMinutes(words.length);

  if (words.length === 0 || sentences.length === 0 || syllableCount === 0) {
    return {
      inputString: text,
      syllableCount,
      sentences,
      sentenceCount: sentences.length,
      words,
      wordCount: words.length,
      readingTimeMinutes: readingTime,
    };
  }

  const score = 206.835 - 1.015 * (words.length / sentences.length) - 84.6 * (syllableCount / words.length);
  const {
    usGradeLevel, description, ease, isEasy, twClassName,
  } = scoreDetails(score);

  return {
    inputString: text,
    syllableCount,
    sentences,
    sentenceCount: sentences.length,
    words,
    wordCount: words.length,
    readingTimeMinutes: readingTime,
    score,
    usGradeLevel,
    description,
    ease,
    isEasy,
    twClassName,
  };
}
