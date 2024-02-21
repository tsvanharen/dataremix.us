import ReadabilityBadge from '@/components/ReadabilityBadge';
import insights from '@/data/insights';
import { Route } from '@/utils/routes';
import Link from 'next/link';

// https://nextjs.org/docs/app/api-reference/functions/generate-static-params
export function generateStaticParams() {
  // populate the "insight" path param with all of our insight slugs
  return insights.map((ins) => ({
    insight: ins.slug,
  }));
}

export default function PageInsightTemplate({ params }: { params: { insight: string } }) {
  const insight = insights.find((ins) => ins.slug === params.insight);

  if (!insight) {
    throw new Error(`insight with slug ${params.insight} is undefined`);
  }

  return (
    <>
      <Link
        href={Route.INSIGHTS}
        title="Back to Insights"
        className="pb-4 text-sm inline-block"
      >
        « Back to Insights
      </Link>
      <h1>
        {insight.title}
      </h1>
      <p className="italic">
        {insight.intro}
      </p>
      <div className="grid grid-cols-3 pb-4">
        <div>
          {/* hero icons outline calendar */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
          </svg>
          Published:
          {' '}
          {insight.publishDate.toDateString()}
        </div>
        <div>
          {/* hero icons outline clock */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          Reading time: ~
          {insight.readingTimeMinutes}
          {' '}
          minutes
        </div>
        <div>
          {/* hero icons outline document */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
          </svg>
          Readability:
          {' '}
          {/* eslint-disable-next-line react/jsx-props-no-spreading */ }
          <ReadabilityBadge {...insight.readingLevel} />
        </div>
      </div>
      <div>
        Posted in:
        {' '}
        {insight.categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`${Route.INSIGHTS_CATEGORIES}/${cat.slug}`}
            title={cat.title}
            className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10 mx-1"
          >
            {cat.title}
          </Link>
        ))}
      </div>
      {insight.content}
    </>
  );
}
