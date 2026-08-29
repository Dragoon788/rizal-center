---
title: Rizal Center Website — Epic Breakdown
version: 1.2
status: Ready for build
created: 2026-08-28
updated: 2026-08-29
prd: prd.md
---

# Epic Breakdown — Prototype

**Scope:** [prd.md](prd.md) §14
**Window:** 6–8 weeks, part-time, solo
**Estimate:** ~7.0 weeks — fits the window with a little slack, which the cut order protects

Every epic traces to a goal in [prd.md](prd.md) §4. Nothing is here because it's interesting.

---

## Overview

| # | Epic | Size | Est. | Serves | Depends on |
| --- | --- | --- | --- | --- | --- |
| **E1** | Foundation & Shell | L | 1.5 wk | enabler | — |
| **E2** | Content & Detail Pages | M | 1.0 wk | G4, G8 | E1 |
| **E3** | **Community Pulse** | M | 1.0 wk | **G1**, G2 | E1, E2 |
| **E4** | Topic Pages | S | 0.5 wk | G1, G2 | E3 |
| **E5** | Who We Are | M | 0.75 wk | G6 | E1 |
| **E6** | The Ask | S | 0.5 wk | **G5**, G7 | E1 |
| **E7** | Homepage Assembly | M | 0.75 wk | G1, G2 | E3, E6 |
| **T1** | Content Migration *(track)* | M | 1.0 wk | S5 | E1 |

**E3 is the product.** It's the mechanism that resolves the core problem, and S2 measures it directly. E6 is the administration's top priority. If pressure lands anywhere, not on those two.

E4 is cheap *because* E3 exists — a Topic page is the pulse, scoped.

---

## E1 — Foundation & Shell

**Goal:** a deployed, styled, navigable shell wired to Sanity, with the groundwork every later epic assumes.

### Scope

**Wiring**
* Sanity client, typed queries, image URL builder
* **Content revalidation on publish.** A volunteer publishing must change the live site with no developer involvement. This is the mechanism behind the entire maintainability constraint ([prd.md](prd.md) §5) — not optional, and worth getting right early.
* Deploy to a shareable URL

**The shared pulse projection**
* One GROQ fragment mapping every pulse type to a common card shape: type, pulse date, title, slug, image, excerpt
* Coalesces existing field names rather than requiring schema uniformity — `coalesce(eventTitle, title)`, `coalesce(startDate, publishDate)`
* **Single source of truth.** Every consumer reads through it. The failure mode being designed against is a new content type silently not appearing in the pulse.

**Shell**
* Adopt and restyle an existing design system — do not invent one ([prd.md](prd.md) §5)
* Header with nav — Home · Events · Programs · News · About — and a persistent Donate action
* Footer with visit & contact information, hardcoded
* Main-column / sidebar layout primitives for E7
* Metadata and Open Graph defaults in the root layout, so every page inherits share cards for free
* A thin homepage — placeholders where the pulse will go

**Schema pass** *(cheap now, no content exists)*
* Free renames: `eventTitle` → `title`, `eventBody` → `body`, one consistent name for the topics array
* One reusable image type carrying optional `alt` and `caption`, applied to every image field
* Topics promoted to a primary, visible field on every content type
* `Person` gains role and ordering, for E5
* `Location` unhidden in the Studio so venues are creatable and editable
* Recurrence on Event, with per-occurrence override
* Announcement pinning; no expiry field; publish date available for display
* Slugs required and auto-generated everywhere
* Topic display title set to "Programs" so the Studio matches the site — schema type name unchanged, no migration
* `gallery` explicitly parked rather than left as unregistered drift

### Done when
A styled, responsive page loads on a public URL with working navigation; an Editor publishing in Sanity sees the change live without a developer; the pulse projection returns a uniform card shape across all three content types; no type an Editor needs is hidden from the Studio.

### Risks
Deployment is the classic timeline thief. If it resists for more than a day, fall back to the fastest working preview host and revisit after the go-ahead — hosting readiness is an explicit counter-metric ([prd.md](prd.md) §17.3).

---

## E2 — Content & Detail Pages

**Goal:** every content type has a real page, so pulse cards have somewhere to land.

**Why bundled:** Events, Posts, and Announcements share one page pattern. Building them together is materially cheaper than three passes.

### Scope

**Events — one calendar surface**
* A single dated list behaving like a conventional calendar: rows expandable in place for description and logistics
* Recurring classes appear on **each date they run** — the calendar expands recurrences, unlike the pulse which collapses them
* Recurrence support with per-occurrence override
* Past events behind a toggle on the same surface
* Per-event detail route with its own URL — thin, reusing the same data and card, so events stay indexable and shareable
* Cost shown prominently, including when free
* Venue with map, contact, provider, topics

**Posts**
* Index ordered by publish date, paginated
* Detail page: body, author byline from `Person`, featured image, topics, publish date

**Announcements**
* Detail page
* Pinning honoured; publish date displayed so age is visible and honest

**All three**
* Share card per page
* Cross-links to the item's Topics

### Done when
A visitor can see what's on this week, what's coming, and what recently happened; can open any event, post, or announcement and get complete information; and pasting any URL into a chat produces a correct share card.

### Notes
Past events with photographs are the strongest material the site has for §2.1, but galleries are future ([prd.md](prd.md) §14.2) — leave the seam, don't build it.

---

## E3 — Community Pulse

**Goal:** a single stream on the homepage mixing what's coming up and what just happened, with filter pills.

**Why it's the product:** it is the mechanism that resolves §2.1. Everything else in the prototype is a hub component; this is the thing that makes the hub feel alive. S2 measures it directly.

### Scope

**The feed**
* Upcoming Events, recent Posts, recent Announcements in one stream, one card per document
* **Completed events excluded** — the post describing an event is the pulse item, not the finished event
* Ordered by **proximity to today**. Ties favour the upcoming item.
* Preferred windows: events the next ~14 days; posts and announcements the last ~30 days. Both tunable.
* **Count guarantee: target ~12 items, widening the window until reached.** The pulse can never render near-empty — an empty pulse reads as an abandoned site, the exact opposite of what it exists to prove.
* Because upcoming events climb as they approach and posts sink as they age, the feed **reorders itself daily with nobody publishing** — worth verifying, since it's a large part of the "alive" effect

**Recurring events**
* One document, one card, showing that week's times — *"CL Grappling · Tue 7:00 PM · Sun 9:00 AM"*
* Never one card per occurrence. Eight-plus classes a week as individual cards would drown everything else and turn the pulse into a martial arts feed.
* Pulse date is the next upcoming occurrence

**Cards**
* **Temporal label on every card** — "In 3 days" · "Yesterday" · "Last Tuesday". Required: a list silently mixing past and future is disorienting, and the label is what makes proximity-sorting legible.
* Type indicator matching the pills
* Title, image where available, short excerpt, link to its own page

**Pills**
* Filter by type within the loaded feed
* Client-side, for instant response — the deliberate exception to the minimal-JS preference ([prd.md](prd.md) §7.6)
* Labels are visitor-facing copy: "Events · Stories · Updates", not schema names

**Built to be reused**
* Parameterized by topic from the start, since E4 is this component scoped

### Done when
The homepage shows a coherent mixed stream where a visitor can tell at a glance that the Center is busy; every card states its timing in plain language; pills filter instantly; recurring classes appear once with their weekly times; and the feed still looks populated after a quiet fortnight.

### Risks
**The quiet-period failure.** Verify it explicitly: query the pulse against a simulated three-week gap in new content and confirm it still returns ~12 items. This is the component's only real failure mode and it's invisible until it happens.

---

## E4 — Topic Pages

**Goal:** the Admin creates a Topic — presented as a **Program** in the interface — and gets a page that fills and maintains itself.

**Why it's small:** it's E3 with a filter. No new feed logic, no new cards, no empty-section handling — a scoped pulse simply shows fewer items and fewer pills.

### Scope
* Topic page rendering the pulse scoped to that topic, with a wider time window than the homepage since a topic page is a browse surface rather than a heartbeat
* Topic description and cover image
* Topics index — the Center's program areas as entry points
* Resource Lists surfaced on relevant Topic pages
* Share card per topic
* Stable URLs — Topic pages are intended to replace hand-built program pages permanently

### Done when
Creating a Topic in Sanity and tagging content to it produces a complete, current page with no developer involvement — demonstrated live for a program-heavy topic and an editorial-heavy one.

### Risks
**Cold start.** A thin Topic page is worse than none, because it's the first one a visitor clicks and it teaches them not to trust the others. Mitigation lives in T1: migrate to *fill* topics rather than chronologically.

---

## E5 — Who We Are

**Goal:** a visitor can answer what this organization is, who runs it, where it is, and how to reach a human — without hunting.

### Scope
* About page — what the Center is and does
* Board page — real people from `Person` records, with photographs, roles, and deliberate ordering
* Visit & contact page — address, map, hours, email, social links
* Same contact information in the footer

### Done when
A newcomer or a funder can, within one click of the homepage, see who runs the Center, where it is, and how to make contact.

### Notes
Visit & contact content is hardcoded for the prototype — a deliberate shortcut, recorded as launch gate 7.

---

## E6 — The Ask

**Goal:** donating and volunteering are obvious from anywhere.

**Why it matters:** donations are the administration's first-stated priority.

### Scope
* Persistent Donate action in the header, sitewide
* Donate and Volunteer in the homepage sidebar
* Both in the footer
* Donate → Zeffy, outbound link. Volunteer → Google Form
* Featured-slot seam able to accept a non-content module, so the future donation-progress block drops in without a redesign

### Done when
Donate and Volunteer are reachable in one click from every page, both destinations work, and the featured slot can hold something other than a content reference.

### Notes
No payment processing, no form handling, no stored submissions — ever ([prd.md](prd.md) §18).

---

## E7 — Homepage Assembly

**Goal:** the page the whole proposition lives or dies on.

**Why last and why small:** a thin version ships in E1 and the pulse arrives in E3, so this epic is composition rather than construction. It is never built cold at the end.

### Scope
* Hero banner — orients a newcomer in one glance
* Featured slot — one Admin-pinned item, above the pulse
* Community pulse in the main column
* Sidebar: donate and volunteer, pinned Resource List, visit information, Topics as entry points
* Sidebar collapses beneath the main column on mobile
* Every region derives from existing content — nothing on the homepage is separately maintained
* Empty regions degrade gracefully

### Done when
The homepage tells a newcomer what the Center is, shows a regular what's happening, asks for a donation without being asked to, and requires no maintenance of its own — publishing anywhere updates it.

---

## T1 — Content Migration *(cross-cutting track)*

**Goal:** the prototype contains real content, not placeholders. Runs alongside E2–E5, not as a phase.

### Scope
* **~50 posts, selected to fill Topic pages** — not the 50 most recent
* Current events and the standing class schedule
* Board members as `Person` records with roles
* Organizational content for About
* **Translate old tags into the five launch Topics.** The existing vocabulary mixes identity labels applied to nearly everything, content-type labels, and genuine subjects. Most old tags evaporate; they are not Topics.

### Done when
No page in the demo path contains placeholder text, and each launch Topic has enough content to look deliberately curated.

### Notes
Migration doubles as a model test — any item that won't fit cleanly is a finding worth having now (S7).

---

## Sequencing

```
Week 1-2   E1 ════════════════►  (thin homepage lands here)
Week 2-4        E2 ══════════════════►
Week 3-5             T1 ═══════════════════════════►  (runs across)
Week 4-5                  E3 ══════════►   ← the product
Week 5-6                        E4 ═══►  E5 ═════►  E6 ═══►
Week 6-7                                      E7 ══════►
Week 7-8   buffer · polish · demo rehearsal
```

Three sequencing rules:

1. **A thin homepage ships in E1.** It's the first thing the admin sees and the assembly point for everything else. Building it last means building it tired.
2. **Migration starts as soon as E2 exists.** Content reveals model problems, and model problems get cheaper the earlier they surface.
3. **E3 needs real content to be judged.** Don't evaluate the pulse against three test documents — it will look wrong for reasons that aren't its fault. Sequence it after migration has started.

---

## Cut Order

If the window compresses, cut from the top:

1. **Posts index pagination** → most recent 20, no pagination
2. **Past events toggle** → upcoming only on the Events surface
3. **Programs index page** → reach programs from cards and the sidebar only
4. **About page** → fold into the homepage hero section
5. **Two of the five Programs** → launch with three
6. **Detail routes for recurring classes** → keep them for one-off events, where search and sharing actually matter

**Never cut:** the community pulse, event and post detail pages, at least two Topic pages, the donate and volunteer asks, the hero, and real migrated content.

Rationale: the demo exists to prove that the Center looks alive and that the Admin can keep it that way. The pulse is the proof, and two Topic pages of different shapes prove the mechanism generalizes. Everything above the never-cut line is supporting evidence.

---

## Demo Rehearsal

Not an epic, but it belongs in the plan. Reserve time in week 7–8 to:

* Walk the Admin through publishing **before** the demo, so S3 isn't attempted cold in front of the room
* Verify the pulse against a simulated quiet period
* Paste a real URL into Facebook and a group chat and confirm the share card
* Confirm no placeholder text survives anywhere on the demo path
* Decide the demo order — the live publish landing in the pulse is the centrepiece, not the finale
