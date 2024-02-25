# Data/Remix

Data-driven insights into the modern human experience.

[![build/deploy](https://github.com/tsvanharen/dataremix.us/actions/workflows/deploy.yml/badge.svg)](https://github.com/tsvanharen/dataremix.us/actions/workflows/deploy.yml) [![test](https://github.com/tsvanharen/dataremix.us/actions/workflows/test.yml/badge.svg)](https://github.com/tsvanharen/dataremix.us/actions/workflows/test.yml) [![GPLv3 License](https://img.shields.io/badge/license-GPL%20v3-limegreen.svg)](https://github.com/tsvanharen/dataremix.us/blob/main/LICENSE)

## Documentation

* Branding and component styling:  Storybook (https://dataremix.us/storybook)
* Unit testing:  vitest
* README on the `syllable` package:  (/syllable/README.md)

## Hosting

* Website can be found at dataremix.us
* Registrar and DNS management by Cloudflare (note that we are not using its proxy/CDN at this time)
* Built and deployed with GitHub Actions
* Hosted at GitHub Pages

## Links and notes that helped get this site setup

* Next.js GitHub Pages (https://github.com/gregrickaby/nextjs-github-pages/tree/main)
* Managing a custom domain for your GitHub Pages site (https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
* One A record pointing to multiple IPs (https://community.cloudflare.com/t/one-a-record-pointing-to-multiple-ips/249887/3)
* Convert CSV to JSON (https://csvjson.com/csv2json)
* syllable, pluralize, normalize-strings
* Check dictionary words (re: syllable):  https://github.com/words/syllable/pull/33#issuecomment-507716483
* https://shields.io/
* https://heroicons.com/
* Setting priority on content (from https://www.contentpowered.com/blog/xml-sitemap-priority-changefreq/):
  * 0.0 – 0.3: Old news posts, outdated guides, irrelevant pages you nevertheless don't want to delete, merge, or update.
  * 0.4 – 0.7: Articles, blog posts, category pages, FAQs, system pages. The bulk of your site's content falls into this range.
  * 0.8 – 1.0: Extremely important content, such as your homepage, major category pages, product pages, and subdomain indexes.
* Sitemaps (https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap#xml)
  * Google ignores <priority> and <changefreq> values.
  * Google uses the <lastmod> value if it's consistently and verifiably (for example by comparing to the last modification of the page) accurate.

## Roadmap

Will shift to its own page eventually.  Just getting some notes documented.

* Staging environment in GHA
* Submit sitemap through Google Search Console
* Google Analytics
* Cookie banner
* Contact page
* Privacy policy
* Terms and conditions
* WCAG 2.1 AA accessibility goal
* Move svg hero icons into components
* Add last updated date to insights, where there is a last updated date
* Run tests before deploy in workflow (currently only running when PR is opened)
* Code coverage badge in README
* Sitemap last modified seems to need to be in a toISOString() format.  Verify this and enforce it.
* Rework routes enum and routes stories to include priority, lastModifiedDate, and change frequency values for sitemap
* About page (tell the story of how this came about; put methodologies here)
* Template (fonts, branding, styling, layouts)
* Search bar (top right nav) (maybe only include in inner pages)
* Favicon
* Sitemap page?
* More unit tests
* Categories landing pages
* Add posted in categories to the insights grid component
* Mobile layout/responsiveness
* Document methodologies
  * reading ease: flesch-kincaid
  * reading scores and colors (same as in Storybook?)
  * reading speed/wpm:  https://en.wikipedia.org/wiki/Reading#:~:text=Research%20published%20in%202019%20concluded,to%20320%20words%20per%20minute.
* Add collaboration documentation/file
* Insights landing page layout (probably a grid) (use GetInsightsRoutes to build grid of insights)
* Insights detail page layout plus sidebar (use GetInsightsRoutes to build sidebar)
* Insight Ideas:
  * "How likely is it that your home will be broken into?"
  * What are the odds that you will die today (include fight club long enough timeline quote)
  * "Why does it seem like the world is getting worse?"
* Document data sets used, any links used for data, and be clear on methodology for each insight.  Annotation is table stakes for this endeavor.
  * Dataset:  housing unit estimates by state, July 1, 2022:  https://www.census.gov/data/datasets/time-series/demo/popest/2020s-total-housing-units.html#v2022
  * Dataset:  burgleries by state for 2022:  https://cde.ucr.cjis.gov/LATEST/webapp/#/pages/explorer/crime/query
  * Dataset:  population by state for 2022:  https://www.census.gov/data/tables/time-series/demo/popest/2020s-state-total.html#v2022