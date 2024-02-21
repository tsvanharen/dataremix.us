import getInsights from '@/data/insights';
import { Route } from '@/utils/routes';
import Link from 'next/link';

export default function PageInsights() {
  const insights = getInsights();

  return (
    <>
      <h1>
        Insights
      </h1>
      <section className="grid grid-cols-3 gap-4">
        {insights.map((ins) => (
          <Link
            href={`${Route.INSIGHTS}/${ins.slug}`}
            title={ins.title}
            key={ins.slug}
            className="border-2 border-slate-900 align-middle text-slate-900 rounded-md p-4 inline-block hover:no-underline hover:bg-slate-900 hover:text-white"
          >
            <h2>{ins.title}</h2>
            <div>{ins.intro}</div>
            <div className="text-right pt-2 text-sm">
              Read more »
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
