# Product Requirements Document (PRD)

**Project:** Rizal Center of Chicago Website  
**Version:** 0.1 (Draft)  
**Status:** Discovery / Planning  
**Last Updated:** July 2026

---

# Executive Summary

The Rizal Center of Chicago website will be redesigned as a modern, content-driven web application that serves as the digital hub for the organization's community.

The primary objective is to create an engaging, easily maintainable platform that enables volunteers and administrators to publish and manage site content without requiring software development experience.

The application will use **Sanity** as a headless CMS and **Next.js** as the frontend framework. The backend architecture and deployment strategy are intentionally left open during this planning phase to allow flexibility as technical requirements become better understood.

Rather than functioning as a static informational website, the new platform should become the central destination for discovering community news, events, resources, and announcements. Blogs and site content are easily indexable by Google search and should lead to expanded discovery of Rizal center resources from new target audiences.

---

# Problem Statement

The current website is outdated and struggles to highlight the active parts of the community (events, blogs, updates, etc). Current site runs on wordpress which could be managable once upgraded, but still opens the door to security flaws and limited SEO. 

The Rizal Center will need active help from non-technical volunteers to keep sitewide content up to date, but systems will not fall apart in stale states. Updating information should not require modifying source code or deploying the application and should be easily accessible and understood for non-technical audiences.

Non-standard tools and content may require more technical understanding of the codebase and modern web technologies, but should be accessible by individuals with software engineerng experience in modern Web Development standards.

Additionally, the website should:

- Encourage community engagement
- Improve discoverability through search engines
- Make it easy to modify site content
- Scale as the organization grows
- Minimize ongoing maintenance costs
- Improve site aesthetic and cleanliness

---

# Vision

Create a community-first digital experience that enables visitors to easily discover everything happening within the Rizal Center while empowering volunteers to manage all content through an intuitive content management system. The goal is to merge disparate content and information platforms into a single site for accessing Rizal Center resources.

The website should feel alive, frequently updated, and capable of growing alongside the community. This site should provide the foundational structure and layout for the future growth of community tools and resources. 

---

# Goals

## Primary Goals

- Build a community hub for members and visitors
- Enable non-technical volunteers to publish content
- Improve SEO through modern web technologies
- Create a scalable content architecture
- Improve long-term maintainability
- Reduce technical overhead for future volunteers

---

# Success Metrics

The project will be considered successful if it achieves the following:

### Community Engagement

- Visitors regularly return for new content
- Increased visibility of upcoming events
- Increased interaction with community resources

### Content Management

- Administrators can publish content without developer assistance
- New pages and content can be created entirely through Sanity
- Content updates require no code changes

### Technical

- Excellent search engine optimization
- Fast page load performance
- Mobile-friendly experience
- Accessible user interface
- Secure modern architecture

---

# Target Audience

## Primary Audience

General public

Including:

- Community members
- Families
- Prospective members
- Volunteers
- Event attendees
- Individuals interested in Filipino culture and programming (V2)

---

# Product Principles

The project should follow several guiding principles.

## Community First

The homepage should immediately communicate what is happening within the organization.

Content should encourage exploration rather than functioning as a static brochure.

---

## Content Driven

Nearly everything visible on the website should originate from Sanity.

Developers should rarely need to modify code simply to update website content.

---

## Low Maintenance

Future volunteers should be able to maintain the website without requiring software engineering knowledge.

---

## Performance First

Pages should load quickly while maintaining excellent accessibility and SEO.

---

## Scalable

The content model should support adding entirely new content types in the future with minimal architectural changes.

---

## Cost Conscious

The technology stack should minimize recurring costs while remaining secure and maintainable.

---

# User Stories

## Visitor

As a visitor, I want to quickly understand what is happening in the community.

As a visitor, I want to browse upcoming events.

As a visitor, I want to read community blog posts.

As a visitor, I want to discover resources offered by the organization.

As a visitor, I want to browse previous newsletters.

---

## Administrator

As an administrator, I want to publish announcements.

As an administrator, I want to create events.

As an administrator, I want to upload images.

As an administrator, I want to manage blog posts.

As an administrator, I want to feature important content on the homepage.

---

# Functional Requirements

## Homepage

The homepage acts as an aggregation layer rather than containing unique content.

It should display:

- Featured blog posts
- Upcoming events
- Active announcements
- Community resources
- Latest newsletter
- Calls to action

Each section should contain a preview with links to dedicated pages.

---

## Blog

The website should support:

- Blog listing page
- Individual blog pages
- Featured images
- Rich text content
- Author information
- Publish dates

---

## Events

Support:

- Upcoming events
- Individual event pages
- Event descriptions
- Images
- Date and time
- Location
- RSVP integration (future)

Future versions may include:

- Calendar view
- Event filtering

---

## Announcements

Administrators should be able to publish time-sensitive announcements.

Announcements may appear:

- Homepage banner
- Announcement archive

---

## Resources

Support community resources including:

- External links
- Downloadable documents
- Categorized resources

---

## Newsletter Archive

Monthly newsletters should be stored as searchable archived content.

---

# Information Architecture

```
Home
│
├── Blog
│   └── Blog Article
│
├── Events
│   └── Event Detail
│
├── Announcements
│
├── Resources
│
├── Newsletter
│   └── Monthly Issue
│
└── About
```

---

# Content Model

Initial content types include:

## Post

- Title
- Slug
- Author
- Featured Image
- Body
- Publish Date
- Featured Flag

---

## Event

- Title
- Slug
- Description
- Start Date
- End Date
- Location
- Featured Image
- RSVP Link (future)

---

## Announcement

- Title
- Body
- Active
- Start Date
- End Date

---

## Resource

- Title
- Description
- Category
- External Link
- Uploaded File

---

## Newsletter

- Title
- Month
- Body
- Cover Image

---

## Author

- Name
- Biography
- Photo

---

# Editorial Workflow

Content editors should perform all routine website management through Sanity.

Typical workflow:

1. Create content
2. Preview content
3. Publish
4. Automatically update website

No developer involvement should be required for routine publishing.

---

# Technical Architecture

## Frontend

- Next.js

## Content Management

- Sanity CMS

## Query Layer

- GROQ

## Backend

For V1, there will be no needed backend to support the current functionality. All funcitonality will be groq queries to sanity for posts, comments, announcements, and site content.

## Hosting

Currently planning to integrate with cloudflare workers for a minimial cost, quick loading solution for hosting. If the website needs to be scaled to more users, cloudflare's paid plan ($5 monthly subscription) is a reasonable enough price.

---

# Non-Functional Requirements

## SEO

- Server-side rendering where appropriate
- Metadata management
- Open Graph support
- Structured URLs

---

## Performance

- Fast page loads
- Optimized images
- Efficient caching
- Minimal client-side JavaScript

---

## Accessibility

Target WCAG AA compliance.

---

## Security

- Secure administrative access
- Modern authentication
- Managed content permissions

---

# Future Roadmap

The following features are intentionally out of scope for Version 1 but should influence future architecture.

Potential enhancements include:

- Event calendar
- Volunteer signup
- Newsletter signup
- Search
- Related content
- Content tagging
- RSS feed
- Social sharing improvements
- Donations
- Member portal

---

# Open Questions

The following architectural decisions remain open.

- Backend architecture
- Hosting provider
- Authentication strategy
- Event RSVP integration
- Newsletter platform
- Volunteer management workflow
- Search implementation

---

# Development Phases

## Phase 1

- Project setup
- Next.js application
- Sanity integration

---

## Phase 2

- Define content schemas
- Editorial workflows

---

## Phase 3

- Build core pages
- Blog
- Events
- Resources
- Newsletter

---

## Phase 4

- Homepage aggregation
- Featured content
- Navigation

---

## Phase 5

- Styling
- Accessibility
- Performance optimization

---

## Phase 6

- Deployment
- Documentation
- Production launch

---

# Assumptions

This document represents the current understanding of the project during the discovery phase.

Implementation details may change as technical decisions are finalized, but the product vision and user experience should remain the guiding principles throughout development.