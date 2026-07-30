# Technology Decisions

**Project:** Rizal Center of Chicago Website  
**Status:** Living Document  
**Purpose:** Record the architectural decisions behind the project's technology stack and document the reasoning behind those decisions. This document should help future contributors understand **why** each technology was selected and how the architecture is expected to evolve over time.

---

# Philosophy

One of the primary goals of this project is to build a modern, maintainable website that can realistically be supported by volunteers for many years.

Whenever possible, we prefer technologies that:

- Reduce long-term maintenance
- Minimize recurring costs
- Scale naturally as the organization grows
- Are widely adopted with strong documentation and community support
- Solve a concrete problem rather than introducing unnecessary complexity

A guiding architectural principle throughout this project is:

> **Every new piece of infrastructure should solve a concrete product problem that the current architecture cannot reasonably solve.**

This philosophy intentionally avoids over-engineering Version 1 while ensuring the architecture can evolve naturally as new requirements emerge.

---

# High-Level Architecture

Version 1 intentionally consists of only three major components.

```
                    Visitors
                        │
                        ▼
              Cloudflare Hosting
                        │
                        ▼
                  Next.js Frontend
                        │
                 Server Components
                 Static Generation
                 Route Handlers
                        │
                        ▼
               Sanity Content API
                        │
                        ▼
               Sanity Content Lake
```

This architecture intentionally avoids introducing an application backend or relational database until they provide clear value.

---

# Guiding Architecture Principles

## Structured Content First

The website is fundamentally a content platform.

Pages are simply one presentation of structured content stored within Sanity.

This approach allows future platforms—such as mobile applications, digital displays, newsletters, or APIs—to consume the same content without duplication.

---

## Separate Editorial Content from Operational Data

The architecture intentionally distinguishes between two categories of information.

### Editorial Content

Managed through Sanity.

Examples include:

- Blog posts
- Events
- Announcements
- Resources
- Authors
- Newsletters
- Images

These documents are created and maintained by editors.

---

### Operational Data

Generated automatically through user interaction.

Examples include:

- RSVP submissions
- Volunteer applications
- Newsletter subscribers
- Contact form submissions
- Donations
- Analytics

This information should eventually live in an operational database rather than the CMS.

Maintaining this separation keeps Sanity focused on content while allowing application features to evolve independently.

---

# Frontend

## Selected Technology

**Next.js**

---

## Why Next.js?

The project uses Next.js because it provides an excellent balance between modern web performance, developer experience, and ecosystem maturity.

Benefits include:

- Excellent SEO
- Server-side rendering
- Static Site Generation
- Incremental Static Regeneration
- React Server Components
- Built-in routing
- Large ecosystem
- Long-term industry support

The project owner is also already experienced with React and Next.js, reducing onboarding time and improving long-term maintainability.

---

## Why Not Astro?

Astro was seriously considered during the planning phase.

Astro excels at highly static content websites with extremely small JavaScript bundles.

However, the long-term vision for this project extends beyond a traditional marketing website.

Expected future features include:

- Event calendars
- Search
- Interactive community tools
- Administrative dashboards
- RSVP systems
- Volunteer management

As more interactive functionality is introduced, Astro would likely require increasing amounts of React through Islands Architecture.

Eventually much of the application would still be written in React.

Given the team's existing experience with Next.js and Sanity's extensive documentation surrounding Next.js, the additional complexity was not justified.

---

## Other Frameworks Considered

### Remix

Technically strong with an elegant data loading model.

Ultimately rejected due to:

- Smaller community
- Fewer Sanity examples
- Smaller ecosystem

---

### SvelteKit

Excellent performance and developer experience.

Rejected because:

- Smaller ecosystem
- Less community support
- Less familiarity within the project

---

### Nuxt

Excellent Vue framework.

Not considered further because the project is standardized around React.

---

# Content Management

## Selected Technology

**Sanity CMS**

---

## Why Sanity?

The project is fundamentally content-driven.

Rather than managing HTML pages directly, the website stores structured documents that can be presented in multiple ways.

Sanity provides:

- Structured content
- Rich content modeling
- Portable Text
- Powerful relationships
- Image management
- GROQ querying
- Flexible schemas
- Excellent editor experience

This makes it possible for non-technical volunteers to manage nearly every aspect of the website without developer involvement.

---

## Why Not WordPress?

The existing website is built using WordPress.

While WordPress remains a capable CMS, it introduces several limitations for the long-term vision of this project.

These include:

- Plugin maintenance
- Security updates
- Tight coupling between content and presentation
- More limited content modeling
- Less flexibility for future applications

Migrating to a headless CMS provides greater flexibility while improving long-term maintainability.

---

# Query Layer

## Selected Technology

**GROQ**

Sanity's query language allows the frontend to retrieve exactly the data required for each page.

Benefits include:

- Flexible projections
- Nested references
- Efficient homepage aggregation queries
- Reduced over-fetching

For example, the homepage can retrieve:

- Featured blog posts
- Upcoming events
- Active announcements
- Resources

through a single query instead of multiple network requests.

---

# Backend

## Version 1 Decision

**No traditional backend**

This decision is intentional.

---

## Why No Backend?

Version 1 is almost entirely read-oriented.

The application displays content that already exists within Sanity.

Examples include:

- Blog posts
- Events
- Resources
- Announcements
- Newsletters

Since no business logic or complex user interactions exist yet, introducing an Express server or dedicated API would add unnecessary maintenance without providing meaningful value.

Instead, Next.js communicates directly with the Sanity Content API.

```
Next.js

↓

Sanity API

↓

Sanity Content Lake
```

This dramatically simplifies deployment and reduces the number of technologies volunteers must understand.

---

## When Will a Backend Be Introduced?

A backend should only be introduced once the website begins managing operational data.

Examples include:

- Authentication
- RSVP submissions
- Volunteer management
- Member accounts
- Donations
- Administrative dashboards

These features involve user-generated data rather than editorial content.

---

# Database Strategy

## Version 1

No operational database.

Sanity functions as the project's content database.

---

## Why Not PostgreSQL?

PostgreSQL excels at managing relational application data.

Examples include:

- Users
- Payments
- Permissions
- Transactions
- Registrations

Version 1 contains none of these requirements.

Introducing PostgreSQL now would increase complexity without solving an existing problem.

---

## Why Not Supabase?

Supabase is an outstanding Backend-as-a-Service.

However, many projects introduce it simply because "every application has a database."

This project intentionally avoids that mindset.

Until operational data exists, Supabase would duplicate functionality already provided by Sanity.

---

## Future Database

When operational data becomes necessary, the preferred solution is currently **Cloudflare D1**.

Reasons include:

- Managed infrastructure
- Extremely low cost
- Tight Cloudflare integration
- Serverless architecture
- Suitable scale for nonprofit usage

Expected future tables include:

- RSVP records
- Volunteer applications
- Newsletter subscribers
- Contact submissions

Editorial content will remain inside Sanity.

---

# Hosting

## Selected Platform

**Cloudflare**

---

## Why Cloudflare?

Cloudflare aligns closely with the project's goals.

### Cost

The generous free tier is sufficient for Version 1.

If traffic grows significantly, the paid plans remain inexpensive compared to traditional cloud infrastructure.

---

### Global Performance

Cloudflare automatically serves cached content from edge locations worldwide.

Visitors receive responses from nearby data centers rather than a single centralized server.

---

### Simplicity

Cloudflare removes much of the operational burden associated with traditional servers.

There is no infrastructure to maintain.

No operating systems to patch.

No load balancers to configure.

---

### Future Services

Remaining within the Cloudflare ecosystem provides natural expansion opportunities.

Potential future services include:

- D1
- Email Routing
- Analytics
- Workers
- Durable Objects
- R2 object storage

These can be introduced individually as new requirements arise.

---

# Analytics

Version 1 will primarily leverage Cloudflare's built-in analytics.

Cloudflare provides:

- Traffic statistics
- Geographic distribution
- Browser information
- Cache performance
- Security events
- Performance metrics

This avoids introducing additional analytics providers during the early stages of the project.

Future versions may aggregate Cloudflare analytics into an administrative dashboard.

---

# Expected Architectural Evolution

## Version 1

Primary objective:

Content publishing.

```
Visitors

↓

Cloudflare

↓

Next.js

↓

Sanity
```

Capabilities:

- Blogs
- Events
- Announcements
- Resources
- Newsletter archive

---

## Version 2

Primary objective:

Improve engagement.

Potential additions:

- Search
- Event calendar
- Email routing
- Enhanced analytics
- Better editorial tools

Still no operational database if unnecessary.

---

## Version 3

Primary objective:

Community interaction.

```
Visitors

↓

Next.js

↓

Route Handlers

↓

Cloudflare D1

↓

Operational Data
```

Potential additions:

- RSVP system
- Volunteer applications
- Newsletter subscribers
- Contact forms

Sanity remains the source of truth for editorial content.

D1 becomes the source of truth for operational data.

---

## Version 4

Primary objective:

Administrative platform.

Potential additions:

- Internal dashboards
- Authentication
- Member accounts
- Donations
- Operational reporting
- Cross-service analytics

By this stage the website has evolved into a community platform while preserving the architectural decisions established during Version 1.

---

# Summary

This architecture intentionally favors simplicity over complexity.

Rather than introducing infrastructure preemptively, each technology is added only when it provides measurable value.

The long-term vision is not simply to build a website, but to establish a scalable content platform capable of supporting future community initiatives without requiring significant architectural redesign.