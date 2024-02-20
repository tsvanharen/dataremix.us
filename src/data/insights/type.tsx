import { ReadabilityBadgeParams } from '@/components/ReadabilityBadge';
import readingEase from '@/utils/flesch-kincaid';
import { ReactElement, ReactNode, isValidElement } from 'react';

export interface Insight {
  slug: string,
  title: string,
  publishDate: Date,
  lastModifiedDate?: Date,
  content: ReactNode,
  readingLevel: ReadabilityBadgeParams,
  readingTimeMinutes: number,
}

interface InsightParams {
  slug: string,
  title: string,
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

export function createInsight(params: InsightParams) {
  // we need to compute reading level and reading time
  const text = extractStrings(params.content);
  const re = readingEase(text);

  const readingLevel = {
    ease: re.ease ?? 0,
    twClassName: re.twClassName ?? '',
    usGradeLevel: re.usGradeLevel ?? '',
    description: re.description ?? '',
  };

  const { readingTimeMinutes } = re;

  // const readingLevel = {
  //   ease: 0, twClassName: '', usGradeLevel: '', description: '',
  // };

  // const readingTimeMinutes = 0;

  return {
    slug: params.slug,
    title: params.title,
    publishDate: params.publishDate,
    lastModifiedDate: params.lastModifiedDate,
    content: params.content,
    readingLevel,
    readingTimeMinutes,
  };
}
