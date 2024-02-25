import ReadabilityScale from '@/components/ReadabilityScale';
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
      <div className="flex">
        <section className="flex-grow">
          <p className="italic">
            {insight.intro}
          </p>
          {insight.content}
        </section>
        <aside className="w-64 pl-6 ml-6 py-4 border-l-slate-900 border-l-2 h-full">
          <div>
            <h6 className="font-bold">Published</h6>
            {insight.publishDate.toDateString()}
          </div>
          <div className="pt-4">
            <h6 className="font-bold">Reading time</h6>
            ~
            {insight.readingTimeMinutes}
            {' '}
            {insight.readingTimeMinutes === 1.0 ? 'minute' : 'minutes'}
          </div>
          <div className="pt-4">
            <h6 className="font-bold">Posted in</h6>
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
          <div className="pt-4">
            <h6 className="font-bold">Readability</h6>
            <ReadabilityScale ease={insight.readingEase} />
          </div>
        </aside>
      </div>

    </>
  );
}
