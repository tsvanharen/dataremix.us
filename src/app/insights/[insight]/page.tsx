import InsightsSideBar from '@/components/InsightsSideBar';
import getInsights from '@/data/insights';

const insights = getInsights();

// https://nextjs.org/docs/app/api-reference/functions/generate-static-params
export async function generateStaticParams() {
  // populate the "insight" path param with all of our insight slugs
  return insights.map((ins) => ({
    insight: ins.slug,
  }));
}

export default function PageInsightTemplate({ params }: { params: { insight: string } }) {
  // get the insight data.  if it doesn't exist, it should automatically 404.
  const insight = insights.find((ins) => ins.slug === params.insight);

  return (
    <section className="flex">
      <InsightsSideBar />
      <section>
        <h1>
          {insight?.title}
        </h1>
        <p>
          Coming soon.
        </p>
      </section>
    </section>
  );
}
