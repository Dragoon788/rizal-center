# Sanity Studio Development Guide

**Project:** Rizal Center of Chicago Website  
**Status:** Living Document

---

# Purpose

This document explains how Sanity Studio fits into the development workflow, how developers interact with it during local development, and the content schemas that will power Version 1 of the website.

Unlike the frontend application, Sanity Studio is **not part of the public website**. It is an internal application used by editors and developers to create and manage structured content.

---

# What is Sanity Studio?

Sanity Studio is a React application that provides an editing interface for the project's content.

Think of it as the administrative dashboard for the website.

```
Editors

↓

Sanity Studio

↓

Sanity Content Lake

↓

Next.js Website
```

Editors never modify the website directly.

Instead they edit structured documents within Studio, and the frontend automatically renders that content.

---

# Development Workflow

There are two applications in this repository.

## 1. Next.js

Responsible for:

- Public website
- UI
- Components
- Routing
- Data fetching
- Rendering content

Runs with:

```bash
npm run dev
```

Example:

```
localhost:3000
```

---

## 2. Sanity Studio

Responsible for:

- Content editing
- Schema definitions
- Image uploads
- Editorial workflows
- Content preview

Typically runs independently.

Example:

```bash
sanity dev
```

or

```bash
npm run studio
```

Example URL:

```
localhost:3333
```

---

During development both applications run simultaneously.

```
              Developer

        ┌────────┴─────────┐

        ▼                  ▼

 Next.js Website      Sanity Studio

        │                  │

        └────────┬─────────┘

                 ▼

          Sanity Dataset
```

---

# Local Development Workflow

A typical workflow looks like this.

### Step 1

Start the frontend.

```bash
npm run dev
```

---

### Step 2

Start Sanity Studio.

```bash
sanity dev
```

---

### Step 3

Create or modify content.

Examples:

- New blog post
- New event
- Announcement
- Newsletter

---

### Step 4

Publish content.

---

### Step 5

Refresh the website.

The frontend queries Sanity and displays the updated content.

No HTML editing.

No rebuilding pages manually.

---

# Logging Into Sanity

Before accessing Studio locally:

```bash
npx sanity login
```

The CLI opens a browser window.

Authenticate with your Sanity account.

Verify authentication:

```bash
npx sanity projects list
```

---

# Connecting to the Project

Every Sanity Studio belongs to a project.

Configuration typically includes:

- Project ID
- Dataset
- API Version

Stored within:

```
sanity.config.ts
```

and

```
.env.local
```

---

# The Role of Schemas

Schemas define the structure of the organization's content.

They answer questions like:

- What is a blog post?
- What fields does an event have?
- Can an event have an image?
- Can a blog reference an author?

Schemas define **content**, not pages.

This distinction is one of the primary architectural decisions of the project.

---

# Content Modeling Philosophy

We model **real-world concepts**, not website pages.

Good:

```
Event

Author

Resource

Newsletter
```

Avoid:

```
Homepage Card

Sidebar Widget

Footer Item
```

Those are presentation concerns handled by Next.js.

Sanity should describe the organization's information, not the UI.

---

# Version 1 Schema Overview

The initial content model focuses on editorial content only.

Operational data such as RSVP submissions or analytics will be handled outside of Sanity in future versions.

---

## Author

Represents someone who creates content.

Fields

- Name
- Biography
- Profile Image
- Social Links (future)

Referenced by:

- Blog Posts

---

## Blog Post

Primary long-form content.

Fields

- Title
- Slug
- Summary
- Body
- Featured Image
- Author
- Publish Date
- Featured Flag

Used by:

- Homepage
- Blog Listing
- Individual Article

---

## Event

Represents a community event.

Fields

- Title
- Slug
- Description
- Start Date
- End Date
- Location
- Cover Image

Future additions:

- Capacity
- RSVP Status
- External Registration Link

The event document intentionally stores event information only.

Attendee records will eventually live in an operational database.

---

## Announcement

Short-lived updates.

Examples:

- Registration now open
- Holiday closure
- Meeting reminder

Fields

- Title
- Body
- Active
- Start Date
- End Date

Displayed on:

- Homepage
- Announcement Archive

---

## Resource

Community resources.

Examples:

- PDFs
- External organizations
- Government resources
- Community services

Fields

- Title
- Description
- Category
- File
- External URL

---

## Newsletter

Monthly newsletters.

Fields

- Title
- Month
- Cover Image
- Body

Displayed as an archive.

---

# Future Schemas

These are intentionally postponed until they solve a concrete product problem.

Potential future schemas include:

- Category
- Tag
- Volunteer Position
- Board Member
- Donation Campaign
- Sponsor
- Gallery
- FAQ
- Organization Partner

These should only be introduced once there is a clear editorial need.

---

# Shared Objects

Not everything should be its own document.

Some structures should be reusable objects.

Examples include:

## SEO

Reusable metadata.

Fields

- Page Title
- Description
- Open Graph Image

---

## Call To Action

Reusable CTA component.

Fields

- Title
- Description
- Button Text
- Link

---

## Rich Image

Shared image configuration.

Fields

- Caption
- Alt Text
- Attribution

---

Using reusable objects keeps schemas consistent and reduces duplication.

---

# Document Relationships

Sanity excels at connecting documents together.

Example

```
Author

↓

Blog Post

↓

Homepage
```

One author can be referenced by many posts.

Changing the author's profile automatically updates every article.

---

Another example.

```
Event

↓

Homepage

↓

Events Page

↓

Calendar (Future)
```

A single event powers multiple experiences.

---

# Homepage Content Strategy

The homepage should contain very little unique content.

Instead it aggregates information from other documents.

```
Homepage

↓

Featured Posts

↓

Upcoming Events

↓

Announcements

↓

Resources

↓

Newsletter
```

This means editors never update the homepage directly.

They update the underlying content.

---

# Studio Structure

As the project grows, Studio should organize documents into logical sections.

Example navigation:

```
Content

├── Blog Posts
├── Events
├── Announcements
├── Resources
├── Newsletters
└── Authors
```

Future sections may include:

```
Organization

Settings

Media

Users
```

The goal is to make Studio intuitive for non-technical volunteers.

---

# Preview Workflow

Future versions should support draft previews.

Workflow:

```
Create Draft

↓

Preview Website

↓

Publish

↓

Public Website Updates
```

This allows editors to verify formatting before publishing.

---

# Schema Design Principles

Every schema should follow these guidelines.

## Model Content

Schemas should describe information, not user interfaces.

---

## Normalize Data

Avoid duplicate information.

Use references whenever possible.

---

## Reuse Objects

Shared field groups should become reusable objects.

---

## Keep Schemas Small

Prefer several focused documents over one large document.

---

## Design for Growth

Version 1 should support today's needs while leaving room for future expansion.

---

# Development Philosophy

Developers should think about Sanity in three stages.

## 1. Model the Content

Define the structure before building components.

---

## 2. Query the Content

Use GROQ to retrieve exactly the required data.

---

## 3. Render the Content

Allow Next.js to determine presentation.

Keeping these concerns separate makes the application easier to maintain and allows the same content to power multiple user experiences.

---

# Version 1 Goals

By the completion of Version 1, Sanity Studio should enable volunteers to:

- Create blog posts
- Publish events
- Manage announcements
- Upload images
- Maintain community resources
- Archive newsletters

without requiring developer assistance.

This fulfills the primary goal of the project: creating a modern, content-driven website where content management is accessible to non-technical volunteers while the frontend remains flexible enough to evolve over time.