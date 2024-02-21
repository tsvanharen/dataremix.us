import InsightsGrid from '@/components/InsightsGrid';
import insights from '@/data/insights';

export default function PageInsights() {
  return (
    <>
      <h1>
        Insights
      </h1>
      <InsightsGrid insights={insights} />
    </>
  );
}
