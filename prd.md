# Product Requirements Document

**Project:** Rizal Center of Chicago Website
**Version:** 0.2
**Status:** Discovery / Planning
**Last Updated:** August 2026

---

## 1. Overview

The Rizal Center of Chicago website will serve as the organization's central digital hub for community information, activities, events, stories, announcements, and resources.

Rather than functioning primarily as a static informational website, the platform should make it easy for visitors to discover what is happening at the Rizal Center and explore the broader community.

The site should also make routine content management accessible to non-technical volunteers.

---

## 2. Problem

The current website does not effectively communicate the breadth of activity happening within the Rizal Center.

Important information such as events, stories, announcements, resources, and community programs can be difficult to discover and may be distributed across different sections or platforms.

The organization also depends on volunteers to keep its website current. Routine updates should therefore not require code changes, deployments, or developer assistance.

The new website should provide a single, maintainable destination for this information.

---

## 3. Vision

Create a community-first website where people can easily discover:

* What is happening at the Rizal Center
* Events they can attend
* Stories and updates from the community
* Resources provided by the organization
* Areas of activity that interest them

The website should feel active and current while remaining simple enough for volunteers to maintain.

---

## 4. Goals

### Primary Goals

* Create a central digital hub for the Rizal Center
* Improve discovery through search engines
* Make upcoming events easy to find
* Make community content easy to explore
* Enable non-technical volunteers to manage content
* Create a maintainable content structure
* Minimize ongoing technical and financial overhead
* Provide a foundation for future community features

---

## 5. Target Audience

### General Public

Including:

* Community members
* Families
* Prospective members
* Volunteers
* Event attendees
* People interested in Filipino culture and programming

The site should not assume that visitors already understand the structure of the Rizal Center.

---

## 6. Core User Experiences

### 6.1 Homepage Discovery

A returning visitor should be able to visit the homepage and quickly understand what is happening at the Rizal Center.

The homepage should surface:

* Upcoming events
* Current announcements
* Featured stories
* Resources
* Other important calls to action

The homepage is an aggregation of existing content rather than a collection of manually maintained copies.

---

### 6.2 Search Discovery

A new visitor may discover the Rizal Center through Google.

Search-friendly individual pages should allow visitors to arrive directly at:

* Events
* Stories
* Resources
* Announcements
* Topics

After arriving, visitors should have opportunities to continue exploring related Rizal Center content.

---

### 6.3 Topic Discovery

Visitors should be able to explore the Rizal Center through areas of interest.

Examples include:

* Arts, Culture & Theater
* Dancing
* Martial Arts
* Pamana Children's Library

A Topic page should act as a hub for related content, including:

* Upcoming events
* Stories
* Announcements
* Resources

Topics provide an alternative discovery path to browsing individual content types.

---

### 6.4 Content Discovery

Individual content pages should not be dead ends.

Where appropriate, visitors should be able to:

* View the Topic associated with the content
* Discover related content
* Return to broader content collections
* Continue exploring the Rizal Center

---

## 7. Content Types

The initial website will support the following core content types:

### Events

Time-based activities that visitors may attend.

### Posts

Community stories, news, updates, and other editorial content.

### Announcements

Time-sensitive information that the organization wants to communicate.

### Resources

Useful documents, links, and information provided by the Rizal Center.

### Newsletters

Archived newsletters published by the organization.

### Topics

Persistent areas of interest that connect related content.

### Authors

People associated with published posts.

---

## 8. Topics

Topics represent meaningful areas of activity or interest within the Rizal Center.

Topics are intended to replace separate program pages when those pages primarily serve as hubs for information about an area of activity.

A Topic should not exist simply because a single piece of content happens to mention a subject.

Topics should represent meaningful, persistent areas that visitors may want to explore.

Content may be associated with one or more Topics when doing so improves discovery.

Topics should be curated rather than treated as arbitrary user-generated tags.

---

## 9. Information Architecture

```text
Home
│
├── Events
│   └── Event Detail
│
├── News & Stories
│   └── Post Detail
│
├── Announcements
│
├── Resources
│
├── Newsletter
│   └── Monthly Issue
│
├── Topics
│   └── Topic
│       ├── Upcoming Events
│       ├── Related Stories
│       ├── Announcements
│       └── Resources
│
└── About
```

The exact navigation may change as the site develops, but the distinction between **content types** and **Topics** should remain.

---

## 10. Editorial Experience

Routine website management should be possible through Sanity without developer assistance.

A volunteer should be able to:

1. Create content
2. Enter the relevant information
3. Associate the content with an existing Topic when appropriate
4. Preview the content
5. Publish it

Topic management should remain separate from routine content creation.

Most volunteers should select from existing Topics rather than create new ones.

Trusted administrators may create or modify Topics as the organization's structure evolves.

---

## 11. Non-Functional Requirements

### SEO

The site should support:

* Search-engine-friendly URLs
* Metadata
* Open Graph information
* Indexable content pages
* Search-friendly Topic pages
* Internal linking between related content

### Performance

The site should prioritize:

* Fast page loads
* Optimized images
* Efficient caching
* Minimal client-side JavaScript

### Accessibility

The site should target WCAG AA compliance.

### Maintainability

Routine content changes should not require source-code changes or application deployments.

---

## 12. Success Criteria

### Community

* Visitors can quickly discover upcoming activities
* Visitors can explore multiple areas of the organization
* Visitors return to discover new content

### Content Management

* Volunteers can publish routine content independently
* Content updates do not require code changes
* Topics can be managed without developer involvement

### Discovery

* Content can be discovered through search engines
* Individual pages encourage continued exploration
* Topic pages provide useful collections of related content

### Technical

* Fast and responsive experience
* Accessible interface
* Strong SEO fundamentals
* Maintainable architecture
* Low ongoing operating cost

---

## 13. V1 Scope

### Included

* Homepage
* Events
* Posts
* Announcements
* Resources
* Newsletter archive
* Topics
* Sanity CMS
* SEO fundamentals
* Responsive design
* Accessibility fundamentals

### Future

Potential future functionality includes:

* Event calendar
* Event filtering
* RSVP management
* Volunteer signup
* Newsletter signup
* Site search
* Donations
* Member portal
* Advanced related-content features

---

## 14. Product Principles

### Community First

The site should communicate what is happening within the organization.

### Content Driven

Website content should primarily be managed through the CMS.

### Low Maintenance

The system should minimize technical knowledge required for routine management.

### Discoverable

Visitors should be able to find the organization through search and explore naturally after arriving.

### Scalable

The content model should accommodate future growth without requiring a redesign of the entire site.

### Cost Conscious

The platform should remain affordable to operate and maintain.
