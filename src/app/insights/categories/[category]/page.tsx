import InsightsGrid from '@/components/InsightsGrid';
import insights from '@/data/insights';
import insightCategories from '@/data/insights/categories';
import { Insight } from '@/data/insights/type';
import { Route } from '@/utils/routes';
import Link from 'next/link';

// https://nextjs.org/docs/app/api-reference/functions/generate-static-params
export function generateStaticParams() {
  // populate the "category" path param with all of our category slugs
  return Object.values(insightCategories).map((cat) => ({
    category: cat.slug,
  }));
}

export default function PageInsightCategoryTemplate({ params }: { params: { category: string } }) {
  const category = Object.values(insightCategories).find((cat) => cat.slug === params.category);

  if (!category) {
    throw new Error(`category with slug ${params.category} is undefined`);
  }

  // get the insights in this category
  const insightsInCategory: Insight[] = [];
  insights.forEach((ins) => {
    const catSlugs = ins.categories.flatMap((cat) => cat.slug);

    if (catSlugs.includes(category.slug)) {
      insightsInCategory.push(ins);
    }
  });

  return (
    <>
      <Link
        href={Route.INSIGHTS_CATEGORIES}
        title="Back to Insight Categories"
        className="pb-4 text-sm inline-block"
      >
        « Back to Insight Categories
      </Link>
      <h1>
        {category.title}
      </h1>
      <p className="italic">
        {category.intro}
      </p>
      <InsightsGrid insights={insights} />
    </>
  );
}
