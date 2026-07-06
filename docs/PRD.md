# Product Requirements Document (PRD)
## Generic SaaS Content Management System (CMS)
---
## 1. Project Overview

The Generic SaaS Content Management System (CMS) is a centralized, multi-purpose platform that enables businesses of any type — corporate websites, restaurants, schools, agencies, startups, healthcare providers, NGOs, and e-commerce content operations — to manage their website content through a single, unified admin dashboard.

Unlike traditional CMS platforms that are built around a fixed set of content modules, this system is powered by a **generic CRUD engine**. New content types (Blogs, Services, Pages, FAQs, Team Members, Testimonials, Events, Careers, News, Galleries, etc.) can be configured and managed without writing separate backend APIs for each one. This makes the platform faster to extend, easier to maintain, and suitable for resale or reuse across many client websites — the core requirement for a SaaS product.

---

## 2. Problem Statement

Most businesses that need a content-managed website face one of two problems:

1. **Custom-built CMS per project** — Every new client or business type requires a developer to build new content modules, new CRUD endpoints, and new admin screens. This is slow, expensive, and repetitive.
2. **Rigid off-the-shelf CMS** — Existing generic CMS platforms are either too complex (enterprise-grade, over-engineered) or too rigid (built for one specific use case, like blogging only).

There is a need for a CMS that is:
- Generic enough to serve many industries without modification.
- Structured enough to avoid becoming an unmanageable "build anything" tool.
- Simple enough for non-technical business users to operate independently.

---

## 3. Objectives

- Provide a single reusable CMS platform that can serve multiple business types without custom backend development per client.
- Eliminate repetitive CRUD development by using a generic content-type engine.
- Provide secure, role-based access so multiple people can safely collaborate on content.
- Offer a clean, intuitive admin dashboard suitable for non-technical users.
- Build a foundation that can scale from a single business site to a multi-tenant SaaS offering.
- Ensure the platform is maintainable and extensible for long-term product growth.

---

## 4. Target Users

| Role | Description | Key Responsibilities |
|---|---|---|
| **Super Admin** | Owns the platform instance (or, in a multi-tenant future, an organization/tenant). Has unrestricted access. | Manage all users and roles, configure site settings, oversee all content types, access activity logs, manage platform-level configuration. |
| **Admin** | Business owner or senior staff managing the day-to-day operation of the website. | Manage users (except Super Admin), manage all content types, approve/publish content, configure categories/tags, manage media library. |
| **Editor** | Trusted content manager, typically responsible for quality control. | Create, edit, review, and publish content across content types; manage drafts submitted by Authors; organize categories and tags. |
| **Author** | Content creator, typically a writer or department representative. | Create and edit their own content (e.g., blog posts, news, events); submit content as drafts for review; cannot publish directly unless permitted. |
| **Viewer** | Stakeholder who needs visibility without editing rights. | View content, dashboard statistics, and activity logs in read-only mode. |

Permissions per role are configurable within the Roles & Permissions module rather than being hard-coded, allowing businesses to adapt roles to their internal workflows.

---

## 5. Scope

### In Scope
- Centralized admin dashboard for managing website content.
- Generic content-type and CRUD engine supporting configurable content models.
- User management, authentication, and role-based access control.
- Media library for images and files.
- Content organization via categories, tags, and slugs.
- Basic SEO metadata management per content item.
- Search, filtering, sorting, and pagination across content listings.
- Activity logging for accountability and audit purposes.
- Basic website/site-wide settings (site name, logo, contact details, etc.).
- Dashboard with content and user statistics.

### Out of Scope (for this version)
- Public-facing website/storefront rendering (the CMS manages content; delivery to the public site is via API and is a separate concern).
- Full e-commerce functionality (inventory, orders, payments) — only content aspects of e-commerce (product descriptions, banners, pages) are covered.
- Multi-tenancy, billing, and subscription management (see Future Enhancements).
- Advanced workflow automation, content versioning, and scheduled publishing (see Future Enhancements).

---

## 6. Core Features

### 6.1 Authentication
- Secure login using email/username and password.
- JWT-based session/token authentication for stateless, scalable access control.
- Change password functionality for all authenticated users.

### 6.2 User Management
- Create, update, and delete user accounts.
- Activate or deactivate user accounts without deleting historical data.
- Assign roles to users at creation or later.

### 6.3 Roles & Permissions
- Predefined roles (Super Admin, Admin, Editor, Author, Viewer).
- Granular permission management so access can be fine-tuned per role (e.g., who can publish, who can delete, who can manage users).

### 6.4 Content Management
- **Generic Content Types:** Ability to define and manage different types of content (Blogs, Services, Pages, FAQs, Team Members, Testimonials, Events, Careers, News, Galleries) through one reusable system rather than separate modules.
- **Generic CRUD:** Create, read, update, and delete operations apply uniformly across all content types.
- **Dynamic Fields:** Content types can have configurable fields (text, rich text, image, date, boolean, relation, etc.) to suit different content needs.
- **Draft & Publish:** Content can be saved as a draft and published when ready, supporting review workflows.
- **Categories & Tags:** Content can be grouped and cross-referenced for organization and discoverability.
- **Slugs:** Human-readable, URL-friendly identifiers for each content item.
- **SEO Metadata:** Meta title, meta description, and similar fields manageable per content item.

### 6.5 Media Library
- Upload and store images and files centrally.
- Browse, search, and reuse previously uploaded media across content items.
- Basic file management (rename, delete, organize).

### 6.6 Dashboard
- Overview of content statistics (counts by type, drafts vs. published).
- Overview of user statistics (active/inactive users, roles distribution).
- Recent activity feed summarizing latest actions across the system.

### 6.7 Search & Listing
- Keyword search across content items.
- Filtering by content type, status, category, tag, or author.
- Sorting by relevant fields (date created, date updated, title, status).
- Pagination for all list views to maintain performance with large datasets.

### 6.8 Activity Logs
- Record key actions such as content creation, updates, deletion, publishing, and user management events.
- Logs should be attributable to a specific user and timestamped.

### 6.9 Website Settings
- Manage site name, logo, and basic branding elements.
- Manage basic configuration such as contact information and default settings used across the platform.

---

## 7. Functional Requirements

The system shall:

1. Allow authorized users to log in and receive a secure, time-bound session token.
2. Allow users to change their own password after authentication.
3. Allow Super Admins and Admins to create, update, deactivate, and delete user accounts.
4. Allow assignment of one role per user, with permissions determined by that role.
5. Allow authorized roles to define new content types without requiring new backend development.
6. Allow authorized roles to create, view, update, and delete content items belonging to any configured content type.
7. Allow content items to be saved in a "draft" state and transitioned to a "published" state.
8. Allow content items to be organized using categories and tags, which can be created and managed independently.
9. Automatically generate or allow manual editing of slugs for each content item.
10. Allow entry of SEO metadata fields for each content item.
11. Allow users to upload files/images to a shared media library and reuse them across content items.
12. Allow users to search, filter, sort, and paginate through lists of content and users.
13. Automatically record an activity log entry whenever a significant action (create, update, delete, publish, user change) occurs.
14. Allow authorized roles to view and manage basic website settings (site name, logo, contact info).
15. Display a dashboard summarizing content counts, user counts, and recent activity to authorized roles.
16. Restrict access to features and data based on the permissions associated with the logged-in user's role.
17. Prevent deactivated users from logging in while preserving their historical activity and content records.

---

## 8. Non-Functional Requirements

| Category | Requirement |
|---|---|
| **Security** | All access must be authenticated via JWT; passwords must be securely hashed; role-based permissions must be enforced on every action; sensitive actions must be logged. |
| **Scalability** | The generic content engine must support an increasing number of content types and content volume without requiring architectural changes or new endpoints per type. |
| **Performance** | List views (content, users, logs) must remain responsive through server-side pagination, filtering, and indexing, even as data volume grows. |
| **Maintainability** | The generic CRUD approach must minimize duplicated backend logic, making the system easier to extend and maintain over time. |
| **Reliability** | The system must handle errors gracefully, provide meaningful feedback to users, and ensure data integrity during create/update/delete operations. |
| **Usability** | The admin dashboard must be intuitive enough for non-technical users to manage content without developer assistance. |
| **Responsiveness** | The admin dashboard must be usable across desktop and tablet screen sizes at minimum, with layouts adapting appropriately. |

---

## 9. Technology Stack

**Frontend**
- Next.js
- TypeScript
- Tailwind CSS

**Backend**
- Bun (runtime)
- Elysia (framework)
- TypeScript

**Database**
- PostgreSQL
- Drizzle ORM

**Authentication**
- JWT (JSON Web Tokens)

---

## 10. Assumptions & Constraints

**Assumptions**
- Each deployment initially serves a single business (multi-tenancy is a future enhancement, not a current requirement).
- Businesses using the CMS will have at least one Admin-level user responsible for initial setup and configuration.
- The CMS is a content management backend/admin tool; the public-facing website is a separate consumer of the CMS's content via API.
- Content types and their fields will be configured by technical staff or a knowledgeable Admin, not necessarily by end-content-editors.

**Constraints**
- The system must be built using the specified technology stack (Next.js, TypeScript, Tailwind CSS, Bun, Elysia, PostgreSQL, Drizzle ORM, JWT).
- The generic CRUD engine must be designed so that adding a new content type does not require new backend endpoints or significant code changes.
- The initial version does not include billing, subscription, or multi-tenant account isolation.

---

## 11. Success Criteria

The CMS will be considered successful if it achieves the following measurable outcomes:

- A new content type (e.g., "Testimonials") can be added and made manageable through the admin dashboard without writing a new CRUD API.
- Role-based access control correctly restricts or allows actions based on the five defined roles in 100% of tested scenarios.
- Content creators can move a content item from draft to published state without developer involvement.
- Admin users can complete common tasks (create user, add content, upload media, adjust settings) without external documentation or support.
- List views with filtering, sorting, and pagination return results in acceptable time even as content volume grows.
- All significant user actions are traceable through the activity log.
- The platform can be reasonably adapted to a new business type (e.g., from a restaurant to a school website) by reconfiguring content types and settings, without new backend development.

---

## 12. Future Enhancements

The following features are recognized as valuable but are out of scope for the initial release:

- **Multi-Tenancy:** Supporting multiple isolated businesses/organizations within a single platform instance.
- **API Keys:** Allowing external systems or front-end sites to securely consume CMS content via scoped API keys.
- **Webhooks:** Notifying external systems automatically when content changes (e.g., on publish).
- **Content Versioning:** Maintaining historical versions of content items and enabling rollback.
- **Email Notifications:** Alerting users about key events (content submitted for review, user account changes, etc.).
- **Scheduled Publishing:** Allowing content to be set to automatically publish at a future date and time.
- **Third-Party Integrations:** Connecting with external tools such as analytics platforms, marketing tools, or e-commerce systems.

---

