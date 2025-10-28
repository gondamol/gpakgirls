# Project Context

## Purpose
Girl Pride Africa Kenya (GPAK Girls) is a registered NGO dedicated to ending teenage pregnancy and sexual abuse among teenage girls in Kenya. This website serves as the organization's digital presence to:
- Raise awareness about teenage pregnancy and sexual abuse issues
- Showcase programs supporting teen mothers and pregnant teens
- Attract donor support through compelling storytelling
- Provide resources and information to beneficiaries
- Enable online donations through multiple payment methods

## Tech Stack
- **Frontend**: Next.js 14 (React) with TypeScript and App Router
- **Styling**: Tailwind CSS for mobile-first responsive design
- **CMS**: Sanity (headless CMS) for content management
- **Database**: Vercel Postgres for donation records and forms
- **Hosting**: Vercel (with custom domain gpakgirls.org from Hostinger)
- **Payment Gateways**: Stripe (international), PayPal, M-Pesa (Kenya)
- **Email**: Resend (transactional), Mailchimp (newsletters)
- **Analytics**: Google Analytics 4 or Plausible

## Project Conventions

### Code Style
- TypeScript strict mode enabled
- ESLint + Prettier for consistent formatting
- Functional components with React hooks
- Component files: PascalCase (e.g., `DonateButton.tsx`)
- Utility files: camelCase (e.g., `formatCurrency.ts`)
- Use `const` over `let`, avoid `var`
- Destructure props in component signatures

### Architecture Patterns
- **Mobile-first design**: Design for mobile viewport first, then scale up
- **Component-driven**: Reusable UI components in `/components`
- **Server Components**: Use React Server Components by default, Client Components only when needed (interactivity, hooks)
- **API Routes**: Next.js API routes for server-side logic (`/app/api`)
- **Data Fetching**: Server-side data fetching in Server Components
- **Static Generation**: Pre-render pages at build time where possible

### Testing Strategy
- Unit tests for utility functions (Jest)
- Component tests for UI components (React Testing Library)
- E2E tests for critical flows: donations, forms (Playwright)
- Payment testing in sandbox/test modes before production
- Manual testing on real mobile devices

### Git Workflow
- Main branch: `main` (production)
- Feature branches: `feature/description` or `fix/description`
- Commit messages: Conventional Commits format
  - `feat: add donation form`
  - `fix: resolve mobile nav issue`
  - `docs: update README`
- Pull requests reviewed before merge

## Domain Context
- **Target Audience**: International donors, local Kenyan supporters, volunteers, beneficiaries (teen mothers/pregnant teens), partner organizations
- **Cultural Sensitivity**: All beneficiary images require signed consent forms; option to use pseudonyms and blur faces
- **Language**: English primary, Swahili secondary (future phase)
- **Payment Methods**: M-Pesa is critical for Kenyan donors (dominant mobile money platform)
- **Mobile Usage**: High mobile internet usage in Kenya, often on 3G/4G connections
- **Trust Building**: NGO registration number, transparency reports, and clear donation usage breakdown are essential

## Important Constraints
- **Budget**: Prefer free tiers and low-cost solutions
- **Non-Technical Staff**: CMS must be intuitive for non-technical content managers
- **Performance**: Must load quickly on slower connections (3G)
- **Privacy**: GDPR compliance, consent for all beneficiary content
- **Accessibility**: WCAG 2.1 AA compliance required
- **Domain**: gpakgirls.org (hosted with Hostinger, will point to Vercel)

## External Dependencies
- **Domain**: gpakgirls.org (Hostinger DNS)
- **Payment Gateways**: Stripe, PayPal, Safaricom M-Pesa Daraja API
- **CMS**: Sanity.io
- **Email**: Resend, Mailchimp
- **Hosting**: Vercel
- **Analytics**: Google Analytics 4
