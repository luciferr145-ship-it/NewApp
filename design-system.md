# Brisbane Web Design, Branding & Print - Design System

## Mission
Deliver implementation-ready design-system guidance for Brisbane Web Design, Branding & Print that can be applied consistently across documentation site interfaces.

## Brand
- **Product/brand**: Brisbane Web Design, Branding & Print
- **URL**: https://kartiadesigns.com.au/
- **Audience**: Developers and technical teams
- **Product surface**: Documentation site

## Style Foundations

### Typography
- **Primary Font**: Ratch, sans-serif
- **Base Size**: 16px
- **Base Weight**: 400 (Regular)
- **Base Line Height**: 24px

### Typography Scale
```
font-size-xs: 16px
font-size-sm: 18px
font-size-md: 20px
font-size-lg: 22px
font-size-xl: 24px
font-size-2xl: 26px
font-size-3xl: 28px
font-size-4xl: 40px
```

### Color Palette
```
color-text-primary: #0c4038 (Dark teal)
color-text-secondary: #f6f2e2 (Cream/Off-white)
color-text-tertiary: #e6e981 (Muted yellow)
color-text-inverse: #ffffff (Pure white)
color-surface-base: #000000 (Black)
```

### Spacing Scale
```
space-1: 5px
space-2: 8px
space-3: 10px
space-4: 14.4px
space-5: 20px (derived)
space-6: 30px (derived)
space-8: 40px (derived)
space-10: 60px (derived)
space-12: 80px (derived)
```

### Radius & Effects
- **radius-xs**: 10px
- **radius-sm**: 80px (full rounded)
- **shadow-1**: rgba(0, 0, 0, 0.4) 0px 0px 40px -15px
- **shadow-2**: rgba(0, 0, 0, 0.6) 0px -15px 30px -15px

### Motion
- **duration-instant**: 300ms
- **duration-fast**: 600ms

## Accessibility Standards
- **Target Level**: WCAG 2.2 AA
- **Keyboard Navigation**: Fully supported
- **Focus Indicators**: Always visible (min 3px outline)
- **Contrast Ratios**: All text meets 4.5:1 minimum

## Component Specifications

### Navigation Component
**Purpose**: Persistent site navigation with keyboard accessibility

**States**:
- Default: Text secondary color on dark surface
- Hover: Text changes to tertiary color
- Focus-Visible: 2px tertiary outline with 2px offset
- Active: Text tertiary color (current page)

**Keyboard Behavior**:
- Tab: Move through links
- Enter: Follow link
- Escape: Close mobile menu

**Responsive**: Mobile toggle button at 768px breakpoint

### Button Component
**Purpose**: Primary call-to-action elements

**States**:
- Default: Primary text color on dark background
- Hover: Darkened background, -2px translateY, shadow
- Focus-Visible: 3px tertiary outline, 2px offset
- Active: Reset translateY
- Disabled: 50% opacity, no-cursor

**Padding**: space-4 (vertical) × space-8 (horizontal)

**Variants**: Primary (dark teal background)

### Service Card
**Purpose**: Showcase service offerings

**States**:
- Default: White background, shadow-1
- Hover: 8px elevation, shadow-2
- Focus-Within: 2px primary outline, 4px offset

**Content Hierarchy**:
1. Service title (font-size-xl, weight 700)
2. Description (font-size-sm, line-height 1.6)
3. Learn more link (underlined, font-weight 600)

### Portfolio Card
**Purpose**: Display work samples

**States**:
- Default: Rounded corners, shadow-1
- Hover: 1.05 scale, shadow-2
- Focus-Within: 2px primary outline, 4px offset

**Layout**:
- Image area: 250px height on desktop, 200px on mobile
- Text area: Padding space-6

### Hero Section
**Purpose**: Landing page hero with clear value proposition

**Layout**:
- Centered content, max-width 800px
- Min-height: 500px
- Background: Dark gradient
- Text: Secondary color for contrast

**Typography Hierarchy**:
1. Main title: font-size-4xl, weight 700, line-height 1.2
2. Subtitle: font-size-lg, secondary color
3. CTA: Primary button

## Anti-patterns (Don't)

❌ **Do not**:
- Use low-contrast text combinations (anything below 4.5:1)
- Hide focus indicators
- Use motion without `prefers-reduced-motion` consideration
- Create one-off spacing exceptions
- Use ambiguous button labels (e.g., "Click here")
- Mix font families
- Use non-semantic HTML
- Deploy components without tested keyboard navigation

## Quality Assurance Checklist

### Accessibility
- [ ] All interactive elements are keyboard accessible (Tab, Enter, Escape)
- [ ] Focus indicators are always visible
- [ ] Color contrast meets 4.5:1 minimum (WCAG AA)
- [ ] Form labels are properly associated
- [ ] Skip-to-content link present
- [ ] Semantic HTML used (nav, section, article, etc.)

### Responsive Design
- [ ] Mobile breakpoint at 768px
- [ ] Tablet breakpoint at 480px
- [ ] Touch targets minimum 44px × 44px
- [ ] Content reflows properly
- [ ] Images scale appropriately

### Performance
- [ ] CSS uses CSS custom properties (tokens)
- [ ] No inline styles in components
- [ ] Smooth transitions at 300-600ms
- [ ] Scroll behavior is `smooth` enabled
- [ ] Intersection Observer for lazy animations

### Design Consistency
- [ ] All spacing uses token scale
- [ ] All typography uses defined scale
- [ ] All colors use token palette
- [ ] All buttons use consistent padding/radius
- [ ] All shadows use token definitions
- [ ] All transitions use token durations

## Migration Guide

If updating from previous design system:
1. Replace all hex color values with CSS custom properties
2. Update spacing values to nearest token
3. Add focus-visible states to all interactive elements
4. Update button states to include active/disabled
5. Test keyboard navigation thoroughly
6. Verify contrast ratios on backgrounds

## Implementation Notes

- CSS Custom Properties stored in `:root` selector
- Mobile-first responsive approach
- Flexbox/Grid for layout (no floats)
- Intersection Observer for animation triggers
- Native HTML form elements for accessibility
- SVG icons with proper ARIA labels

---

**Last Updated**: 2024
**Version**: 1.0
**Status**: Production Ready