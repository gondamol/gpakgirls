# Design Document: Girl Pride Africa Kenya Website

## Context

Girl Pride Africa Kenya is a registered NGO dedicated to ending teenage pregnancy and sexual abuse among teenage girls in Kenya. The organization provides comprehensive support including educational opportunities, vocational training (tailoring, hairdressing), emotional support, mentorship, and counseling to help teen mothers and pregnant teens gain financial independence and rebuild their lives.

The website must balance emotional impact with professionalism, tell compelling stories while maintaining dignity, and make it extremely easy for potential donors to contribute. The target audiences include: international donors, local Kenyan supporters, volunteers, beneficiaries seeking help, and partner organizations.

### Stakeholders
- **Primary**: NGO leadership and fundraising team
- **Secondary**: Content managers, program coordinators
- **End Users**: Donors, volunteers, beneficiaries, partners

### Constraints
- Limited budget (prefer free/low-cost solutions)
- Non-technical staff must manage content
- Must work well on mobile devices (Kenya has high mobile usage)
- Fast loading on slower connections
- Comply with international donation regulations

## Goals / Non-Goals

### Goals
- Create a professional, trustworthy online presence
- Drive donation conversions through compelling storytelling
- Enable easy content updates by non-technical staff
- Showcase program impact with real stories and images
- Support multiple payment methods relevant to international and local donors
- Optimize for search engines to increase organic traffic
- Build email list for ongoing donor engagement

### Non-Goals
- Direct beneficiary case management system (future consideration)
- Volunteer scheduling and management (future phase)
- E-commerce for selling beneficiary products (future phase)
- Mobile app (web-first approach)
- Real-time chat support (start with contact forms)

## Technical Decisions

### Architecture: Jamstack with Headless CMS

**Decision**: Next.js (React) frontend with headless CMS (Sanity CMS)

**Rationale**:
- **Next.js**: Server-side rendering improves SEO, static generation ensures fast loads, great developer experience, free hosting on Vercel
- **Sanity CMS**: Free tier sufficient, intuitive for non-technical users, real-time preview, structured content, excellent image handling
- **Jamstack**: Pre-rendered pages are fast, secure, and cheap to host

**Alternatives Considered**:
- **WordPress**: Pros - familiar, many NGO themes. Cons - requires hosting fees, slower, security concerns, overkill for needs
- **Webflow**: Pros - visual builder, no code. Cons - expensive for NGO, less flexible, vendor lock-in
- **Static HTML**: Pros - simple, fast. Cons - no CMS, hard for staff to update

### Styling: Tailwind CSS

**Decision**: Use Tailwind CSS utility-first framework

**Rationale**:
- Rapid development without writing custom CSS
- Built-in responsive design utilities
- Small bundle size with purging
- Consistent design system
- Excellent documentation

**Alternatives Considered**:
- **Bootstrap**: More opinionated, larger bundle, overused look
- **Custom CSS**: More control but slower development
- **Material UI**: Too corporate, not NGO-friendly aesthetic

### Payment Processing: Multi-Gateway Strategy

**Decision**: Integrate three payment providers
1. **Stripe**: International credit/debit cards, robust API, nonprofit pricing
2. **PayPal**: Familiar to international donors, easy integration
3. **M-Pesa**: Essential for Kenyan donors via Safaricom

**Rationale**:
- Different donors prefer different methods
- M-Pesa is dominant in Kenya
- International donors expect Stripe/PayPal
- Redundancy if one provider has issues

**Implementation**:
- Use Stripe Checkout for card payments (handles security/PCI)
- PayPal Smart Buttons SDK
- M-Pesa STK Push via Safaricom Daraja API
- Backend API (Next.js API routes) to handle webhooks and verify transactions

**Alternatives Considered**:
- **Stripe-only**: Simpler but excludes local Kenyan donors
- **Donation platforms (GoFundMe)**: Take higher fees, less control, not professional

### Database: Serverless PostgreSQL (Vercel Postgres)

**Decision**: Use Vercel Postgres for storing donation records, subscriber emails, form submissions

**Rationale**:
- Free tier available
- Serverless scales to zero (cost-effective)
- SQL for relational data integrity
- Direct integration with Next.js API routes
- Backup and security handled

**Alternatives Considered**:
- **Firebase**: NoSQL structure less suitable for transactions
- **Supabase**: Good option but adds complexity
- **No database**: Can't track donations or manage subscribers

### Image Management

**Decision**: Sanity CDN for CMS images, Vercel Image Optimization for static assets

**Rationale**:
- Automatic responsive images
- WebP conversion for performance
- Lazy loading out of the box
- Global CDN delivery

**Content Strategy**:
- All images of beneficiaries must have consent forms signed
- Show faces with permission or blur/crop for dignity
- Focus on hope and empowerment, not victimization
- Professional photography where possible, authentic stories always

### Email & Newsletter: Resend + Mailchimp Lite

**Decision**:
- **Resend**: Transactional emails (donation receipts, contact form responses)
- **Mailchimp Free Tier**: Newsletter marketing (up to 500 subscribers)

**Rationale**:
- Resend is developer-friendly, free tier sufficient
- Mailchimp familiar to marketing staff
- Separate concerns: transactional vs marketing

### Analytics: Plausible Analytics

**Decision**: Use Plausible Analytics instead of Google Analytics

**Rationale**:
- Privacy-friendly (GDPR compliant without cookie banner)
- Lightweight script (< 1KB vs GA's ~45KB)
- Simple dashboard for non-technical staff
- Affordable nonprofit pricing

**Alternative**: Google Analytics 4 (free but privacy-invasive, complex)

### Deployment: Vercel

**Decision**: Deploy on Vercel platform

**Rationale**:
- Free tier for non-commercial/personal projects
- Automatic deployments from Git
- Global CDN
- Built-in analytics and monitoring
- Next.js creators (best support)

**Alternative**: Netlify (similar, good backup option)

## Data Models

### Donation Record
```typescript
{
  id: string
  amount: number
  currency: string
  donorName: string
  donorEmail: string
  donorPhone?: string
  paymentMethod: 'stripe' | 'paypal' | 'mpesa'
  transactionId: string
  status: 'pending' | 'completed' | 'failed'
  isRecurring: boolean
  campaignId?: string
  message?: string
  anonymous: boolean
  createdAt: timestamp
}
```

### Campaign
```typescript
{
  id: string
  title: string
  description: string
  goalAmount: number
  currentAmount: number
  currency: string
  startDate: date
  endDate?: date
  imageUrl: string
  slug: string
  active: boolean
}
```

### Newsletter Subscriber
```typescript
{
  id: string
  email: string
  name?: string
  source: string
  subscribedAt: timestamp
  active: boolean
}
```

### Contact Submission
```typescript
{
  id: string
  name: string
  email: string
  phone?: string
  subject: string
  message: string
  type: 'general' | 'volunteer' | 'partnership' | 'help-request'
  status: 'new' | 'responded' | 'closed'
  submittedAt: timestamp
}
```

## Sanity CMS Schema

### Document Types
1. **Page** - Custom pages with flexible content blocks
2. **Story** - Success stories and testimonials
3. **Program** - Educational and vocational programs
4. **Team Member** - Staff and leadership bios
5. **Blog Post** - News and updates
6. **Impact Stat** - Key statistics for homepage
7. **Site Settings** - Global configuration

### Content Blocks
- Hero section with image and CTA
- Rich text with images
- Image gallery
- Quote/testimonial
- Call-to-action card
- Statistics grid
- Video embed

## Security Considerations

### Payment Security
- Never store credit card details (use Stripe Checkout hosted page)
- Validate all payment webhooks with signatures
- Use environment variables for API keys (never commit)
- HTTPS only (enforced by Vercel)
- Rate limiting on donation endpoints

### Data Privacy
- GDPR-compliant privacy policy
- Consent checkboxes for newsletter signup
- Secure storage of donor information
- Right to be forgotten implementation
- Clear data retention policy

### Image Privacy
- Consent forms for all beneficiary photos
- Ability to blur/remove images on request
- Watermark images to prevent misuse
- No metadata with personal info

## Performance Targets

- **Lighthouse Score**: > 90 across all metrics
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Mobile Performance**: Optimized for 3G connections

## Accessibility Standards

- WCAG 2.1 AA compliance
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for all images
- Keyboard navigation support
- Screen reader compatibility
- Sufficient color contrast (4.5:1 minimum)
- Focus indicators on interactive elements
- Skip to main content link

## SEO Strategy

### On-Page SEO
- Descriptive title tags (< 60 chars)
- Meta descriptions (< 160 chars)
- Open Graph tags for social sharing
- Twitter Card metadata
- Structured data (Organization, NGO schema)
- XML sitemap
- Robots.txt

### Content Strategy
- Blog posts targeting keywords: "help teenage mothers Kenya", "teenage pregnancy support", "empower teen mothers"
- Long-form content on programs and impact
- Location-based pages (Kenya, specific regions)
- Success stories with emotional hooks

### Link Building
- Register with NGO directories
- Partner organization backlinks
- Media coverage and press releases
- Social media profiles linking to site

## Internationalization (i18n)

**Phase 1**: English only (launch)
**Phase 2**: Add Swahili translations

Use `next-intl` library:
- URL structure: `/en/donate`, `/sw/donate`
- Language switcher in header
- Translate UI strings via JSON files
- CMS content in multiple languages

## Risks / Trade-offs

### Risk: Payment Processing Failures
- **Mitigation**: Multiple gateway options, clear error messages, retry logic, email support contact

### Risk: High Traffic Costs
- **Mitigation**: Vercel/Sanity free tiers generous, static generation reduces compute, caching strategy, monitor usage

### Risk: CMS Learning Curve for Staff
- **Mitigation**: Training videos, written documentation, simple schema design, preview mode, restrict permissions

### Risk: Content Not Updated Regularly
- **Mitigation**: Editorial calendar, assign content owners, automated reminders, make updates easy

### Risk: Donation Fraud
- **Mitigation**: Payment gateway fraud detection, monitor unusual patterns, manual review for large donations, clear refund policy

### Trade-off: Custom Design vs Templates
- **Decision**: Custom design inspired by successful NGOs
- **Rationale**: Builds trust, reflects unique mission, worth investment vs generic template

### Trade-off: Feature Completeness vs Launch Speed
- **Decision**: MVP first, iterate based on feedback
- **Rationale**: Get online quickly, learn what donors want, avoid over-engineering

## Migration Plan

N/A - This is a new website with no existing system to migrate from.

**Launch Checklist**:
1. Domain purchased and DNS configured
2. SSL certificate active (automatic with Vercel)
3. Payment gateways tested with real transactions
4. Content reviewed and approved by leadership
5. Legal pages (Privacy Policy, Terms, Refund Policy) reviewed by legal counsel
6. Analytics and email integrations verified
7. Mobile testing on actual devices
8. Accessibility audit passed
9. Performance audit passed
10. SEO metadata complete
11. Social media profiles created and linked
12. Google Search Console and Google My Business setup

## Open Questions

1. **Official Tagline**: What is the official tagline/slogan to use throughout the site?
2. **Brand Colors**: Are there official brand colors and logo files available?
3. **Content**: Who will provide initial content (text, images, videos)?
4. **Photography**: Is there a budget for professional photography or should we use stock images initially?
5. **Domain Name**: What domain name should be used (e.g., girlprideafricakenya.org)?
6. **Legal Review**: Who can review Terms of Service, Privacy Policy, and Refund Policy?
7. **Financial Reports**: Will annual reports be published on the website?
8. **Volunteer Screening**: What's the process for volunteer applications? Should forms collect specific info?
9. **Partnership Criteria**: What types of partnerships are sought? Corporate, NGO, government?
10. **Emergency Contact**: Is there a 24/7 helpline number for girls needing immediate assistance?

