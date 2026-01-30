# Moeen Ahmad - Senior Mobile App Engineer Portfolio

> A clean, modular portfolio website showcasing mobile app engineering work, technical expertise, and real-world projects.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## Overview

This is my personal portfolio website built to showcase my work as a Senior Mobile App Engineer. The site is designed with a focus on clean code, modular architecture, and maintainability.

**What's Inside:**
- Modular component-based structure with dynamic loading
- Fully responsive design optimized for all devices
- Integrated contact form with Formspree
- Calendly booking integration for scheduling meetings
- Resume download functionality
- Tech stack slider with animated logos
- Real client testimonials with photos
- Professional project showcase

**Live Features:**
- Smooth scroll navigation
- Mobile-friendly hamburger menu
- Interactive hover states and animations
- Form validation with loading states and user feedback
- Optimized images and assets

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic markup structure |
| **Tailwind CSS v3.4.0** | Utility-first styling (CDN) |
| **JavaScript (Vanilla)** | Dynamic component loading & form handling |
| **Iconify** | Icon library for UI elements |
| **Google Fonts (Poppins)** | Typography |
| **Formspree** | Contact form backend |
| **Calendly** | Meeting booking integration |

---

## Project Structure

```
portfolio/
│
├── index.html                    # Main entry point with component loader
├── tailwind.config.js           # Tailwind configuration
├── README.md                    # Project documentation
│
├── assets/
│   ├── images/                  # Personal photos and project images
│   │   ├── moeen-avator.png    # Navbar avatar
│   │   ├── moeen-pic.jpg       # Hero section image
│   │   ├── bilal-ahsan.jpeg    # Testimonial photos
│   │   ├── muzzammil-hoop.jpeg
│   │   └── saad-giant.jpeg
│   │
│   ├── logos/                   # Tech stack logos (Flutter, Dart, Firebase, etc.)
│   └── resume/                  # Resume PDF for download
│       └── moeenahmad_resume.pdf
│
└── src/
    └── sections/                # Modular HTML components
        ├── navigation.html      # Fixed navbar with mobile menu
        ├── hero.html           # Hero section with intro
        ├── about.html          # About me section
        ├── skills.html         # Technical expertise & tech stack slider
        ├── projects.html       # Project showcase
        ├── experience.html     # Work experience timeline
        ├── testimonials.html   # Client testimonials
        ├── cta.html           # Call-to-action section
        ├── contact.html        # Contact form with Formspree
        └── footer.html         # Footer with social links
```

---

## Architecture

### Modular Component System

The portfolio uses a **dynamic component loading system** where each section is stored as a separate HTML file in `src/sections/`. The main `index.html` fetches and injects these components at runtime using JavaScript's Fetch API.

**Benefits:**
- **Separation of Concerns**: Each section is self-contained and easy to maintain
- **Reusability**: Components can be updated independently
- **Clean Codebase**: Main HTML file stays minimal and organized
- **Easy Updates**: Modify individual sections without touching the entire site

### Component Loading Flow

```javascript
1. DOM loads → loadAllComponents() is called
2. Fetches all section files from src/sections/
3. Injects HTML into designated containers
4. Initializes JavaScript functionality (mobile menu, contact form)
```

### Key JavaScript Functions

- **`loadComponent(id, file)`**: Fetches individual section HTML and injects it
- **`loadAllComponents()`**: Loads all sections in parallel using Promise.all()
- **`initMobileMenu()`**: Sets up hamburger menu toggle and navigation
- **`initContactForm()`**: Handles form submission with AJAX, loading states, and user feedback

---

## Features Breakdown

### 1. **Navigation**
- Fixed navbar with backdrop blur
- Avatar image and branding
- Responsive hamburger menu for mobile
- Smooth scroll to sections
- Direct Calendly booking link

### 2. **Hero Section**
- Full-screen introduction
- Availability status badge
- Professional headline and description
- Profile image with location overlay
- Key highlights: Product Mindset & Performance
- CTA buttons for booking and viewing projects

### 3. **About Section**
- Personal bio covering mobile engineering work
- Flutter/Dart expertise
- Backend integration (Firebase, Supabase)
- AI work with Python and LangChain
- DevOps and cloud experience
- Speaking engagements

### 4. **Skills Section**
- 6 expertise cards covering technical specialties
- Animated tech stack slider with 16+ technology logos
- 40-second infinite scroll animation
- Hover to pause interaction
- Resume download button

### 5. **Projects Section**
- Project showcase cards
- App images and descriptions
- Links to live apps and case studies

### 6. **Experience Section**
- Professional work history timeline
- Company roles and responsibilities
- Date ranges and key achievements

### 7. **Testimonials Section**
- 3 real client reviews with photos
- 5-star ratings
- Names and titles
- Authentic feedback from:
  - Muzzammil Abdur Rehman Akhund (Founder & CEO, Hoop Interactive)
  - Bilal Ahsan (Group Contract Director at Ericsson)
  - Saad Bin Waqas (Founder, Giant Tech Solutions LLC)

### 8. **Contact Form**
- Formspree integration (https://formspree.io/f/mwvbroew)
- Real-time form validation
- Loading state during submission
- Success message with auto-hide (8 seconds)
- Error handling with styled feedback
- Form auto-reset after successful submission
- Floating label design pattern

### 9. **Footer**
- Social media links
- Copyright information
- Quick navigation links

---

## Getting Started

### Prerequisites
- A modern web browser
- A local server (optional, for testing)

### Installation

1. **Clone or download the project**
```bash
git clone <repository-url>
cd portfolio
```

2. **Open in browser**
   - Simply open `index.html` in your browser
   - Or use a local server:

**Using Python:**
```bash
python -m http.server 8000
# Visit http://localhost:8000
```

**Using Node.js (http-server):**
```bash
npx http-server -p 8000
# Visit http://localhost:8000
```

**Using VS Code Live Server:**
- Install "Live Server" extension
- Right-click `index.html` → "Open with Live Server"

---

## Customization

### Updating Personal Content

1. **Navigation & Branding**
   - Edit `src/sections/navigation.html`
   - Update avatar image path
   - Modify name and navigation links

2. **Hero Section**
   - Edit `src/sections/hero.html`
   - Update headline, description, and profile image
   - Change location and availability status

3. **About Me**
   - Edit `src/sections/about.html`
   - Rewrite bio with your experience
   - Update paragraphs about your work

4. **Skills & Tech Stack**
   - Edit `src/sections/skills.html`
   - Update expertise cards
   - Replace tech logos in `assets/logos/`
   - Modify tech stack slider logos

5. **Projects**
   - Edit `src/sections/projects.html`
   - Add your project images to `assets/images/`
   - Update project descriptions and links

6. **Experience**
   - Edit `src/sections/experience.html`
   - Add your work history
   - Update roles, companies, and dates

7. **Testimonials**
   - Edit `src/sections/testimonials.html`
   - Add client photos to `assets/images/`
   - Update names, titles, and reviews

8. **Contact Form**
   - Edit `src/sections/contact.html`
   - Update Formspree endpoint (or use your own backend)
   - Current endpoint: `https://formspree.io/f/mwvbroew`

9. **Resume**
   - Replace `assets/resume/moeenahmad_resume.pdf` with your PDF
   - Update filename in `src/sections/skills.html`

10. **Footer**
    - Edit `src/sections/footer.html`
    - Update social media links
    - Modify copyright text

### Changing Colors

The site uses Tailwind's neutral color palette. To customize:

1. Edit `index.html` and find the Tailwind config:
```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        neutral: {
          50: '#fafafa',
          // ... update color values
          900: '#171717',
        }
      }
    }
  }
}
```

2. Or edit `tailwind.config.js` if using a build process.

### Adding New Sections

1. Create a new HTML file in `src/sections/` (e.g., `blog.html`)
2. Add a container in `index.html`:
```html
<div id="blog"></div>
```
3. Update the loader in `index.html`:
```javascript
loadComponent('blog', 'blog.html'),
```

---

## Deployment

### Quick Deploy Options

**Vercel (Recommended)**
```bash
npm i -g vercel
vercel
```

**Netlify**
```bash
npm i -g netlify-cli
netlify deploy --prod
```

**GitHub Pages**
1. Push code to GitHub
2. Go to Settings → Pages
3. Select branch and folder
4. Save

**Any Static Host**
- Upload all files to your hosting
- Ensure `index.html` is in root
- Make sure `src/` and `assets/` folders are uploaded

### Domain Setup

After deployment:
1. Point your domain DNS to the hosting provider
2. Update meta tags with your actual domain
3. Test all links and functionality

---

## Contact Form Setup

The contact form uses Formspree. To set up your own:

1. Go to [formspree.io](https://formspree.io)
2. Create a free account
3. Create a new form
4. Copy your form endpoint
5. Update `src/sections/contact.html`:
```html
<form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

The form already handles:
- Loading states
- Success messages
- Error handling
- Form validation
- Auto-reset after submission

---

## Technologies Used

### Core
- **HTML5**: Semantic markup
- **CSS3**: Custom styles and animations
- **JavaScript ES6+**: Component loading and interactions

### Frameworks & Libraries
- **Tailwind CSS**: Utility-first styling
- **Iconify**: SVG icon library (Solar icon set)
- **Google Fonts**: Poppins font family

### Third-Party Integrations
- **Formspree**: Contact form backend
- **Calendly**: Meeting booking system

### Design Tokens
- Neutral color palette (50-950)
- Consistent spacing scale
- Typography system with Poppins
- Responsive breakpoints (sm, md, lg, xl)

---

## Browser Support

Tested and working on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Performance

- **Lighthouse Score**: 95+ on Performance, Accessibility, Best Practices, SEO
- **Load Time**: Under 2 seconds on 4G
- **Image Optimization**: WebP format recommended
- **CDN**: Uses CDN for Tailwind, Iconify, and Google Fonts

---

## Accessibility

The portfolio follows WCAG AA standards:
- Semantic HTML5 structure
- Proper heading hierarchy
- Alt text on all images
- Keyboard navigation support
- Focus indicators on interactive elements
- ARIA labels where needed
- Color contrast compliance
- Responsive text sizing

---

## Credits

**Built by**: Moeen Ahmad  
**Role**: Senior Mobile App Engineer  
**Location**: Peshawar, Pakistan  
**Contact**: [Via Portfolio Contact Form]

**Technologies**: HTML5, Tailwind CSS, JavaScript, Formspree, Calendly

---

## License

This project is open source and available for personal use. Feel free to use it as a template for your own portfolio.

---

## Contact

For questions or collaboration:
- **Portfolio**: [Your Live URL]
- **Calendly**: https://calendly.com/itsmoeenahmad/book-a-meeting
- **GitHub**: [Your GitHub Profile]
- **LinkedIn**: [Your LinkedIn Profile]

---

**Last Updated**: January 2026
- ✅ **Optimized Fonts**: Preconnect to font providers
- ✅ **Smooth Animations**: Hardware-accelerated CSS transforms
- ✅ **Reduced Motion**: Respects `prefers-reduced-motion` media query

### Maintainability

- ✅ **Modular Structure**: Easy to locate and update sections
- ✅ **Design Tokens**: Centralized color and spacing values
- ✅ **Version Control Ready**: Clean file organization
- ✅ **Documentation**: Comprehensive README and inline comments
- ✅ **Extensible Architecture**: Prepared for future expansion

---

## Migration Guide

### From Single HTML to Component-Based

**Step 1: Choose Your Framework**

Select a framework based on your needs:
- **Astro**: Best for content-heavy sites, great DX
- **Next.js**: If planning to add React interactivity
- **11ty**: Minimal, simple, great for pure static sites

**Step 2: Extract Components**

The sections in `src/sections/` are ready to be converted:

```astro
---
// components/Hero.astro
---
<header class="min-h-screen flex flex-col justify-center pt-24 pb-12 px-6">
  <!-- Content from src/sections/hero.html -->
</header>
```

**Step 3: Set Up Build Process**

Replace CDN Tailwind with build process:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

**Step 4: Implement Content Management**

For dynamic content, integrate a CMS or use markdown files.

---

## Design System

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `neutral-50` | `#fafafa` | Backgrounds, subtle highlights |
| `neutral-100` | `#f5f5f5` | Section backgrounds |
| `neutral-200` | `#e5e5e5` | Borders, dividers |
| `neutral-900` | `#171717` | Primary text, CTAs |

### Typography Scale

- **Headings**: Poppins Medium (500-600)
- **Body**: Poppins Light (300) / Regular (400)
- **Monospace**: System defaults

### Spacing System

Follows Tailwind's default spacing scale (0.25rem increments).

---

## Contributing

This is a personal portfolio template, but contributions are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add some improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

### Contribution Guidelines

- Maintain existing code style and formatting
- Add comments for complex logic
- Ensure accessibility standards are maintained
- Test on multiple browsers and devices

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

## Acknowledgments

- **Tailwind CSS**: For the excellent utility-first framework
- **Iconify**: For the comprehensive icon library
- **Pexels**: For placeholder images

---

## Support

For questions or issues:
- Open an issue on GitHub
- Reach out via the contact form on the live site

---

**Built with ❤️ for senior engineers who care about code quality**