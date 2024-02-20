# Regarding `syllable`

I had to pull a prior dependency (and its dependencies) into this repo to get `next build` to work, and this is a rundown of why.

## Synopsis

I ran into an error when running `next build` to create an optimized production build of the site. It should be noted that running `next dev` did not produce this error.  This error occurred during the "Collecting page data" stage of the build:

```
TypeError: Cannot read properties of undefined (reading 'document')
```

The stack trace included with the error pointed me to the file `/insights/[insight]/page.tsx`.  The only remarkable part of this file was the use of Next.js's `generateStaticParams` function.  This function is called at build time to populate an array of dynamic route segment values that are then used to generate static HTML pages.

After going down many fruitless rabbit holes, I traced the issue to my use of the `syllable` package (https://www.npmjs.com/package/syllable).  This was a dependency that was being used to calculate the Flesch-Kincaid reading ease (LINK NEEDED HERE) of the content of each Insight.

There wasn't anything particularly obvious about `syllable`'s code that could be the culprit, so I looked toward its dependencies:
* `pluralize` (https://www.npmjs.com/package/pluralize)
* `normalize-strings` (https://www.npmjs.com/package/normalize-strings)

The `pluralize` package did not appear to have any obvious problems that would cause the build error.

The `normalize-strings` package, however, did.  It was built as a CommonJS module that was required to be run in a browser-based environment with the expectation that `window` and `document` would be defined.  The Next.js production build process runs outside a browser-based environment where those objects would be undefined, thus the error I saw during build.

I pulled in the necessary code from these three packages and upgraded them to TypeScript, and the build now works as expected.

## Commentary

* In retrospect, I should have known to look toward my dependencies first.  The error message stated that there was a call to `someUndefinedObject.document`, but nowhere in the codebase did I use a `document` property.
* The three modules mentioned here all seem to be unmaintained given their most recent release dates and the number of open issues and pull requests in their respective repos.  There are many issues/PRs that really should get implemented/merged to improve the codebase, but for my purposes, the functionality provided is good enough.

## Licenses

* syllable
  * The MIT License:  https://github.com/words/syllable/blob/main/license
* pluralize
  * The MIT License:  https://github.com/plurals/pluralize/blob/master/LICENSE
* normalize-strings
  * No license defined:  https://github.com/tehsis/normalize/tree/master
