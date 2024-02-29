import readingEase from '@/utils/flesch-kincaid';
import { ReactElement, ReactNode, isValidElement } from 'react';

export type InsightCategory = {
  slug: string
  title: string
  intro: string
};

// export interface ReadabilityParams {
//   twClassName: string,
//   usGradeLevel: string,
//   description: string,
// }

type ChangeFrequency = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' | undefined;

interface InsightParams {
  slug: string,
  title: string,
  intro: string,
  publishDate: Date,
  lastModifiedDate?: Date,
  changeFrequency?: ChangeFrequency,
  priority?: number,
  categories: InsightCategory[],
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

  readonly changeFrequency?: ChangeFrequency;

  readonly priority?: number;

  readonly categories: InsightCategory[];

  readonly content: ReactNode;

  // readonly readingLevel: ReadabilityParams;

  readonly readingEase: number;

  readonly readingTimeMinutes: number;

  constructor(params: InsightParams) {
    this.slug = params.slug;
    this.title = params.title;
    this.intro = params.intro;
    this.publishDate = params.publishDate;
    this.lastModifiedDate = params.lastModifiedDate;
    this.changeFrequency = params.changeFrequency;
    this.categories = params.categories;
    this.content = params.content;

    if (params.priority && (params.priority < 0 || params.priority > 1)) {
      throw new Error(`priority must be between 0 and 1 inclusive; received ${params.priority}`);
    }

    this.priority = params.priority;

    // compute and set reading level and reading time
    const text = extractStrings(params.content);
    const re = readingEase(text);

    this.readingEase = re.ease ?? 9;

    this.readingTimeMinutes = re.readingTimeMinutes;
  }
}
