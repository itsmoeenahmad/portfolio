# Moeen Ahmad - Senior Mobile App Engineer Portfolio

> A modular, single-page portfolio website focused on clean UI, maintainable structure, and production-ready presentation.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## Overview

This project is a personal portfolio site for showcasing mobile engineering work, technical depth, project outcomes, and client trust.

### Current Highlights

- Modular section-based architecture (`src/sections/*.html`)
- Dynamic component loading via vanilla JavaScript in `index.html`
- Responsive layout for mobile, tablet, and desktop
- Contact form integration with Formspree
- Calendly integration for direct meeting booking
- Smooth scrolling navigation and interactive hover states
- Testimonial horizontal drag/scroll behavior
- Animated tech stack logo rail

### Note

This codebase is now a pure static portfolio. Blog and Sanity studio integrations are not part of the current project.

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic structure and section templates |
| **Tailwind CSS (CDN)** | Utility-first styling |
| **Vanilla JavaScript** | Component loading and UI interactions |
| **Iconify** | UI icon rendering |
| **Google Fonts (Poppins)** | Typography |
| **Formspree** | Contact form backend |
| **Calendly** | Meeting booking link |

---

## Project Structure

```text
portfolio/
├── index.html                  # Main page + section loader scripts
├── tailwind.config.js          # Tailwind design tokens/config
├── README.md
├── CNAME
├── .gitignore
├── assets/
│   ├── images/                 # Profile, project, and testimonial images
│   ├── logos/                  # Tech logos for animated slider
│   └── resume/
│       └── moeenahmad_resume.pdf
└── src/
	├── styles/
	│   └── custom.css
	└── sections/
		├── navigation.html
		├── hero.html
		├── about.html
		├── skills.html
		├── projects.html
		├── experience.html
		├── testimonials.html
		├── cta.html
		├── contact.html
		└── footer.html
```

---

## Architecture

The homepage is assembled at runtime:

1. `index.html` defines container nodes (`#navigation`, `#hero`, etc.)
2. `loadAllComponents()` fetches each section from `src/sections/`
3. Injected sections are followed by runtime initialization:
   - `initMobileMenu()`
   - `initContactForm()`
   - `initTestimonialScroll()`

### Why this structure

- Keeps content isolated by section
- Makes edits safer and faster
- Avoids monolithic HTML files
- Works well for static hosting

---

## Feature Breakdown

### 1. Navigation
- Fixed navbar with backdrop blur
- Desktop links + mobile menu toggle
- CTA button for Calendly booking

### 2. Hero
- Personal positioning and availability status
- Strong headline + supporting copy
- Primary and secondary CTAs

### 3. About
- Professional summary and domain focus
- Mobile, backend, AI, and DevOps coverage

### 4. Skills
- Expertise cards with iconography
- Horizontal auto-scrolling tech logos
- Resume download action

### 5. Projects
- Visual project cards with outbound links
- Focus on shipped apps and real product work

### 6. Experience
- Career timeline with role summaries
- Responsibilities and measurable outcomes

### 7. Testimonials
- Multiple founder/client reviews with photos
- Horizontal drag-scroll interaction

### 8. CTA
- Conversion section for quick meeting scheduling

### 9. Contact
- Formspree-powered form submission
- Loading, success, and error states
- Accessible labels and keyboard focus handling

### 10. Footer
- Brand block, social links, and copyright

---

## Local Development

### Prerequisites

- Modern browser
- Optional local static server

### Run locally

```bash
# Option 1: Python
python -m http.server 8000

# Option 2: Node
npx http-server -p 8000
```

Then open `http://localhost:8000`.

---

## Customization Guide

### Update profile content

- `src/sections/hero.html`: Headline, intro, location, availability
- `src/sections/about.html`: Bio and capabilities
- `src/sections/experience.html`: Roles, timelines, achievements

### Update projects and testimonials

- `src/sections/projects.html`: Project cards and links
- `src/sections/testimonials.html`: Names, quotes, images

### Update contact and CTA

- `src/sections/contact.html`: Form fields and Formspree action URL
- `src/sections/cta.html`: CTA copy and Calendly link

### Update styling

- `index.html`: Inlined Tailwind CDN config and page-level styles
- `tailwind.config.js`: Shared Tailwind theme tokens
- `src/styles/custom.css`: Extra custom styles

### Add a new section

1. Create a section file in `src/sections/` (example: `awards.html`)
2. Add a container in `index.html`:

```html
<div id="awards"></div>
```

3. Load it in `loadAllComponents()`:

```javascript
loadComponent('awards', 'awards.html')
```

---

## Deployment

This project can be deployed to any static host:

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages
- Firebase Hosting

### Deployment checklist

1. Ensure `index.html` is in the root
2. Upload `src/` and `assets/` directories
3. Verify all external links and form endpoint
4. Configure custom domain and DNS if needed

---

## Contact Form Setup

Current form endpoint in `src/sections/contact.html`:

```html
https://formspree.io/f/mwvbroew
```

To switch to your own:

1. Create a form in Formspree
2. Replace the `action` URL
3. Test success/error states in browser

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- iOS/Android modern browsers

---

## License

This portfolio content and branding are personal and project-specific.
Reuse the structure with your own content, assets, and identity.
