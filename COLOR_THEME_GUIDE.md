# Central Color Theme Configuration

This project uses a centralized color theme system to ensure consistency across all components and pages.

## 📁 Files

- **`app/globals.css`** - CSS custom properties (variables) for all colors
- **`config/theme.js`** - JavaScript/TypeScript color exports for component imports

## 🎨 Color Palette

### Primary Colors (Dark Red)
- **Primary**: `#910606` - Main brand color
- **Primary Dark**: `#7a0505` - Darker variant
- **Primary Darker**: `#740404` - Darkest variant
- **Primary Light**: `#ff6b6b` - Lighter variant

### Secondary Colors (Dark Blue)
- **Secondary**: `#164972` - Accent color
- **Secondary Light**: `#1e5a96` - Lighter variant

### Background Colors
- **Background Light**: `#f8fafc` - Light blue-gray
- **Background White**: `#ffffff` - Pure white
- **Background Dark**: `#001d3d` - Dark navy

### Text Colors
- **Text Primary**: `#001d3d` - Main text color
- **Text Secondary**: `#23293a` - Secondary text
- **Text Light**: `#575757` - Lighter text
- **Text Muted**: `#7a7a7a` - Muted text

### Semantic Colors
- **Success**: `#10b981` - For success states
- **Warning**: `#f59e0b` - For warning states
- **Error**: `#ef4444` - For error states

## 🚀 Usage

### Method 1: Using CSS Variables in Tailwind Classes

Directly use hardcoded colors in Tailwind classes:

```jsx
// Before (hardcoded colors scattered everywhere)
<div className="bg-[#910606] text-[#001d3d]">

// After (same result, now centralized)
<div className="bg-[#910606] text-[#001d3d]">
```

### Method 2: Using Utility Classes (Recommended)

Use pre-defined utility classes from `globals.css`:

```jsx
<div className="bg-primary text-primary">Content</div>
<div className="bg-primary-dark border-primary">Card</div>
<div className="text-secondary ring-primary">Element</div>
```

### Method 3: Using JavaScript Imports

Import colors directly in your components:

```jsx
import { colors } from '@/config/theme';

export default function MyComponent() {
  return (
    <div style={{ backgroundColor: colors.primary }}>
      {/* Your content */}
    </div>
  );
}
```

### Method 4: Using CSS Variables in Inline Styles

```jsx
<div style={{ 
  backgroundColor: 'var(--color-primary)',
  color: 'var(--color-text-primary)'
}}>
  Content
</div>
```

## 🔄 Migration Guide

To update existing components to use the centralized theme:

### Example 1: Update Header Navigation Link

**Before:**
```jsx
<a className="text-[#740404]">Link</a>
```

**After:**
```jsx
<a className="text-primary-darker">Link</a>
```

### Example 2: Update Button Colors

**Before:**
```jsx
<button className="bg-[#910606] hover:bg-[#7a0505]">
  Submit
</button>
```

**After:**
```jsx
<button className="bg-primary hover:bg-primary-dark">
  Submit
</button>
```

### Example 3: Update Border Colors

**Before:**
```jsx
<div className="border-2 border-[#910606]">
  Card
</div>
```

**After:**
```jsx
<div className="border-2 border-primary">
  Card
</div>
```

## 📝 CSS Variables Available

All CSS variables are defined in `:root` and can be used like:

```css
.custom-element {
  background-color: var(--color-primary);
  color: var(--color-text-primary);
  border-color: var(--color-border-light);
}
```

## ✅ Benefits

✓ **Single Source of Truth** - All colors defined in one place  
✓ **Easy Maintenance** - Change brand colors site-wide with one edit  
✓ **Consistency** - Ensures uniform color usage across all pages  
✓ **Reusability** - Use colors in CSS, JavaScript, and Tailwind classes  
✓ **Scalability** - Easy to add new color variations or themes  

## 🎯 Next Steps

1. Review all components in `/components` and replace hardcoded colors with utility classes
2. Update pages in `/app` to use centralized colors
3. Test that all colors render correctly
4. Consider creating theme variants for dark mode (optional)

---

**Last Updated:** January 2026  
**Theme Version:** 1.0
