import { Route } from '@/utils/routes';
import Link from 'next/link';
import insightCategories from '@/data/insights/categories';

export default function PageInsightCategories() {
  return (
    <>
      <h1>
        Insight Categories
      </h1>
      <section className="grid grid-cols-3 gap-4">
        {Object.values(insightCategories).map((cat) => (
          <Link
            href={`${Route.INSIGHTS_CATEGORIES}/${cat.slug}`}
            title={cat.title}
            key={cat.slug}
            className="border-2 border-slate-900 align-middle text-slate-900 rounded-md p-4 inline-block hover:no-underline hover:bg-slate-900 hover:text-white"
          >
            <h2>{cat.title}</h2>
            <div>{cat.intro}</div>
            <div className="text-right pt-2 text-sm">
              Read more »
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
