---
title: Rizal Center of Chicago Website
version: 1.2
status: Prototype definition
created: 2026-08
updated: 2026-08-29
---

# Product Requirements Document

**Project:** Rizal Center of Chicago Website
**Version:** 1.2 — Prototype Definition
**Status:** Ready for build
**Last Updated:** 2026-08-29
**Delivery window:** 6–8 weeks

---

## 1. Purpose

This document defines a **working prototype** of a new Rizal Center of Chicago website, to be demonstrated to Center staff and administrators.

The existing WordPress site stays live and untouched throughout. The prototype exists to answer one question:

> Should the Rizal Center invest in replacing its website with this?

Everything here is scoped to that question. Public traffic, search rankings, and URL preservation are **not** prototype concerns — they are recorded in §15 as launch gates so deliberate omissions don't become permanent ones.

Technology decisions live in [architecture.md](architecture.md). Delivery sequencing lives in [epics.md](epics.md).

---

## 2. Problem

### 2.1 The Center is far more active than its website reveals

This is the core problem, and it is a gap between reality and presentation rather than a shortage of anything.

The Rizal Center runs eight or more classes a week across multiple instructors and partner gyms. It hosts coffee talks, line dancing, workshops, and cultural programming. Its archive holds hundreds of posts on Filipino and Filipino American life, dozens of photo galleries, and years of newsletters.

A visitor to the current site sees almost none of it.

This matters because a website that looks quiet reads as an organization that *is* quiet — to a newcomer deciding whether to visit, to a regular deciding where to look for information, and to a funder deciding whether the Center is worth supporting.

### 2.2 Information about the Center is scattered

Events, posts, announcements, resources, galleries, and program information live in different places and different platforms. There is no single destination that holds all of it, so no reliable answer to "where do I look?"

### 2.3 What is *not* the problem

Named explicitly, because each of these is a real thing that is nonetheless not what this project is solving:

* **Duplicated publishing effort.** The Center currently maintains events on both Facebook and the website. That's real, and it is not a prototype concern — see §18.
* **Program pages requiring manual setup.** Also real, also not core.
* **Volunteers being unable to manage content.** WordPress already solves this. It is a **constraint to preserve**, not a problem to fix — see §5.

---

## 3. The Core Proposition

> **A central digital hub that makes the Center's community work visible.**
>
> Its homepage carries a **community pulse** — a live mix of what's coming up and what just happened, across everything the Center does — on a foundation built to support future community tools without redesign.

Three parts, each load-bearing:

1. **The hub.** One destination holding the Center's information. It does not have to be *complete* in the prototype; it has to stand on its own.
2. **The pulse.** The mechanism that makes activity visible. §7 specifies it in detail because the whole proposition depends on it.
3. **The foundation.** Structured content and a content model that accommodates galleries, newsletters, RSVP, and community tools later without reworking what exists.

The critical insight behind all three: **the Center doesn't need to produce anything new to feel alive.** It needs a site that surfaces what it's already doing. That makes this achievable in the prototype, with no new volunteer burden and no dependency on anything outside the organization.

---

## 4. Goals

| # | Goal | Why |
| --- | --- | --- |
| G1 | Make the Center's activity visible at a glance | §2.1 — the core problem |
| G2 | Be the single destination for information about the Center | §2.2 |
| G3 | Build a content foundation that supports future community tools without redesign | §3 |
| G4 | Show what's happening — the class schedule, upcoming events, and what recently happened | administration priority |
| G5 | Make donating obvious and easy from anywhere | administration priority |
| G6 | Explain what the Center is, who runs it, where it is, how to reach it | administration priority |
| G7 | Make volunteering a visible, one-click ask | administration priority |
| G8 | Be findable by people who don't know the Center exists | discovery |

**G3 has a test**, so it doesn't drift into platitude: *for each plausible future feature — galleries, web-native newsletters, RSVP, member accounts, site search — can it be added without changing existing content types?*

---

## 5. Constraints

Not goals. Things that must remain true, where the bar is *match what exists*, not improve on it.

* **Non-technical volunteers must be able to manage content.** WordPress delivers this today. Regressing here fails the project regardless of what else is achieved.
* **Near-zero operating cost.** A requirement, not an aspiration.
* **Routine content changes never require code or deployments.**
* **Visual design is adopted, not invented.** An existing design system, restyled. Nobody will evaluate the originality of the design system, and hours spent there are hours not spent on §7.

---

## 6. Audience

### 6.1 Visitors

* **Newcomers** arriving cold — from search, a shared link, or word of mouth. They need orientation first: what is this, is it real, is it for me.
* **Regulars** crossing over from Facebook. They need current information fast, without scrolling past an introduction they don't need.

Also in scope and easy to forget: **funders and partners** doing due diligence, who read the same signals as a newcomer and read them more harshly.

The homepage serves all of them via §7 — a hero that orients, a pulse that informs.

### 6.2 Editors and Admin

* **1–2 Editors** — volunteers creating Events, Posts, and Announcements.
* **1 Admin** — additionally curates Topics and site-level content.

At three people, **convention beats enforcement.** Editorial boundaries in §11 are agreements, not permission systems to build.

### 6.3 Not the audience for the prototype

The general public and search engines. The current site continues to serve them.

---

## 7. The Community Pulse

The homepage centrepiece and the answer to §2.1. A single stream mixing everything currently relevant, with filter pills.

A unified feed matters because **segmented sections make a busy organization look like four quiet ones.** One stream shows volume; four regions divide it.

### 7.1 What's in it

Upcoming Events, recent Posts, and recent Announcements. One card per document.

**Completed events are not in the pulse.** If something notable happened, someone writes about it — and that post is the pulse item. A finished event card is redundant with the content describing it, and a dead end for a visitor scanning for something to attend. Past events stay browsable on the Events surface (§12.1).

### 7.2 Ordering

Every item has a **pulse date**:

| Type | Pulse date |
| --- | --- |
| Post | published date |
| Announcement | published date |
| Event (one-off) | start date |
| Event (recurring) | next upcoming occurrence |

Items sort by **proximity to today** — absolute distance from now, regardless of direction. An event in two days and a post from two days ago sit side by side. Things nearest *now* rise to the top.

Ties break in favour of the upcoming item.

This rule is chosen for being **explainable**. The Admin can predict what lands at the top, which matters — an unpredictable feed is one they'll fight. No weights, no tuning.

It also produces a property worth having deliberately: because upcoming events climb as they approach and posts sink as they age, **the pulse reorders itself daily even when nobody publishes.** The homepage visibly changes with no volunteer effort at all — the "feels alive" goal served *by* the untended case rather than in spite of it.

### 7.3 Windows, and the guarantee

| Type | Preferred window |
| --- | --- |
| Events | upcoming only — roughly the next 14 days |
| Posts, Announcements | roughly the last 30 days |

Both figures are tunable knobs, not commitments. They want adjusting once real content is in the feed.

**The window is a preference; the item count is the guarantee.** Target around 12 items. If the window doesn't produce enough, widen it until it does.

This is the most important rule in the section. The pulse *is* the "feels alive" claim, and an empty pulse doesn't say "a quiet week" — it says "abandoned site." Reaching further back is always better than showing a gap.

### 7.4 Recurring events

A recurring class is **one document and one card**, showing its times for the week:

> **CL Grappling** · Tue 7:00 PM · Sun 9:00 AM

Not one card per occurrence. With eight or more classes a week, per-occurrence cards would drown everything else and the pulse would become a martial arts feed. One card per program keeps the mix honest and is more useful to a visitor besides.

A genuinely special one-off inside a program — a tournament, a showcase — is a normal Event and appears on its own.

Note the deliberate asymmetry with §12.1: **the Events calendar expands recurrences; the pulse collapses them.** A grappling class appears on every date it runs in the calendar, and once with its weekly times in the pulse. Same document, two renderings, each correct for its context.

### 7.5 Card requirements

* **A temporal label on every card** — "In 3 days" · "Yesterday" · "Last Tuesday". Non-negotiable: a list silently mixing past and future is disorienting, and the label is what makes proximity-sorting legible rather than arbitrary.
* Type indicated, matching the filter pills
* Title, image where available, short excerpt
* Links to the item's own page

### 7.6 Pills

Filter within the pulse by type. Pills are a legitimate exception to the minimal-JavaScript preference — client-side filtering over an already-loaded feed is what makes it feel instant, and *instant* is the point.

Pill labels are **visitor-facing copy, not schema names.** "Events · Stories · Updates" likely reads better to a community member than "Events · Posts · Announcements."

### 7.7 One component, two uses

**A Topic page is the same pulse, scoped to one topic.** Same cards, same pills, same ordering.

Build it once and parameterize it. This is why §8 is inexpensive, and it removes any need for topic pages to hide empty sections — there are no fixed regions to be empty, just fewer items and fewer pills.

---

## 8. Topics

A Topic is a **persistent area of the Center's activity** that gets its own page: *Filipino Martial Arts*, *Arts & Theater*.

**Called "Programs" in the interface.** "Topic" is internal vocabulary — visitors and Editors see *Programs* in the navigation, on the page, and in the Studio. Keep the schema type name as it is and set its display title; no migration needed. This document uses "Topic" for the schema concept and "Programs" for anything a person reads.

The Admin creates a Topic document, Editors tag content to it, and the page exists at a stable URL and stays current on its own. It's a second path through the hub — by area of interest rather than by recency or type — and it's how the *breadth* of community work becomes visible rather than just the most recent slice.

### 8.1 Rules

* **Curated by the Admin.** Editors select; they don't create.
* **Optional on content.** Forcing a topic onto everything pushes content into areas where it doesn't belong, which destroys the reason to trust a Topic page. Untagged content stays discoverable in the pulse and on its type's index.
* **Flat.** No nesting. If something belongs to two, tag both.
* **Prominent in the editing form** — a primary field, never filed under advanced settings. A field nobody sees is a field nobody fills.

### 8.2 At launch

| Topic | Visitor intent |
| --- | --- |
| Filipino Martial Arts | I want to train |
| Arts & Theater | I want to watch or perform |
| Community Life | I want to belong — gatherings, shared meals |
| Immigration & Support | I need help |
| Heritage & Language | I want to learn where I come from |

Optional sixth if content supports it: **Pamana Children's Library**.

* **Community Life is the one at risk** of becoming the drawer where everything lands. It must be defined positively — gatherings and shared meals — not as "other."
* **This set is cheap to change.** Adding a Topic is a document, not a deployment. Launch with four or five; split one out when its content earns a page.

---

## 9. The Homepage

**Hero banner** — orients a newcomer in one glance: what the Rizal Center is.

**Featured slot** — one Admin-pinned item, above the pulse.

**Community pulse** — §7. The main column.

**Sidebar — things that stay true.** Divided from the main column by *permanence*, not importance:

* Donate and volunteer
* A pinned Resource List
* Visit information
* Topics, as entry points to the Center's program areas

On mobile the sidebar collapses beneath the main column. Nothing in the sidebar is separately maintained content.

---

## 10. Content Model

| Type | Kind | Own page | In prototype |
| --- | --- | --- | --- |
| Event | Content | Yes | **Yes** — recurring + one-off, upcoming + past |
| Announcement | Content | Yes | **Yes** — recency + pinning |
| Post | Content | Yes | **Yes** — index by publish date |
| Topic | Entity | Yes | **Yes** — scoped pulse |
| Person | Entity | No — byline, board listing | **Yes** — needs role + ordering |
| Location | Entity | No — shown on Events | Yes |
| Resource List | Content | Yes | Surfaced in sidebar and on Topic pages |
| Resource | Component | **No** | Yes, inside Resource Lists |
| Gallery | Content | Via Topics | **Future** — seam left, not built |
| Newsletter | Content | Yes | **Future** — schema ready |

### 10.1 Requirements

* **One shared pulse projection.** Every pulse consumer — homepage, Topic pages, and later search or newsletters — reads through a single GROQ fragment mapping each type to a common card shape. Field names do not need to match; the projection coalesces them. **Its single-source-of-truth status is the requirement**, because the failure mode is a new type silently not rendering.
* **Free renames now**, while no content exists: `eventTitle` → `title`, `eventBody` → `body`, one consistent name for the topics array. Semantically distinct fields such as `startDate` and `publishDate` keep distinct names and are coalesced.
* **Announcements have no expiry date.** Currency comes from recency plus an explicit pin. An expiry date is a cleanup chore that asks a volunteer to predict the future at the moment they care least, and a wrong date is worse than none.
* **Every type with a page has a stable, auto-generated slug.** Slugs are never the Editor's concern.
* **Person needs role and ordering** for the board page.
* **Images carry optional alt text** via one reusable image type used everywhere. Optional and AI-drafted rather than required: a required field produces text typed to get past it, which is worse for a screen reader than an empty one.
* **Resources stay components.** A Resource is a link elsewhere; its own page would be thin content working against G8.

---

## 11. Editorial Experience

An Editor should be able to create content, enter the information, assign Topics as a **primary visible step**, and publish.

* **URLs are not the Editor's job.** Slugs generate automatically.
* **Metadata is derived, not authored.** Share cards and page metadata come from content already entered.
* **Nothing sends the Editor out of the form.** Inline fields are free; references cost attention. Where a reference is necessary — venue, author — the referenced type must be creatable and manageable from the Studio, not hidden from it.
* **Topic curation belongs to the Admin.**
* **Preview is deferred.** Editors publish and view on the prototype URL. The site isn't public, so publishing carries no real risk — which is what makes deferral acceptable *for the prototype specifically*. Preview becomes necessary the moment it goes public (§15).

---

## 12. Information Architecture

**Navigation:** Home · Events · Programs · News · About · **Donate**

```text
Home  (hero · featured · community pulse · sidebar)
│
├── Events                  (one calendar surface)
│   ├── dated rows, expandable in place
│   ├── recurring classes on each date they run
│   ├── past events behind a toggle
│   └── Event Detail        (own URL, for search and sharing)
│
├── News
│   └── Post Detail
│
├── Programs                (Topics)
│   └── Program             (scoped pulse)
│
├── About
│   ├── Board
│   └── Visit & Contact
│
├── Donate      → Zeffy
└── Volunteer   → Google Form
```

### 12.1 The Events surface

One page replaces what would otherwise be four — class schedule, upcoming, past, and detail views. It behaves like a conventional calendar: dated rows, expandable in place for description and logistics. Cheaper to build, and familiar to an admin coming from WordPress, which is the right bar.

**Each event still keeps its own URL.** If details existed only inside an accordion, individual events couldn't be indexed or shared — no search landing page, no pasting a link into a group chat. The marginal cost is a thin route reusing the same data and card, and it preserves one of the few things a website does that social platforms structurally cannot.

If this ever needs cutting, drop the detail route for *recurring classes* only. Nobody searches for a weekly grappling class; someone might well share a ticketed workshop.

Announcements have detail pages and appear in the pulse and on Program pages, but no index of their own — an announcements list is not a page anyone seeks out.

---

## 13. Non-Functional Requirements

**Sharing and discovery.** Clean URLs, derived metadata, and Open Graph share cards on every content page. Cheap to build, and shared links are a real path into the hub. Ranking outcomes are a launch concern.

**Performance.** Fast loads, optimized images, minimal client-side JavaScript — with pulse filtering as the deliberate exception (§7.6). Directional for the prototype; no budget gates the demo.

**Accessibility.** WCAG 2.1 AA is the **launch** target. For the prototype: semantic HTML, alt text, keyboard navigation, sufficient contrast, verified by an automated pass on each page type. A full audit is a launch gate.

**Maintainability.** See §5 — this is a constraint, and the bar is matching WordPress.

---

## 14. Scope

### 14.1 In

* Homepage — hero, featured slot, community pulse with pills, sidebar
* Events — one calendar surface covering classes, upcoming and past, with expandable rows and per-event URLs
* Posts — index by publish date, with detail pages
* Announcements — pulse surfacing, pinning, detail pages
* Topic pages — four to six, as scoped pulses
* About, Board, Visit & Contact
* Donate and volunteer, sitewide
* Resource List in the sidebar and on Topic pages
* Open Graph share cards, derived metadata, clean URLs
* Responsive layout, accessibility fundamentals
* Roughly 50 migrated posts plus current events and the class schedule

### 14.2 Future, foundation ready

Galleries — attached to Topics and major events; the strongest instrument for §2.1 and deferred only on time, so the seam stays clean. Web-native newsletters composed from existing posts, events, and announcements. A standalone Resources index. Donation-progress module in the featured slot.

### 14.3 Out

Social media aggregation. Site search. Calendar view and event filtering. RSVP, newsletter signup, member accounts, donation processing. URL redirects and SEO migration. Full accessibility audit. Editorial preview. Enforced editorial permissions. Production hosting hardening.

---

## 15. Launch Gates

None block the prototype. All block a public launch.

1. URL preservation and redirects from the current site
2. Full WCAG 2.1 AA audit
3. Editorial preview
4. Content backup and export — documented and tested
5. Bus-factor plan — a named second person with access and documentation
6. Hosting decision confirmed and hardened
7. Visit & contact content moved from hardcoded to editable

---

## 16. Migration

Migration is **demo-critical**. A prototype full of placeholder text persuades nobody.

**Target: roughly 50 posts, chosen to fill Topic pages** — not the 50 most recent. Migrate the posts that make *Immigration & Support* and *Arts & Theater* look alive. Plus current events, the standing class schedule, board members, and the organizational content for About.

**The old tags are not Topics.** The existing vocabulary mixes three different things: identity labels applied to nearly everything, content-type labels, and genuine subjects. Migration **translates** into the §8.2 set; most old tags evaporate.

Migration doubles as a test of the model — any real item that won't fit cleanly is a finding worth having now.

URL preservation is not part of this. The current site stays live, so nothing breaks.

---

## 17. Success Criteria

### 17.1 Primary

* **S1 — Go-ahead.** Staff and administrators explicitly decide to continue past the prototype. Binary, and the only one that finally matters.
* **S2 — The pulse reads as alive.** Someone seeing the homepage for the first time recognizes the Center as an active organization. This is §2.1 resolved, and it's what the prototype is really testing.
* **S3 — Unaided publish.** The Admin creates and publishes real content during the demo, without developer help, in under five minutes — and it appears in the pulse.

### 17.2 Secondary

* **S4 — Hub coherence.** A visitor can find the Center's schedule, recent activity, program areas, board, and contact details without leaving the site or guessing.
* **S5 — Content realism.** No placeholder text on any page shown.
* **S6 — Foundation test.** For galleries, newsletters, and RSVP, the team can state how each would be added without changing existing content types (G3).
* **S7 — Model fit.** Every migrated item fits without a schema change or a free-text workaround. Items that don't are findings, not failures.

### 17.3 Counter-metrics — do not optimize

* **Number of finished pages.** A broad, shallow prototype is worse than a narrow, credible one.
* **Visual polish.** Polish bought at the cost of the pulse or the editorial loop is a net loss.
* **Hosting readiness.** Hardening infrastructure before a go-ahead is investment in a project that may not continue.

---

## 18. Principles

**Show the work.** The Center is already active. The site's job is to make that visible, not to ask anyone to do more.

**One stream beats four sections.** Segmenting activity hides volume.

**Design for the untended case.** This site will go unattended for stretches. The right design degrades gracefully when nobody is tending it. The pulse widens its window rather than emptying; announcements age quietly rather than expiring wrongly; Topic pages stay current without curation.

**Don't build what a form can do.** Zeffy handles money; Google Forms handles submissions. No payments, no personal data, no auth, no backend — a deliberate position, not a shortcut, and one that likely retires most of the "eventually we'll need a database" roadmap.

**Match the incumbent where it's already good.** WordPress lets volunteers publish. That's the bar, not the target.

**Structured content.** Modeled once, presented many ways — the mechanism behind G3.

**Cost conscious.** Near-zero operating cost is a requirement.

---

## 19. Future Direction

**Near term** — galleries attached to Topics and major events; web-native newsletters composed from existing content; a donation-progress module in the featured slot with the figure entered by the Admin; site search; calendar view.

**Later** — RSVP via forms; per-program contact routing; richer related content.

**Reducing duplicated publishing effort** — the Center maintains events on both Facebook and the website today. Worth solving, not now. Two directions exist: making shared links attractive enough that the website becomes the source and Facebook the pointer, or aggregating from social platforms into the site.

**Deliberately undecided: aggregation.** The likely sources share one app-review process and one credential-expiry failure mode, meaning the site could silently go stale in a way no volunteer can fix — which violates *design for the untended case*. If pursued, the maintenance burden gets costed honestly first.

---

## 20. Assumptions

* Staff and administrators have authority to approve continuing past the prototype.
* A live demo is the evaluation format.
* The Admin is willing to publish live in front of the room. If not, S3 needs a different demonstration.
* Roughly 6–8 weeks of part-time solo development is available.
* Board members' names and photographs are publishable.
* The existing WordPress content is accessible for manual migration.
* The standing class schedule is stable enough that recurring entries rarely need per-occurrence edits.
* The editorial team stays at roughly three people.
