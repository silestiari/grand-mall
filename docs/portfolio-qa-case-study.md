# Grand Mall Batumi | QA Case Study

**Project:** responsive, multilingual shopping-mall website  
**Role:** Website development and QA project contributor  
**Stack:** Next.js, React, TypeScript, next-intl and Tailwind CSS  
**Languages:** English, Russian and Georgian  
**Reference report:** [Final pre-launch QA report, 6 October 2026](prelaunch-qa-final.md)

## Overview

Grand Mall Batumi is a shopping-mall website featuring a homepage, store directory and detail pages, dining, entertainment, a mall-map experience, visitor information, events and offers. The quality focus is functional correctness, localization, mobile layout, navigation, accessibility and data integrity.

## Test coverage

| Area | Coverage |
| --- | --- |
| Functional UI | Global search, filters, reset, empty states, store and restaurant detail navigation |
| Localization | EN/RU/KA, nested routes, query parameters, URL hashes and language switching |
| Navigation | Internal links, anchors, browser back, unknown slugs and expected 404s |
| Mall map | Location selection, floor synchronization, deep links and detail-page links |
| Responsive UI | Desktop/tablet/mobile viewports, text fitting and horizontal overflow |
| Accessibility | Automated Axe checks, controls, image alt text and motion preferences |
| Metadata | Canonical URLs, hreflang, OpenGraph, document language |
| Build health | ESLint, TypeScript and production build |

## Recorded quality evidence

According to the [6 October 2026 final QA report](prelaunch-qa-final.md):

- **151 interaction checks** covering search, filters, mall map and navigation.
- **48 Axe accessibility checks** on important pages, all reported as passing.
- **321 unique internal links** responding with HTTP 200.
- **192 page/viewport combinations** across three languages.
- **24 live language-switch interactions** on representative pages.
- **57 narrow-mobile checks** at 320 px.
- ESLint and production build completed without reported errors.

These figures describe project-level testing documented in the report, including automated checks. They do **not** imply that every check was performed manually.

## Representative test scenarios

| ID | Scenario | Expected outcome |
| --- | --- | --- |
| GM-01 | Search for `zara`, `ZARA`, `Zara` | Case-insensitive search returns the same store |
| GM-02 | Apply floor + category filters, then reset | Combined results update and reset restores entries |
| GM-03 | Enter a nonexistent store name | Clear empty state; UI remains functional |
| GM-04 | Follow a store's Find on Map link | Correct location and floor selected |
| GM-05 | Switch RU → EN on a detail page with query/hash | Nested route and URL state persist |
| GM-06 | Visit an unknown store slug | Expected 404 response |
| GM-07 | Check homepage at 320 px | Content stays within viewport without broken controls |

## Known limitations and risk reporting

- The map is an illustrative floor overview, **not** a confirmed indoor coordinate system.
- Some lifestyle/hero imagery and the brand icon are temporary illustrations.
- Events and offers use honest empty states until verified data is available.
- Several third-party sites block automated requests or return errors; these are not classified as internal broken routes.
- The report covers desktop Chrome with device-size emulation; **physical Safari/iOS and Android testing was not conducted**.
- Passing automated Axe checks does not constitute full accessibility certification.

## QA lessons

This project demonstrates test design, functional and exploratory testing, responsive checks, localization, defect investigation, risk documentation and reproducible evidence. During interviews, distinguish personally executed steps from automated or AI-supported project checks.
