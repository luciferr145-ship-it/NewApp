# Creative Agency Website - Brisbane Web Design System

A fully functional, production-ready creative agency website implementing the Brisbane Web Design, Branding & Print design system with WCAG 2.2 AA accessibility compliance.

## 📋 Features

✅ **Fully Responsive Design**
- Mobile-first approach
- Breakpoints at 768px and 480px
- Touch-friendly interface

✅ **Accessibility First (WCAG 2.2 AA)**
- Keyboard navigation throughout
- Always-visible focus indicators
- Semantic HTML structure
- Proper color contrast ratios (4.5:1 minimum)
- ARIA labels and roles
- Skip-to-content link

✅ **Design System Implementation**
- Token-driven CSS variables
- Consistent spacing scale
- Typography hierarchy
- Predefined color palette
- Shadow and motion tokens

✅ **Performance Optimized**
- Semantic HTML for better SEO
- CSS animations and transitions
- Intersection Observer for scroll effects
- Minimal JavaScript
- No external dependencies

## 📁 File Structure

```
creative-agency-website/
├── index.html           # Main HTML file
├── styles.css          # CSS with design tokens
├── script.js           # JavaScript functionality
├── design-system.md    # Design system documentation
└── README.md           # This file
```

## 🎨 Design System

### Design Tokens

#### Typography
```css
--font-family-primary: 'Ratch', sans-serif;
--font-size-base: 16px;
--font-weight-base: 400;
--font-line-height-base: 24px;
```

#### Colors
```css
--color-text-primary: #0c4038;      /* Dark teal */
--color-text-secondary: #f6f2e2;    /* Cream */
--color-text-tertiary: #e6e981;     /* Muted yellow */
--color-surface-base: #000000;      /* Black */
```

#### Spacing
```css
--space-1: 5px;
--space-2: 8px;
--space-3: 10px;
--space-4: 14.4px;
/* ... extends to space-12: 80px */
```

### Components

#### Navigation
- Sticky header with responsive toggle
- Keyboard accessible menu
- Focus-visible states on all links

#### Buttons
- Primary action style
- Hover, focus, active, and disabled states
- 3px focus outline with offset

#### Cards
- Service cards with hover elevation
- Portfolio cards with scale transform
- Proper spacing and typography

#### Sections
- Hero section with gradient background
- Services grid (3 columns, responsive)
- Portfolio grid (5 items, responsive)
- About section with checklist
- CTA section with dark background
- Footer with link groups

## 🎯 Accessibility Features

- ✅ **Keyboard Navigation**: All interactive elements accessible via Tab, Enter, Escape
- ✅ **Focus Management**: Skip-to-content link and persistent focus indicators
- ✅ **Semantic HTML**: Proper use of nav, section, article, role attributes
- ✅ **ARIA Labels**: Buttons and toggles have descriptive aria-labels
- ✅ **Color Contrast**: All text meets WCAG AA 4.5:1 contrast ratio
- ✅ **Motion**: Smooth scroll and transitions that respect user preferences

## 📱 Responsive Breakpoints

### Desktop (1024px+)
- Multi-column layouts
- Full navigation menu
- Optimal readability

### Tablet (768px - 1023px)
- Adjusted grid columns
- Mobile navigation toggle
- Optimized spacing

### Mobile (< 768px)
- Single column layouts
- Hamburger menu
- Touch-friendly sizing
- Simplified typography scale

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd creative-agency-website
   ```

2. **Open in browser**
   ```bash
   # Simply open index.html in your browser
   open index.html
   # Or use a local server
   python -m http.server 8000
   ```

3. **View design documentation**
   - Open `design-system.md` for complete system documentation

## 🔧 Customization

### Changing Colors
Edit the CSS custom properties in `styles.css` `:root` selector:

```css
:root {
  --color-text-primary: #0c4038;    /* Change this */
  --color-text-secondary: #f6f2e2;  /* And this */
  /* ... */
}
```

### Adjusting Spacing
Modify the spacing scale in `:root`:

```css
--space-1: 5px;
--space-2: 8px;
/* ... scale up as needed */
```

### Adding Content
Edit sections in `index.html` and maintain semantic structure:

```html
<section class="services" id="services" aria-labelledby="services-title">
  <!-- Add your content here -->
</section>
```

## ⌨️ Keyboard Navigation

| Key | Action |
|-----|--------|
| `Tab` | Navigate forward through interactive elements |
| `Shift + Tab` | Navigate backward |
| `Enter` | Activate buttons/links |
| `Escape` | Close mobile menu |
| `Click` | Smooth scroll to anchor links |

## 🎓 Component States

All interactive components support:
- **Default**: Base state
- **Hover**: Pointer interaction
- **Focus-Visible**: Keyboard navigation (2-3px outline)
- **Active**: Pressed state
- **Disabled**: Inactive state (50% opacity)
- **Responsive**: Mobile/tablet adaptations

## 📊 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Design System Documentation

See `design-system.md` for:
- Complete token definitions
- Component specifications
- Accessibility standards
- Anti-patterns to avoid
- QA checklist

## 🔍 Testing

### Accessibility Testing
```bash
# Test with screen reader
# Test keyboard navigation (Tab, Enter, Escape)
# Test color contrast with WebAIM Contrast Checker
# Test with browser DevTools accessibility audit
```

### Responsive Testing
```bash
# Chrome DevTools > Toggle device toolbar
# Test at 480px, 768px, 1024px breakpoints
# Test touch interactions on mobile
```

## 📄 License

This project is provided as-is for the Brisbane Web Design, Branding & Print brand.

## 📞 Support

For questions about implementation or design system:
- Review `design-system.md`
- Check HTML semantic structure
- Verify CSS token usage
- Test keyboard accessibility

---

**Created**: 2024
**Version**: 1.0
**Status**: Production Ready ✅