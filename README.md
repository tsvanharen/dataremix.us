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

## Links to things that helped get this site setup

* Next.js GitHub Pages (https://github.com/gregrickaby/nextjs-github-pages/tree/main)
* Managing a custom domain for your GitHub Pages site (https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
* One A record pointing to multiple IPs (https://community.cloudflare.com/t/one-a-record-pointing-to-multiple-ips/249887/3)
* Convert CSV to JSON (https://csvjson.com/csv2json)
* syllable, pluralize, normalize-strings
* Check dictionary words (re: syllable):  https://github.com/words/syllable/pull/33#issuecomment-507716483
* https://shields.io/
* https://heroicons.com/

## Roadmap

Will shift to its own page eventually.  Just getting some notes documented.

* Staging environment in GHA
* Template (fonts, branding, styling, layouts)
* Search bar (top right nav) (maybe only include in inner pages)
* Favicon
* Sitemap xml and page
* More unit tests
* Mobile layout/responsiveness
* Document methodologies
  * reading ease: flesch-kincaid
  * reading scores and colors (same as in Storybook?)
  * reading speed/wpm:  https://en.wikipedia.org/wiki/Reading#:~:text=Research%20published%20in%202019%20concluded,to%20320%20words%20per%20minute.
* Add collaboration documentation/file
* Insights landing page layout (probably a grid) (use GetInsightsRoutes to build grid of insights)
* Insights detail page layout plus sidebar (use GetInsightsRoutes to build sidebar)
* First insight:  "How likely is it that your home will be broken into?"
* Second insight?  "Why does it seem like the world is getting worse?"
* Document data sets used, any links used for data, and be clear on methodology for each insight.  Annotation is table stakes for this endeavor.
  * Dataset:  housing unit estimates by state, July 1, 2022:  https://www.census.gov/data/datasets/time-series/demo/popest/2020s-total-housing-units.html#v2022
  * Dataset:  burgleries by state for 2022:  https://cde.ucr.cjis.gov/LATEST/webapp/#/pages/explorer/crime/query
  * Dataset:  population by state for 2022:  https://www.census.gov/data/tables/time-series/demo/popest/2020s-state-total.html#v2022