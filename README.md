# Data/Remix

Data-driven insights into the modern human experience.

[![build/deploy](https://github.com/tsvanharen/dataremix.us/actions/workflows/deploy.yml/badge.svg)](https://github.com/tsvanharen/dataremix.us/actions/workflows/deploy.yml)

## Hosting

* Website can be found at dataremix.us
* Registrar and DNS management by Cloudflare (note that we are not using its proxy/CDN at this time)
* Built and deployed with GitHub Actions
* Hosted at GitHub Pages

## Links to things that helped get this site setup

* Next.js GitHub Pages (https://github.com/gregrickaby/nextjs-github-pages/tree/main)
* Managing a custom domain for your GitHub Pages site (https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
* One A record pointing to multiple IPs (https://community.cloudflare.com/t/one-a-record-pointing-to-multiple-ips/249887/3)
* Convert CSV to JSON (https://csvjson.com/csv2json)

## Roadmap

Will shift to its own page eventually.  Just getting some notes documented.

* Template (fonts, branding, styling, layouts)
* Search bar (top right nav)
* Favicon
* Sitemap xml and page
* Mobile layout/responsiveness
* Insights landing page layout (probably a grid) (use GetInsightsRoutes to build grid of insights)
* Insights detail page layout plus sidebar (use GetInsightsRoutes to build sidebar)
* Storybook deployment as part of the build
* First insight:  "How likely is it that your home will be broken into?"
* Second insight?  "Why does it seem like the world is getting worse?"
* Reading level, reading time, published date (maybe rethink that one?) on every insight
* Document data sets used, any links used for data, and be clear on methodology for each insight.  Annotation is table stakes for this endeavor.
  * Dataset:  housing unit estimates by state, July 1, 2022:  https://www.census.gov/data/datasets/time-series/demo/popest/2020s-total-housing-units.html#v2022
  * Dataset:  burgleries by state for 2022:  https://cde.ucr.cjis.gov/LATEST/webapp/#/pages/explorer/crime/query
  * Dataset:  population by state for 2022:  https://www.census.gov/data/tables/time-series/demo/popest/2020s-state-total.html#v2022