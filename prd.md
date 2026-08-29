---
title: Rizal Center of Chicago Website
version: 1.0
status: Prototype definition
created: 2026-08
updated: 2026-08-28
---

# Product Requirements Document

**Project:** Rizal Center of Chicago Website
**Version:** 1.0 — Prototype Definition
**Status:** Ready for build
**Last Updated:** 2026-08-28
**Delivery window:** 6–8 weeks

---

## 1. Purpose

This document defines a **working prototype** of a new Rizal Center of Chicago website, to be demonstrated to Center staff and administrators.

The existing WordPress site stays live and untouched throughout. The prototype exists to answer one question:

> Should the Rizal Center invest in replacing its website with this?

Everything in this document is scoped to that question. Public traffic, search rankings, and URL preservation are **not** prototype concerns; they are recorded in §16 as launch gates so the prototype's deliberate omissions don't become permanent ones.

Technology decisions live in [architecture.md](architecture.md). Delivery sequencing lives in [epics.md](epics.md).

---

## 2. The Core Product

> **A credibility engine with a conversion exit.**
>
> A visitor arrives — from a search, a shared link, or Facebook — quickly believes the Rizal Center is real, active, and welcoming, and is given something to do: attend, donate, volunteer, or get in touch.

Two halves, both required:

* **Credibility** comes from visible activity. A full class schedule, upcoming events, recent posts, a real board, a findable address. A site that looks tended looks like an organization worth supporting.
* **Conversion** comes from always being asked. Donate and volunteer are present on every page, not buried on one.

Everything else in this document — Topics, structured content, SEO, archives — is machinery that makes those two things true and keeps them true without anyone maintaining them.

---

## 3. Problem

### 3.1 The same work is done twice *(primary)*

Today an event or update is published **twice**: once to Facebook, once to the website.

Facebook is where the Center's audience already is, and posting there is fast and familiar. The website is slower, reaches fewer people, and takes more effort. When a volunteer has limited time, posting to Facebook first is not laziness — it is rational triage.

The result is predictable: effort spent twice, two sources that drift, and **the website loses**. It goes stale, which further reduces the reason to maintain it.

A new website that becomes a *third* place to publish fails the same way. Reducing duplicated effort is a design constraint, not a feature.

### 3.2 Every program area needs a hand-built page

The Center runs martial arts classes, arts programming, cultural gatherings, immigration support, and more. Under the current arrangement, each of these needs a page somebody builds by hand and somebody remembers to update.

Nobody remembers. Program pages go stale, and adding a new one requires a developer.

### 3.3 The breadth of activity is invisible

Events, posts, announcements, and resources are scattered. A visitor interested in one area of activity has no reliable path to everything related to it — and the Center's actual range is far wider than the site suggests.

### 3.4 Routine updates depend on developer availability

Volunteers maintain the content. Routine updates must not require code changes, deployments, or developer help.

---

## 4. Vision

A community-first website where people can easily discover what's happening at the Rizal Center, what they can attend, what the Center stands for, and how to get involved — and where **maintaining it takes less total effort than the current arrangement, not more.**

---

## 5. Goals

Each goal traces to something the Center's administration actually asked for.

| # | Goal | Serves |
| --- | --- | --- |
| G1 | Make donating obvious and easy from anywhere on the site | *donations* |
| G2 | Show what's happening — the class schedule, upcoming events, and what already happened | *upcoming and past events* |
| G3 | Explain what the Center is, who runs it, where it is, and how to reach it | *informational platform* |
| G4 | Make volunteering a visible, one-click ask | *enlist volunteers* |
| G5 | Let the admin add a program area without a developer | *program pages, maintainability* |
| G6 | Reduce duplicated publishing effort | §3.1 |
| G7 | Be findable by people who don't know the Center exists | discovery |
| G8 | Keep operating cost and maintenance burden near zero | sustainability |

---

## 6. Audience

### 6.1 Visitors

Two groups, both first-class:

* **Newcomers** arriving cold — from a search, a shared link, or word of mouth. They need orientation before anything else: what is this, is it real, is it for me.
* **Regulars** crossing over from Facebook. They need current information fast and shouldn't have to scroll past an introduction they don't need.

The homepage serves both by leading with a short identity line above genuinely current content (§9.2).

Also in scope, and easy to forget: **funders and partners** doing due diligence. They evaluate the same signals as a newcomer, more harshly.

### 6.2 Editors and Admin

* **1–2 Editors** — volunteers who create Events, Posts, and Announcements.
* **1 Admin** — additionally curates Topics and site-level content.

At three people, **convention beats enforcement.** Editorial boundaries in §12 are agreements, not permission systems to be built.

### 6.3 Not the audience for the prototype

The general public and search engines. The current site continues to serve them.

---

## 7. Glossary

Used consistently throughout. No synonyms.

* **Event** — A dated activity. May recur on a schedule, with individual occurrences editable.
* **Class schedule** — The Center's standing weekly programming, presented as a timetable rather than a list of dates.
* **Announcement** — Time-sensitive information. Surfaced by recency and by pinning; it has no expiry date.
* **Post** — A story, news item, or update. Authored by a Person.
* **Resource** — A useful link, document, or contact. Always lives inside a Resource List; never has its own page.
* **Resource List** — A curated, ordered collection of Resources on a shared theme.
* **Topic** — A **program area that renders itself.** See §8.
* **Person** — Anyone named on the site: author, board member, instructor.
* **Location** — A physical venue an Event references.
* **Featured slot** — A single position at the top of the homepage main column holding one piece of content.
* **The ask** — Donate and volunteer calls to action, present sitewide.

---

## 8. The Differentiator: Topics

A Topic is not a tag. **A Topic is a program area that renders its own page.**

The Admin creates a Topic document — *Filipino Martial Arts* — and a page exists at a stable URL. Editors tag content to it as they publish. The page fills and stays current with no further work from anyone.

That is the mechanism behind G5, and it's the single thing this site does that the current one cannot: **the Admin can add a new program area without calling a developer, and it never goes stale.**

### 8.1 Rules

* Topics are **curated by the Admin**, not created ad hoc by Editors.
* Topics are **optional** on content. Forcing a topic onto everything pushes content into areas where it doesn't belong, which destroys the reason to trust a Topic page. Untagged content remains discoverable on its type's index page.
* Topics are **flat**. No nesting. If something belongs to two, tag both.
* Topics are **prominent** in the editing form — a primary field, never filed under advanced settings. A field nobody sees is a field nobody fills, and unfilled topics render empty pages.
* A Topic exists because it's a **persistent area of activity**, not because a post mentioned a subject once.

### 8.2 Two shapes of Topic page

The Center's activity is unevenly distributed, and Topic pages must handle both extremes:

* **Program-led** — heavy on schedule and events, light on writing. *Filipino Martial Arts* is the archetype: the visitor wants when, where, cost, and who to contact.
* **Editorial-led** — heavy on posts and resources, no recurring events. *Immigration & Support* is the archetype: the visitor wants reading, context, and useful links.

**Sections on a Topic page hide when empty.** This is a requirement, not a refinement — without it, every Topic page displays its own gaps.

### 8.3 Topics at launch

| Topic | Visitor intent | Shape |
| --- | --- | --- |
| Filipino Martial Arts | I want to train | Program-led |
| Arts & Theater | I want to watch or perform | Editorial with events |
| Community Life | I want to belong — gatherings, shared meals | Mixed |
| Immigration & Support | I need help | Editorial with resources |
| Heritage & Language | I want to learn where I come from | Editorial |

Optional sixth if content supports it: **Pamana Children's Library**.

Two notes:

* **Community Life is the one at risk** of becoming the drawer where everything lands. It must be defined positively — gatherings and shared meals — not as "other." If press releases start collecting there, it's failing.
* **This set is cheap to change.** Adding a Topic is a document, not a deployment. Launch with four or five and split one out when its content earns a page.

---

## 9. Core Experiences

### 9.1 Publish once, appear everywhere

An Editor enters an Event once. Without further work it appears on the events page, on the homepage if upcoming, on each tagged Topic page, and — when its URL is pasted into Facebook or a group chat — as a clean **share card** with the right image, title, and description.

That last item is small to build and does real work: the Facebook workflow the Center already relies on becomes *easier*, because a volunteer pastes a link instead of rebuilding the post. It attacks §3.1 without any dependency on social platform APIs.

### 9.2 The homepage

Two zones on desktop, divided by **permanence** rather than importance:

**Main column — things that change**

* One short identity line: what the Rizal Center is
* The **featured slot** — a single pinned item, chosen by the Admin
* Upcoming events and the current class schedule
* Recent announcements
* Recent posts

**Sidebar — things that stay true**

* The ask: donate and volunteer
* A pinned Resource List
* Visit information
* Topics, as entry points to the Center's program areas

On mobile the sidebar collapses beneath the main column. Nothing in the sidebar is duplicated content requiring separate maintenance.

### 9.3 What's happening

The Center's programming is mostly **standing weekly classes**, not one-off events. A site that shows only dated events would misrepresent most of what the Center does.

So "what's happening" has two faces:

* **The schedule** — recurring programming as a weekly timetable
* **Events** — dated one-offs, upcoming and past

Past events are **not** an archive to be hidden. They are evidence of activity, which is exactly what earns credibility with newcomers and funders.

### 9.4 The ask

Donate and volunteer appear sitewide — header, footer, and homepage sidebar. Both link out: **Zeffy** for donations, a **Google Form** for volunteering.

The Center's conversion layer is deliberately external (§18). The site's job is to ask well and hand off cleanly, never to process a payment or store a submission.

### 9.5 Who we are

A visitor must be able to answer, without hunting: what is this organization, who runs it, where is it, and how do I reach a human.

* **About** — what the Center is and does
* **Board** — real people, built from Person records with photos and roles
* **Visit & contact** — address, map, hours, email, socials, also present in the footer

### 9.6 No dead ends, but not endless either

Content pages offer a way onward: the Topics it belongs to, related content, a route back to the collection. But the *terminal* option on every page is the ask. Exploration that never converts is a brochure.

---

## 10. Content Model

| Type | Kind | Own page | In prototype |
| --- | --- | --- | --- |
| Event | Content | Yes | **Yes** — recurring + one-off, upcoming + past |
| Announcement | Content | Yes | **Yes** — recency + pinning |
| Post | Content | Yes | **Yes** — index by publish date |
| Topic | Entity | Yes | **Yes** — the differentiator |
| Person | Entity | No — byline / board listing | **Yes** — needs role + ordering |
| Location | Entity | No — shown on Events | Yes |
| Resource List | Content | Yes | Surfaced on homepage and Topic pages |
| Resource | Component | **No** | Yes, inside Resource Lists |
| Gallery | Content | Via Topics | **Deferred** — schema parked |
| Newsletter | Content | Yes | **Deferred** — PDF archive, low priority |

### 10.1 Model requirements

* **Announcements have no expiry date.** Currency is determined by recency plus an explicit pin. Expiry dates are a cleanup chore that asks a volunteer to predict the future at the moment they care least — and a wrong date is worse than none.
* **Announcement age is displayed**, so staleness is visible and honest rather than hidden.
* **Every type with a page has a stable, required slug**, generated automatically. Slugs are never the Editor's concern.
* **Person needs a role and an ordering field** to render a board page.
* **Images carry alt text** via a single reusable image type used everywhere, rather than fields repeated per document. Alt text is **optional** and AI-drafted: a required field produces garbage typed to get past it, which is worse for a screen reader than an empty one.
* **Field naming is consistent across types** — `title`, `slug`, `topics`, `body`. The homepage and every Topic page aggregate several types at once; inconsistent names force per-type special-casing forever.
* **Resources stay components, not documents.** A Resource is a link elsewhere; giving each its own page would create thin content that works against G7.

---

## 11. Information Architecture

```text
Home
│
├── What's Happening
│   ├── Class Schedule
│   ├── Upcoming Events
│   ├── Past Events
│   └── Event Detail
│
├── News
│   └── Post Detail
│
├── Topics
│   └── Topic  (program area — self-populating)
│       ├── Schedule & Upcoming Events
│       ├── Posts
│       ├── Announcements
│       └── Resource Lists
│
├── About
│   ├── Board
│   └── Visit & Contact
│
├── Donate      → Zeffy
└── Volunteer   → Google Form
```

Announcements appear on the homepage and Topic pages and have their own detail pages, but no index of their own — an announcements list is not a page anyone seeks out.

---

## 12. Editorial Experience

An Editor should be able to:

1. Create content
2. Enter the information
3. Assign Topics — a **primary, visible step**
4. Publish

### 12.1 Principles

* **URLs are not the Editor's job.** Slugs generate automatically. An Editor is never blocked by, or asked to reason about, a URL.
* **Metadata is derived, not authored.** Share cards and page metadata come from content already entered. Override fields exist only where curation earns its keep.
* **Nothing sends the Editor out of the form.** Inline fields are free; references cost attention. Where a reference is necessary — venue, author — the referenced type must be creatable and manageable from the Studio rather than hidden from it.
* **Topic curation is the Admin's.** Editors select; the Admin creates.

### 12.2 Preview — deferred

Editors publish and view the result on the prototype URL. Because the site isn't public, publishing carries no real risk — which is what makes deferral acceptable *for the prototype specifically*. Preview becomes necessary the moment the site is public (§16).

---

## 13. Non-Functional Requirements

**Sharing and discovery.** Clean URLs, derived metadata, and **Open Graph share cards on every content page** — promoted to a core deliverable because it's the mechanism by which §3.1 improves. Ranking outcomes are a launch concern.

**Performance.** Fast loads, optimized images, minimal client-side JavaScript. Directional for the prototype; no budget gates the demo.

**Accessibility.** WCAG 2.1 AA is the **launch** target. For the prototype the standard is narrower and actually verifiable: semantic HTML, alt text, keyboard navigation, and sufficient contrast, confirmed by an automated pass on each page type. A full audit is a launch gate.

**Maintainability.** Routine content changes never require code changes or deployments.

**Visual design is adopted, not invented.** An existing design system or template, restyled. Nobody will evaluate the originality of the design system, and hours spent there are hours not spent on §8.

---

## 14. Scope

### 14.1 In

* Homepage — main column and sidebar, featured slot
* Class schedule and events — recurring and one-off, upcoming and past, with detail pages
* Posts — index by publish date, with detail pages
* Topic pages — four to six, sections hiding when empty
* About, Board, Visit & Contact
* Donate and volunteer, sitewide
* Announcements — homepage surfacing, pinning, detail pages
* Resource Lists surfaced on the homepage and Topic pages
* Open Graph share cards, derived metadata, clean URLs
* Responsive layout, accessibility fundamentals
* Roughly 50 migrated posts plus current events (§15)

### 14.2 Deferred, schema ready

Galleries — later attached to Topics and major events. Newsletters — a PDF archive is low priority; the eventual intent is web-native issues composed from existing posts, events, and announcements. A standalone Resources index.

### 14.3 Out

Social media aggregation. Site search. Calendar view and event filtering. RSVP, newsletter signup, member accounts, donation processing. URL redirects and SEO migration. Full accessibility audit. Editorial preview. Enforced editorial permissions. Production hosting hardening.

---

## 15. Migration

Migration is **demo-critical**, not deferred. A prototype full of placeholder text persuades nobody.

**Target: roughly 50 posts, chosen to fill Topic pages** — not the 50 most recent. Migrate the posts that make *Immigration & Support* and *Arts & Theater* look alive. Plus current events and the standing class schedule, and the organizational content needed for About and Board.

**The old tags are not Topics.** The existing tag vocabulary mixes three different things — identity labels applied to nearly everything, content-type labels, and genuine subjects. Migration **translates** into the §8.3 set rather than copying. Most old tags simply evaporate.

**Migration is also a test of the model.** Any real item that won't fit cleanly is a finding worth having now.

URL preservation is explicitly not part of this. The current site stays live, so nothing breaks (§16).

---

## 16. Launch Gates

None block the prototype. All block a public launch.

1. **URL preservation and redirects** — mapping indexed WordPress URLs to new destinations
2. **Full WCAG 2.1 AA audit**
3. **Editorial preview**
4. **Content backup and export** — a documented, tested way to get everything out of Sanity
5. **Bus-factor plan** — a named second person with access and enough documentation to keep the site running
6. **Hosting decision confirmed and hardened**
7. **Visit & contact content moved from hardcoded to editable**

---

## 17. Success Criteria

### 17.1 Primary

* **S1 — Go-ahead.** Staff and administrators give an explicit decision to continue past the prototype. Binary, and the only one that truly matters.
* **S2 — Unaided publish.** The Admin creates and publishes real content during the demo, without developer help, in under five minutes.
* **S3 — A Topic page earns itself.** The Admin sees that creating a Topic produces a page that fills and maintains itself — and recognizes it as work they no longer have to do.

### 17.2 Secondary

* **S4 — Publish-once fan-out.** One published Event reaches the events page, the homepage, its Topic pages, and a valid share card with no extra editing.
* **S5 — Content realism.** No placeholder text on any page shown.
* **S6 — Model fit.** Every migrated item fits without a schema change or a free-text workaround. Items that don't are recorded as findings — a useful outcome, not a failure.

### 17.3 Counter-metrics — do not optimize

* **Number of finished pages.** A broad, shallow prototype is worse than a narrow, credible one.
* **Visual polish.** Polish bought at the cost of the editorial loop working is a net loss. If the pages look excellent and the Admin can't publish, the demo failed.
* **Hosting readiness.** Hardening infrastructure before a go-ahead is investment in a project that may not continue.

---

## 18. Principles

**Community first.** The site communicates what is happening within the organization.

**Publish once.** Entering content a second time is a design failure.

**Don't build what a form can do.** Zeffy handles money; Google Forms handles submissions. No payments, no personal data, no auth, no backend. This is a deliberate architectural position, not a shortcut — and it likely retires most of the "eventually we'll need a database" roadmap.

**Design for the untended case.** This site will go unattended for stretches. The right design is the one that degrades most gracefully when nobody is tending it, not the one that's best when someone is. Recency-based announcements age quietly; expiry dates fail loudly. Self-populating Topic pages stay honest; hand-built program pages rot.

**Low maintenance has teeth.** A feature that makes publishing easier but needs a developer to revive it every few months violates this principle rather than serving it.

**Structured content.** Content is modeled once and presented many ways.

**Cost conscious.** Near-zero operating cost is a requirement, not an aspiration.

---

## 19. Future Direction

**Near term** — galleries attached to Topics and major events; web-native newsletters composed from existing content; a donation-progress module in the featured slot, with the figure entered by the Admin; site search; calendar view.

**Later** — RSVP via forms; richer related-content; per-program contact routing.

**Deliberately undecided: social media aggregation.** Pulling content from the Center's social platforms is an appealing answer to §3.1, and it is not a plan. The likely sources share one app-review process and one credential-expiry failure mode, meaning the site could silently go stale in a way no volunteer can fix — which violates *design for the untended case*. Meanwhile §9.1 attacks the same problem from the opposite direction at a fraction of the cost. If it's ever pursued, the maintenance burden gets costed honestly first.

---

## 20. Assumptions

* Staff and administrators have authority to approve continuing past the prototype.
* A live demo is the evaluation format.
* The Admin is willing to publish live in front of the room. If not, S2 needs a different demonstration.
* Roughly 6–8 weeks of part-time solo development is available.
* Board members' names and photographs are publishable.
* The existing WordPress content is accessible for manual migration.
* The standing class schedule is stable enough that recurring entries rarely need per-occurrence edits.
* The editorial team stays at roughly three people. Enforced permissions become worth building if it grows.
