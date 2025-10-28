# Girl Pride Africa Kenya (GPAK Girls) - Official Website

A modern, mobile-first NGO website built with Next.js 14, TypeScript, and Tailwind CSS to empower teen mothers in Kenya through education, vocational training, mentorship, and support.

## 🌟 Overview

Girl Pride Africa Kenya is a registered NGO dedicated to ending teenage pregnancy and sexual abuse among teenage girls. This website serves as our digital presence to:

- Raise awareness about issues facing teen mothers
- Showcase our programs and impact
- Enable online donations (Stripe, PayPal, M-Pesa)
- Share success stories
- Recruit volunteers and partners
- Provide resources and support information

## 🚀 Tech Stack

- **Framework**: Next.js 14 (React 18) with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS (mobile-first, responsive design)
- **Icons**: Lucide React
- **CMS**: Sanity (headless CMS - to be integrated)
- **Database**: Vercel Postgres (to be integrated)
- **Hosting**: Vercel (recommended)
- **Domain**: gpakgirls.org

## 📦 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd gpakgirls
```

2. **Install dependencies**
```bash
npm install --legacy-peer-deps
```

3. **Run the development server**
```bash
npm run dev
```

4. **Open your browser**
```
http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
gpakgirls/
├── app/                    # Next.js App Router pages
│   ├── about/             # About Us page
│   ├── programs/          # Programs page (to be completed)
│   ├── stories/           # Success Stories page (to be completed)
│   ├── contact/           # Contact page (to be completed)
│   ├── get-involved/      # Get Involved page (to be completed)
│   ├── donate/            # Donation page (to be completed)
│   ├── layout.tsx         # Root layout with Header & Footer
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── Header.tsx         # Site header with navigation
│   ├── Footer.tsx         # Site footer
│   ├── Hero.tsx           # Homepage hero section
│   ├── ImpactStats.tsx    # Animated impact statistics
│   ├── FeaturedPrograms.tsx  # Programs showcase
│   ├── FeaturedStories.tsx   # Success stories
│   ├── CallToAction.tsx   # How You Can Help section
│   └── Newsletter.tsx     # Newsletter signup form
├── lib/                   # Utility functions and configs
├── public/                # Static assets (images, etc.)
├── openspec/              # OpenSpec proposal documentation
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── next.config.js         # Next.js configuration
└── package.json           # Dependencies and scripts
```

## 🎨 Design System

### Brand Colors

- **Primary (Pink/Red)**: `#e63950` - Main brand color representing compassion and empowerment
- **Secondary (Green)**: `#22c55e` - Represents hope and growth
- **Accent (Gold)**: `#f59e0b` - Warm, optimistic accent color

### Mobile-First Approach

All components are designed mobile-first with responsive breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ✅ Current Features

### Completed

- ✅ Modern mobile-first responsive design
- ✅ Homepage with hero, impact stats, programs, stories, and CTA
- ✅ Header with navigation (desktop & mobile menu)
- ✅ Footer with contact info and links
- ✅ About Us page with mission, vision, values, and team
- ✅ Animated impact statistics
- ✅ Newsletter signup form
- ✅ SEO-optimized metadata
- ✅ Accessibility-friendly HTML structure

### In Progress

- 🟡 Programs page (detailed program information)
- 🟡 Stories page (success story listings)
- 🟡 Contact page (contact form and info)
- 🟡 Get Involved page (volunteer and partnership opportunities)
- 🟡 Donate page (multi-gateway payment integration)

### Planned

- ⬜ Sanity CMS integration
- ⬜ Payment gateway integration (Stripe, PayPal, M-Pesa)
- ⬜ Blog functionality
- ⬜ Resource library
- ⬜ Event management
- ⬜ Multi-language support (English/Swahili)
- ⬜ Google Analytics integration
- ⬜ Email service integration (Resend, Mailchimp)

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token

# Database
POSTGRES_URL=your_postgres_url

# Payment Gateways
STRIPE_PUBLIC_KEY=pk_test_xxx
STRIPE_SECRET_KEY=sk_test_xxx
PAYPAL_CLIENT_ID=your_paypal_client_id
MPESA_CONSUMER_KEY=your_mpesa_consumer_key

# Email
RESEND_API_KEY=re_xxx
MAILCHIMP_API_KEY=your_mailchimp_api_key

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Site
NEXT_PUBLIC_SITE_URL=https://gpakgirls.org
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Push code to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

2. **Connect to Vercel**
- Go to [vercel.com](https://vercel.com)
- Import your GitHub repository
- Configure environment variables
- Deploy!

3. **Configure Custom Domain**
- In Vercel dashboard, go to Settings > Domains
- Add `gpakgirls.org`
- Update DNS records in Hostinger:
  - Type: A, Name: @, Value: 76.76.21.21
  - Type: CNAME, Name: www, Value: cname.vercel-dns.com

## 📝 Content Updates

### Adding Content

1. **Images**: Place in `/public/images/` directory
2. **Update placeholder text**: Search for "To Be Added" or "Placeholder" in code
3. **Team members**: Update in `/app/about/page.tsx`
4. **Contact info**: Update in `/components/Footer.tsx`

### Important Notes for Content

- All beneficiary photos MUST have signed consent forms
- Use pseudonyms if requested for privacy
- Ensure images show empowerment, not victimization
- Keep stories dignified and hope-focused

## 🤝 Contributing

This website was built using OpenSpec methodology. See `/openspec/` directory for the complete proposal, design decisions, and implementation tasks.

## 📞 Support

For technical support or questions:
- Email: info@gpakgirls.org
- Website: https://gpakgirls.org

## 📄 License

Copyright © 2025 Girl Pride Africa Kenya. All rights reserved.

---

**Built with ❤️ for teen mothers in Kenya**

