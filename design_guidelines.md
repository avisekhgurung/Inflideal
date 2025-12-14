# Design Guidelines: Influencer Deal Platform

## Design Approach
**System-Based Approach**: Material Design principles adapted for mobile-first SaaS experience
**Rationale**: Utility-focused productivity tool requiring efficiency, standard mobile patterns, and information-dense layouts typical of deal management applications.

## Core Design Principles
1. **Mobile-First Priority**: Design for 320px baseline, scale up gracefully
2. **Touch-Optimized**: All interactive elements minimum 44px tap targets
3. **Card-Based Hierarchy**: Information grouped in elevated, rounded containers
4. **Native App Feel**: Bottom navigation, full-screen flows, gesture-friendly

---

## Layout System

### Spacing Scale
Use Tailwind spacing units: **2, 3, 4, 6, 8, 12, 16**
- Component padding: `p-4` or `p-6`
- Card spacing: `space-y-4` between cards
- Section gaps: `gap-6` or `gap-8`
- Bottom nav height: `h-16`

### Container Strategy
- Full-width mobile: `w-full px-4`
- Max content width: `max-w-2xl mx-auto` (tablet+)
- Safe area padding: `pb-20` (above bottom nav)

---

## Typography

### Font Stack
**Primary**: Inter or System UI fonts
- Headings: 600-700 weight
- Body: 400-500 weight
- Labels: 500 weight

### Hierarchy
- **Screen Titles**: `text-2xl font-semibold` (h1)
- **Card Headers**: `text-lg font-semibold` (h2)
- **Section Labels**: `text-sm font-medium uppercase tracking-wide` (muted)
- **Body Text**: `text-base leading-relaxed`
- **Metadata**: `text-sm`
- **Micro Text**: `text-xs` (timestamps, helper text)

---

## Component Library

### Navigation
**Bottom Navigation Bar**:
- Fixed position: `fixed bottom-0 inset-x-0`
- Height: `h-16`
- 4 items: Home, Deals, Contracts, Billing
- Icon + label vertical stack
- Active state indicator (filled icon or underline accent)

### Cards
**Primary Card Pattern**:
- Rounded corners: `rounded-xl` or `rounded-2xl`
- Elevation: Subtle shadow (shadow-sm or shadow-md)
- Padding: `p-4` or `p-6`
- Touch spacing: `space-y-3` internal elements

**Dashboard Summary Cards**:
- Large number display: `text-4xl font-bold`
- Label below: `text-sm font-medium`
- Icon in corner (optional)

**Deal/Contract Cards**:
- Status badge top-right: `rounded-full px-3 py-1 text-xs font-medium`
- Title: `text-lg font-semibold`
- Metadata rows: `flex justify-between text-sm`
- Action button at bottom

### Forms
**Mobile-Optimized Inputs**:
- Full width: `w-full`
- Height: `h-12` minimum
- Rounded: `rounded-lg`
- Padding: `px-4`
- Bottom margin: `mb-4` between fields
- Labels: `text-sm font-medium mb-2`

**Select/Dropdown**:
- Native mobile selectors preferred
- Same sizing as text inputs

**Date Pickers**:
- Native `<input type="date">` for mobile

### Buttons
**Primary CTA**:
- Full width on mobile: `w-full`
- Height: `h-12`
- Rounded: `rounded-lg`
- Font: `text-base font-semibold`
- Icons: Leading or trailing (16px-20px)

**Floating Action Button** (Create Deal):
- Fixed position: `fixed bottom-20 right-4`
- Size: `w-14 h-14`
- Rounded: `rounded-full`
- Icon centered

**Secondary Buttons**:
- Outlined variant: `border-2`
- Same height as primary

### Deliverables List
**Dynamic Add/Remove Pattern**:
- Each deliverable as card: `rounded-lg border p-4 mb-3`
- Platform icons (Instagram/YouTube/Twitter)
- Content type badge
- Quantity + frequency inline
- Remove button: `text-sm` with icon (top-right)
- "+ Add Deliverable" button below list

### Status Badges
- Rounded: `rounded-full`
- Padding: `px-3 py-1`
- Font: `text-xs font-medium uppercase tracking-wide`
- Variants: Pending, Active, Completed, Paid, Unpaid

### Invoice Display
**Professional Invoice Card**:
- White background container
- Header with logo placeholder
- Invoice number: `text-sm font-mono`
- Line items: Table-like rows with `border-b`
- Totals section: `border-t-2` with bold amounts
- Download/Share icons in header

### Confirmation Screens
**Exclusive Contract Modal/Screen**:
- Centered content: `max-w-lg mx-auto`
- Large icon/illustration placeholder at top
- Heading: `text-xl font-bold text-center`
- Body text: `text-base leading-relaxed text-center`
- Checkbox with label: `flex items-start gap-3`
- Full-width CTA at bottom

### File Upload
**Proof Upload Component**:
- Dashed border zone: `border-2 border-dashed rounded-lg`
- Height: `h-32`
- Centered upload icon + text
- File name display after upload: `truncate text-sm`

---

## Screen-Specific Layouts

### Login Screen
- Vertical center: `min-h-screen flex items-center justify-center`
- Logo/branding at top
- Primary button: Full width
- Minimal decorative elements

### Dashboard
- Sticky header with greeting: `text-2xl font-bold mb-6`
- Summary cards: `grid gap-4 mb-8` (1 column mobile)
- Recent activity section
- FAB for "+ Create Deal"
- Bottom nav sticky

### Deal Creation Flow
- Multi-step or single scrollable form
- Progress indicator if multi-step: `flex gap-2 mb-6` (dots)
- Grouped sections with labels
- Sticky bottom CTA: "Create Deal"

### Deal Details
- Hero card with deal info
- Deliverables list (collapsible on mobile)
- Action buttons: Stack vertically `space-y-3`

### Contracts List
- Filter tabs at top: `flex gap-2 overflow-x-auto` (Active/Completed)
- Scrollable card list
- Pull-to-refresh pattern (visual only)

### Billing Tab
- Toggle: Paid/Unpaid filter
- Invoice cards with amount prominent: `text-2xl font-bold`
- Status badge and date

---

## Interactions & States

### Tap Feedback
- All buttons: Scale down slightly on active (visual suggestion)
- Cards: Slight press effect when tappable

### Loading States
- Skeleton screens for cards
- Spinner for async actions

### Empty States
- Icon + message centered
- Helpful CTA ("Create your first deal")

---

## Animations
**Minimal Use**:
- Screen transitions: Slide from right (mobile native feel)
- Bottom nav: Icon bounce on tap (subtle)
- Card appearance: Fade-in stagger (list items)
- NO scroll-based animations
- NO complex hover effects (mobile-first)

---

## Images
**No hero images required** - This is a utility app focused on data and workflows.

**Icon Usage**:
- Material Icons or Heroicons via CDN
- Platform logos: Instagram/YouTube/Twitter (20px-24px inline)
- Status icons in badges
- Bottom nav icons (24px)

---

## Accessibility
- Minimum contrast ratios maintained
- Touch targets ≥44px
- Form labels always visible
- Error states clearly indicated
- Focus indicators for keyboard navigation (tablet+)