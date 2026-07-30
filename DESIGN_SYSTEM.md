# FloatTech Design System

## Overview
This document outlines the complete design system implementation for the FloatTech digital agency website, matching the provided Figma design mockup.

## Color Palette

### Primary Colors
- **Primary Blue**: `#0057FF` - Used for buttons, links, accents, and primary actions
- **Secondary Purple**: `#7C3AED` - Used for secondary accents and gradients
- **Accent Cyan**: `#0EA5E9` - Used for highlights and complementary elements

### Neutral Colors
- **Background**: `#FAFBFC` (Light) / `#0F172A` (Dark)
- **Foreground**: `#0F172A` (Light) / `#F1F5F9` (Dark)
- **Card**: `#FFFFFF` (Light) / `#1E293B` (Dark)
- **Muted**: `#E2E8F0` (Light) / `#334155` (Dark)
- **Muted Foreground**: `#64748B` (Light) / `#94A3B8` (Dark)

### Semantic Colors
- **Destructive**: `#EF4444` - Error states
- **Border**: `#E2E8F0` - Dividers and borders
- **Input**: `#E2E8F0` - Form input backgrounds

## Typography

### Font Family
- **Sans Serif**: Geist (default font family across all text)
- **Monospace**: Geist Mono (for code blocks and technical content)

### Type Scale
```
H1: text-4xl sm:text-5xl lg:text-6xl | font-bold
H2: text-3xl sm:text-4xl lg:text-5xl | font-bold
H3: text-2xl sm:text-3xl lg:text-4xl | font-bold
H4: text-xl sm:text-2xl lg:text-3xl | font-semibold
H5: text-lg sm:text-xl lg:text-2xl | font-semibold
H6: text-base sm:text-lg lg:text-xl | font-semibold

Body: text-base | line-height 1.5-1.6
Small: text-sm | line-height 1.5
Extra Small: text-xs | line-height 1.4
```

### Font Weights
- **Light**: 300
- **Normal**: 400
- **Medium**: 500
- **Semibold**: 600
- **Bold**: 700

## Component System

### Buttons

#### Variants
1. **Default** - Primary blue button
   - Background: `#0057FF`
   - Text: White
   - Hover: `#0057FF` at 90% opacity
   - Used for: Primary CTAs

2. **Secondary** - Purple button
   - Background: `#7C3AED`
   - Text: White
   - Hover: `#7C3AED` at 90% opacity
   - Used for: Secondary actions

3. **Outline** - Bordered primary button
   - Border: 2px `#0057FF`
   - Text: `#0057FF`
   - Hover: Light blue background
   - Used for: Alternative actions

4. **Ghost** - Transparent button
   - Text: Foreground color
   - Hover: Accent background at 10% opacity
   - Used for: Tertiary actions

5. **Gradient** - Blue to purple gradient
   - Background: Linear gradient from primary to secondary
   - Text: White
   - Hover: 90% opacity
   - Used for: Featured CTAs

#### Sizes
- **XS**: h-8 px-3 text-xs
- **SM**: h-9 px-3 text-sm
- **MD**: h-10 px-4 text-base (default)
- **LG**: h-12 px-6 text-lg
- **XL**: h-14 px-8 text-lg

### Cards

#### Variants
1. **Default** - Standard card
   - Background: Card color
   - Border: 1px border-border
   - Used for: Content containers

2. **Elevated** - Card with shadow
   - Background: Card color
   - Shadow: Large shadow (shadow-lg)
   - Used for: Featured content

3. **Outlined** - Transparent with border
   - Background: Transparent
   - Border: 2px primary/20%
   - Used for: Outlined containers

4. **Glass** - Light card (updated for design)
   - Background: Card color with subtle shadow
   - Border: 1px border-border/60%
   - Used for: Service and feature cards

#### Features
- **Rounded Corners**: 0.75rem (12px)
- **Padding**: 1.5rem (24px)
- **Hover State**: `hover:shadow-xl hover:scale-105` (if hoverable)
- **Transition**: 0.3s all ease

### Sections

#### Spacing
- **XS**: 2rem (32px)
- **SM**: 3rem (48px)
- **MD**: 4rem (64px)
- **LG**: 5rem (80px)
- **XL**: 6rem (96px)

#### Grid Layouts
- **Features Grid**: 4 columns (1 column mobile, 2 tablet, 4 desktop)
- **Services Grid**: 3 columns (1 column mobile, 2 tablet, 3 desktop)
- **Portfolio Grid**: 4 columns (1 column mobile, 2 tablet, 4 desktop)
- **Process Grid**: 4 columns (1 column mobile, 2 tablet, 4 desktop)

### Hero Section
- **Background**: Light off-white with animated gradient circles
- **Layout**: 2-column (left: content, right: illustration/image)
- **Main Heading**: H1 bold text with accent color word
- **Badge**: Small inline badge with icon and primary color
- **CTA Buttons**: Primary and secondary button combination
- **Spacing**: Large gap between columns (3rem-4rem)

### Features Section ("Where Precision Meets Imagination")
- **Heading**: H2 with accent color on last word
- **Grid**: 4 equal columns
- **Cards**: Feature cards with icon, title, description
- **Icon Background**: Primary/20% background
- **Card Variant**: Glass variant for light, clean appearance

### Services Section ("Premium Digital Services")
- **Heading**: H2 centered
- **Grid**: 3 equal columns
- **Cards**: Feature cards with badges (Popular, New)
- **Badge Colors**: Primary background with primary text
- **CTA Button**: Gradient variant button at center

### Portfolio Section
- **Heading**: H2 ("Selected Projects")
- **Grid**: 2-4 columns with thumbnail images
- **Card Layout**: Image top, content bottom
- **Tags**: Small tags with primary/10% background
- **Overlay**: Visible on card hover

### Testimonials Section
- **Card Type**: Glass variant with larger padding
- **Stars**: Yellow star icons for ratings
- **Quote**: Italic text in larger size
- **Author Info**: Name (semibold) + role (muted)
- **Navigation**: Dot indicators and arrow buttons

### Process Section
- **Title**: "Our Creative Process"
- **Grid**: 4 columns with connecting lines (desktop only)
- **Step Numbers**: Blue gradient circular badges
- **Card Layout**: Number top-left, icon + content below
- **Connector Lines**: Subtle primary/30% horizontal lines

### Contact Section
- **Title**: Large heading with emphasis on "Amazing Together"
- **Form Layout**: Stacked inputs with labels
- **Input Styling**: Light background with primary border on focus
- **CTA Button**: Primary blue button, full width or centered
- **Form Fields**: Name, Email, Phone, Subject, Message

## Animations

### Scroll Animations
- **Stagger Delay**: 0.05s between items (fast appearance)
- **Initial Delay**: 0.05s before first item
- **Item Duration**: Variable (spring or easing)
- **Trigger**: When section enters viewport (once)

### Transition Timings
- **Default**: 0.2-0.3s for most interactions
- **Hover**: Immediate to 200ms
- **Scroll**: Natural spring or ease-in-out

### Effects
- **Scale**: Slight scale-105 on hover (cards)
- **Opacity**: Fade in from 0 to 1
- **Translate**: Y-axis movement (10-20px) for entrance
- **Shadow**: Increase shadow on hover

## Theme Support

### Light Mode (Default)
- Background: `#FAFBFC`
- Text: `#0F172A`
- Cards: `#FFFFFF`
- Accents: Primary blue, secondary purple

### Dark Mode
- Background: `#0F172A`
- Text: `#F1F5F9`
- Cards: `#1E293B`
- Accents: Lighter blue `#3B82F6`, lighter purple `#A78BFA`

### Theme Toggle
- Located in Navbar (top-right on desktop, mobile menu on mobile)
- Icon: Sun/Moon icon with 180° rotation animation
- Persistence: Saved to localStorage
- Application: Instant with beforeInteractive script

## Responsive Design

### Breakpoints
- **Mobile**: 0-640px
- **Tablet**: 641-1024px
- **Desktop**: 1025px+

### Responsive Strategy
- **Mobile-First**: Base styles for mobile, enhance with breakpoints
- **Typography**: Scales up progressively
- **Grid Columns**: Reduce from desktop (4/3) → tablet (2) → mobile (1)
- **Padding**: Reduces on mobile devices

## Spacing Scale
```
0: 0px
1: 0.25rem (4px)
2: 0.5rem (8px)
3: 0.75rem (12px)
4: 1rem (16px)
6: 1.5rem (24px)
8: 2rem (32px)
12: 3rem (48px)
16: 4rem (64px)
```

## Border Radius
- **Small**: 0.375rem (6px)
- **Medium**: 0.5rem (8px)
- **Default**: 0.75rem (12px)
- **Large**: 1rem (16px)
- **Full**: 9999px (circles/pills)

## Shadows
```
sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
md: 0 4px 6px -1px rgba(0, 0, 0, 0.1)
lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1)
xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1)
```

## Accessibility

### Color Contrast
- Text on background: Minimum 4.5:1 ratio
- Focus states: Visible 2px ring with primary color
- Links: Underlined or visually distinct

### Typography
- Headings use semantic HTML (h1-h6)
- Font sizes readable at 16px base
- Line height 1.5-1.6 for body text

### Interactive Elements
- Buttons have clear focus states
- Links have hover and focus states
- Form fields have labels and error states
- Icons paired with text labels where applicable

## Implementation Files

### Core Files
- `/app/globals.css` - Theme variables and global styles
- `/src/components/ui/` - Base components
- `/src/components/sections/` - Section components
- `/src/components/layout/` - Layout components
- `/src/components/common/` - Utility components

### Configuration
- `/next.config.mjs` - Build and header configuration
- `/tailwind.config.js` - Tailwind CSS theme (v4)
- `/tsconfig.json` - TypeScript configuration

## Design Tokens Reference

See `globals.css` for all CSS custom properties (variables) defining the design system.

