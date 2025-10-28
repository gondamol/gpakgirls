## ADDED Requirements

### Requirement: Headless CMS Integration
The website SHALL integrate with a headless CMS (Sanity) to enable non-technical staff to manage website content.

#### Scenario: CMS authentication and access
- **GIVEN** a staff member needs to update content
- **WHEN** they navigate to the CMS URL
- **THEN** they can log in securely with their credentials and access the content management interface

#### Scenario: Content preview before publishing
- **GIVEN** a staff member edits content in the CMS
- **WHEN** they click "Preview"
- **THEN** a live preview of how the content will appear on the website is displayed

#### Scenario: Content publishing workflow
- **GIVEN** a staff member completes content changes
- **WHEN** they click "Publish"
- **THEN** the content is published to the live website within 2 minutes (after build process)

### Requirement: Page Content Management
Staff SHALL be able to create and edit page content using flexible content blocks.

#### Scenario: Page creation
- **GIVEN** a staff member wants to create a new page
- **WHEN** they select "New Page" in the CMS
- **THEN** they can enter a title, slug, and add content blocks (hero, text, images, etc.)

#### Scenario: Hero section editing
- **GIVEN** a staff member edits a page with a hero section
- **WHEN** they interact with the hero block in CMS
- **THEN** they can upload/select an image, edit headline text, subheadline text, and call-to-action button text and link

#### Scenario: Rich text editing
- **GIVEN** a staff member adds text content
- **WHEN** using the rich text editor
- **THEN** they can format text (bold, italic, headings), add links, insert images, and create lists

#### Scenario: Image upload and management
- **GIVEN** a staff member wants to add an image
- **WHEN** they click "Add Image" in a content block
- **THEN** they can upload a new image or select from the media library with cropping and alt text options

### Requirement: Blog Post Management
Staff SHALL be able to create, edit, schedule, and publish blog posts.

#### Scenario: New blog post creation
- **GIVEN** a staff member wants to publish a blog post
- **WHEN** they select "New Blog Post" in the CMS
- **THEN** they can enter title, author, content, featured image, excerpt, categories, and publication date

#### Scenario: Blog post scheduling
- **GIVEN** a staff member creates a blog post
- **WHEN** they set a future publication date
- **THEN** the post is automatically published on that date and time

#### Scenario: Blog post categories
- **GIVEN** a staff member creates a blog post
- **WHEN** selecting categories
- **THEN** they can choose from existing categories or create new ones (Success Stories, News, Events, Research)

#### Scenario: Blog post SEO fields
- **GIVEN** a staff member edits a blog post
- **WHEN** expanding the SEO section
- **THEN** they can customize the meta title, meta description, and social sharing image

### Requirement: Success Story Management
Staff SHALL be able to create and manage beneficiary success stories with appropriate privacy controls.

#### Scenario: Success story creation
- **GIVEN** a staff member documents a success story
- **WHEN** they create a new Story document in CMS
- **THEN** they can enter beneficiary name/pseudonym, age, location, story narrative, challenges faced, support received, current status, and select images

#### Scenario: Consent documentation
- **GIVEN** a staff member publishes a success story
- **WHEN** uploading beneficiary photos
- **THEN** they must check a "Consent obtained" checkbox and optionally upload consent form reference

#### Scenario: Privacy options
- **GIVEN** a staff member creates a story
- **WHEN** setting privacy preferences
- **THEN** they can choose to use pseudonym, blur face in photos, or hide location details

#### Scenario: Story impact metrics
- **GIVEN** a staff member creates a story
- **WHEN** filling out story details
- **THEN** they can add structured impact data (returned to school: yes/no, vocational skills acquired, income level change)

### Requirement: Program Information Management
Staff SHALL be able to update program descriptions, curriculum details, and eligibility criteria.

#### Scenario: Program editing
- **GIVEN** a staff member needs to update program information
- **WHEN** they open a Program document in CMS
- **THEN** they can edit program name, description, objectives, curriculum outline, duration, and eligibility criteria

#### Scenario: Program image gallery
- **GIVEN** a staff member manages a program
- **WHEN** editing program images
- **THEN** they can upload multiple images showing program activities with captions

#### Scenario: Program enrollment status
- **GIVEN** a program reaches capacity
- **WHEN** a staff member updates the program
- **THEN** they can toggle enrollment status to "Accepting Applications" or "Currently Full" which updates the website

### Requirement: Team Member Management
Staff SHALL be able to add, edit, and remove team member profiles.

#### Scenario: Team member profile creation
- **GIVEN** a new staff member joins the organization
- **WHEN** an admin creates a Team Member document
- **THEN** they can enter name, title, bio, photo, email, and social media links

#### Scenario: Team member ordering
- **GIVEN** multiple team members are listed
- **WHEN** an admin manages team members
- **THEN** they can drag and drop to reorder how team members appear on the About Us page

#### Scenario: Team member visibility control
- **GIVEN** a team member leaves the organization
- **WHEN** an admin updates their profile
- **THEN** they can unpublish the profile to remove it from the website without deleting the record

### Requirement: Fundraising Campaign Management
Staff SHALL be able to create and manage fundraising campaigns with goals and progress tracking.

#### Scenario: Campaign creation
- **GIVEN** a staff member launches a new fundraising campaign
- **WHEN** they create a Campaign document in CMS
- **THEN** they can enter campaign title, description, goal amount, currency, start/end dates, featured image, and slug

#### Scenario: Campaign activation
- **GIVEN** a campaign is created
- **WHEN** a staff member toggles "Active" status
- **THEN** the campaign appears on the website with its dedicated page and in featured campaign sections

#### Scenario: Manual donation recording
- **GIVEN** a donation is received offline (check, bank transfer)
- **WHEN** a staff member adds it to the campaign
- **THEN** they can manually increment the campaign's current amount and it reflects on the website

#### Scenario: Campaign updates posting
- **GIVEN** a campaign is active
- **WHEN** a staff member wants to post an update
- **THEN** they can add campaign updates (text, images, date) that display on the campaign page

### Requirement: Media Library Management
The CMS SHALL provide a centralized media library for organizing images, videos, and documents.

#### Scenario: Media upload
- **GIVEN** a staff member has new media to add
- **WHEN** they access the media library
- **THEN** they can upload multiple files at once with drag-and-drop functionality

#### Scenario: Media metadata
- **GIVEN** a staff member uploads an image
- **WHEN** the upload completes
- **THEN** they can add title, alt text, caption, and tags for searchability

#### Scenario: Media search and filter
- **GIVEN** a staff member needs to find a specific image
- **WHEN** they search the media library
- **THEN** they can search by filename, tags, or upload date and results are displayed

#### Scenario: Media usage tracking
- **GIVEN** a staff member selects a media item
- **WHEN** viewing its details
- **THEN** they can see where that media is currently used across the website

### Requirement: Site Settings Management
Staff SHALL be able to configure global site settings without code changes.

#### Scenario: Contact information update
- **GIVEN** office contact details change
- **WHEN** a staff member updates Site Settings
- **THEN** they can edit office address, phone numbers, email addresses, and office hours

#### Scenario: Social media links management
- **GIVEN** the organization's social media handles change
- **WHEN** a staff member edits Site Settings
- **THEN** they can update URLs for Facebook, Instagram, Twitter, LinkedIn, and YouTube

#### Scenario: Donation page settings
- **GIVEN** donation impact statements need updating
- **WHEN** a staff member accesses donation settings
- **THEN** they can edit preset donation amounts, impact descriptions, and transparency statements

#### Scenario: Alert banner management
- **GIVEN** an urgent announcement needs to be displayed
- **WHEN** a staff member enables the alert banner
- **THEN** they can set banner text, link, color theme, and expiration date

### Requirement: Multi-language Content Management
Staff SHALL be able to manage content in multiple languages (English and Swahili).

#### Scenario: Language variant creation
- **GIVEN** a page exists in English
- **WHEN** a staff member wants to add Swahili translation
- **THEN** they can create a Swahili variant and translate all content fields

#### Scenario: Translation status tracking
- **GIVEN** multiple pages need translation
- **WHEN** a staff member views the content list
- **THEN** translation status indicators show which pages are translated, partially translated, or untranslated

#### Scenario: Fallback language handling
- **GIVEN** content is not yet translated to Swahili
- **WHEN** a user views the Swahili site
- **THEN** English content is displayed as fallback with a note that translation is in progress

### Requirement: User Roles and Permissions
The CMS SHALL support multiple user roles with appropriate content permissions.

#### Scenario: Role-based access
- **GIVEN** users have different roles (Admin, Editor, Contributor)
- **WHEN** they log into the CMS
- **THEN** they see only the content sections and actions they have permission for

#### Scenario: Content approval workflow
- **GIVEN** a Contributor creates content
- **WHEN** they finish editing
- **THEN** they can submit for review and only an Editor or Admin can publish

#### Scenario: Admin user management
- **GIVEN** an Admin needs to manage users
- **WHEN** they access user management
- **THEN** they can invite new users, assign roles, and revoke access

### Requirement: Content Revision History
The CMS SHALL maintain version history of content changes for rollback and auditing.

#### Scenario: Revision history viewing
- **GIVEN** a document has been edited multiple times
- **WHEN** a staff member views revision history
- **THEN** they see a list of all changes with timestamps, author names, and change summaries

#### Scenario: Content rollback
- **GIVEN** a staff member needs to undo changes
- **WHEN** they select a previous revision
- **THEN** they can restore that version and optionally publish it

#### Scenario: Revision comparison
- **GIVEN** a staff member wants to see what changed
- **WHEN** they compare two revisions
- **THEN** a diff view highlights added, removed, and modified content

### Requirement: Content Import and Export
The CMS SHALL support bulk content operations for migration and backup.

#### Scenario: Content export
- **GIVEN** an admin needs to back up content
- **WHEN** they request a content export
- **THEN** all content is exported in a structured JSON format

#### Scenario: Content import from legacy source
- **GIVEN** existing content needs to be migrated
- **WHEN** an admin uploads a structured data file
- **THEN** content is imported, validated, and mapped to appropriate document types

### Requirement: Performance and Caching
The CMS SHALL integrate with the website's build system to ensure content changes are efficiently deployed.

#### Scenario: Incremental static regeneration
- **GIVEN** a staff member publishes content
- **WHEN** the publish action completes
- **THEN** only affected pages are rebuilt, not the entire site, reducing deploy time

#### Scenario: Webhook-triggered builds
- **GIVEN** content is published in the CMS
- **WHEN** the publish action occurs
- **THEN** a webhook triggers the hosting platform to rebuild and deploy affected pages

#### Scenario: Draft content preview without deployment
- **GIVEN** a staff member is editing draft content
- **WHEN** they use preview mode
- **THEN** they can see changes without triggering a production build

### Requirement: CMS Training and Documentation
The organization SHALL provide documentation and training materials for CMS users.

#### Scenario: In-CMS help documentation
- **GIVEN** a staff member is unsure how to use a feature
- **WHEN** they click the help icon
- **THEN** contextual documentation explaining that feature is displayed

#### Scenario: Video tutorial library
- **GIVEN** a new staff member is learning the CMS
- **WHEN** they access the training section
- **THEN** short video tutorials for common tasks (creating pages, publishing posts, uploading images) are available

#### Scenario: Content guidelines reference
- **GIVEN** a staff member is creating content
- **WHEN** they access the style guide
- **THEN** organizational writing guidelines, tone of voice, and formatting standards are available within the CMS

