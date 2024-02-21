import { ReadabilityBadgeParams } from '@/components/ReadabilityBadge';
import readingEase from '@/utils/flesch-kincaid';
import { ReactElement, ReactNode, isValidElement } from 'react';

// export interface Insight {
//   slug: string,
//   title: string,
//   publishDate: Date,
//   lastModifiedDate?: Date,
//   content: ReactNode,
//   readingLevel: ReadabilityBadgeParams,
//   readingTimeMinutes: number,
// }

interface InsightParams {
  slug: string,
  title: string,
  intro: string,
  publishDate: Date,
  lastModifiedDate?: Date,
  content: ReactNode,
}

// find all the strings from the content for an Insight.
// each string that is found is separated by a space, as we're only using the
// final blob of text to determine readability and reading time.
// adapted from https://stackoverflow.com/a/71652669/107009
export function extractStrings(obj: ReactNode | string | unknown | undefined | null): string {
  if (!obj) {
    return '';
  }

  if (typeof obj === 'string') {
    return obj;
  }

  if (isValidElement(obj)) {
    const elem = obj as ReactElement;

    return extractStrings(elem.props.children);
  }

  if (Array.isArray(obj)) {
    return obj.map((e) => extractStrings(e)).join(' ');
  }

  return obj.toString();
}

export class Insight {
  readonly slug: string;

  readonly title: string;

  readonly intro: string;

  readonly publishDate: Date;

  readonly lastModifiedDate?: Date;

  readonly content: ReactNode;

  readonly readingLevel: ReadabilityBadgeParams;

  readonly readingTimeMinutes: number;

  constructor(params: InsightParams) {
    this.slug = params.slug;
    this.title = params.title;
    this.intro = params.intro;
    this.publishDate = params.publishDate;
    this.lastModifiedDate = params.lastModifiedDate;
    this.content = params.content;

    // compute and set reading level and reading time
    const text = extractStrings(params.content);
    const re = readingEase(text);

    this.readingLevel = {
      ease: re.ease ?? 0,
      twClassName: re.twClassName ?? '',
      usGradeLevel: re.usGradeLevel ?? '',
      description: re.description ?? '',
    };

    this.readingTimeMinutes = re.readingTimeMinutes;
  }
}
