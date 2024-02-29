import Logo, { Variant } from '@/components/Logo';
import { Route } from '@/utils/routes';
import Link from 'next/link';

export default function PageHome() {
  return (
    <>
      <section className="pt-4">
        <div className="text-center mb-8">
          <Logo variant={Variant.HomePage} />
        </div>
        <h1 aria-hidden hidden>
          Data/Remix
        </h1>
        <div className="md:text-2xl text-xl text-center md:mb-16 mb-8">
          Data-driven insights into the modern human experience.
        </div>
      </section>
      <div className="text-justify">
        <section>
          <h3>Overview</h3>
          <p>
            We as humans are emotional creatures.  Our emotional system is complex and wonderful.  It is one of our defining characteristics.
          </p>
          <p>
            Food, music, film, books, social media, religion, politics, marketing, medicine, engineering, news media, software, law, love, and our very survival are underscored by emotional decisions.
          </p>
          <p>
            And this makes some sense.  We do not usually have the time to perform an in-depth study or track down peer-reviewed research before we need to take action.  We can usually rely on our instincts to move us in the right direction.
          </p>
          <p>
            While our instincts serve us well, the right mix of inputs can manipulate us to form irrational or negative opinions about the world around us.  They can even get us to make choices that oppose our own best interests.
          </p>
          <p>
            Fortunately, we have data at our disposal that can help fill some of the gaps in our instinctual decision-making.
          </p>
        </section>
        <div className="md:flex">
          <section className="pt-8 md:pr-8 md:flex-1">
            <h3>Mission</h3>
            <p className="pb-0">
              This project aspires to:
            </p>
            <ul>
              <li>Help us make more rational decisions.</li>
              <li>Help us feel more positivity about our world.</li>
              <li>Help us make decisions that do not oppose our own self-interests.</li>
              <li>Help us make decisions that do not negatively impact our ability to pursue fulfillment and happiness.</li>
            </ul>
          </section>
          <section className="pt-8 md:pl-8 md:flex-1">
            <h3>Methodology</h3>
            <ul>
              <li>
                We curate topics (called
                {' '}
                <span className="italic">Insights</span>
                ) that rely on data sets that are freely available for anyone to download, view, query, filter, sort, aggregate, and summarize as they see fit.
              </li>
              <li>We annotate, attribute, and link to sources wherever we use information or data from external sources.</li>
              <li>
                Find more details on the
                {' '}
                <Link href={Route.FAQS} title="FAQs">FAQs</Link>
                {' '}
                page.
              </li>
            </ul>
          </section>
        </div>
      </div>
      <section className="pt-8">
        <h3>Get Started</h3>
        <p>
          Get started on the Insights landing page now:
        </p>
        <div className="text-center">
          <Link href={Route.INSIGHTS} title="Insights" className="button">
            Insights »
          </Link>
        </div>
      </section>
    </>
  );
}
