# Brand Integration Guide

## Overview
This guide covers the complete integration of THE WHEEL brand assets and identity into the Storybook documentation system.

## Brand Asset Inventory

### Logo Assets (14 Variants)
Located in `.storybook/public/logos/`:

1. **wheel_logo_primary.svg** - Primary logo for main usage
2. **wheel_logo_compact.svg** - Compact version for small spaces
3. **wheel_logo_dashboard.svg** - Dashboard-specific logo
4. **wheel_logo_stacked.svg** - Stacked layout version
5. **wheel_logo_icon_only.svg** - Icon-only version
6. **wheel_logo_monochrome.svg** - Single color version
7. **wheel_logo_one_color.svg** - One color variant
8. **wheel_logo_watermark.svg** - Watermark version
9. **wheel_logo_app_icon_32.svg** - App icon 32px
10. **wheel_logo_app_icon_64.svg** - App icon 64px
11. **wheel_logo_app_icon_128.svg** - App icon 128px
12. **wheel_logo_social_square.svg** - Social media square
13. **wheel_logo_vc_portfolio.svg** - VC portfolio version
14. **wheel_logo_journey_energy.svg** - Journey energy variant

### Brand Documents
- **THE WHEEL - Complete 120+ Page Brand Bible.pdf** - Comprehensive brand guidelines
- **midnight-amber-brand.html** - Brand color reference

## Brand Implementation

### Storybook Theme Configuration
Located in `.storybook/theme.js`:

```javascript
import { create } from '@storybook/theming';

export default create({
  base: 'light',
  
  // Brand colors
  colorPrimary: '#2563eb',
  colorSecondary: '#059669',
  
  // UI colors
  appBg: '#f9fafb',
  appContentBg: '#ffffff',
  appBorderColor: '#e5e7eb',
  appBorderRadius: 8,
  
  // Typography
  fontBase: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
  fontCode: '"JetBrains Mono", "Monaco", monospace',
  
  // Text colors
  textColor: '#111827',
  textInverseColor: '#ffffff',
  textMutedColor: '#6b7280',
  
  // Toolbar colors
  barTextColor: '#6b7280',
  barSelectedColor: '#2563eb',
  barBg: '#ffffff',
  
  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#e5e7eb',
  inputTextColor: '#111827',
  inputBorderRadius: 6,
  
  // Brand assets
  brandTitle: 'THE WHEEL Design System',
  brandUrl: 'https://thewheel.design',
  brandImage: '/logos/wheel_logo_primary.svg',
  brandTarget: '_self'
});
```

### Brand CSS Styling
Located in `.storybook/brand.css`:

```css
/* THE WHEEL Brand Styles */
:root {
  --brand-primary: #2563eb;
  --brand-secondary: #059669;
  --brand-accent: #dc2626;
  --brand-neutral: #6b7280;
  --brand-background: #f9fafb;
  --brand-surface: #ffffff;
  --brand-text: #111827;
  --brand-text-muted: #6b7280;
}

/* Workspace-specific brand variations */
.workspace-consultant {
  --brand-primary: #2563eb;
  --brand-accent: #1d4ed8;
}

.workspace-client {
  --brand-primary: #059669;
  --brand-accent: #047857;
}

.workspace-admin {
  --brand-primary: #dc2626;
  --brand-accent: #b91c1c;
}

.workspace-expert {
  --brand-primary: #7c3aed;
  --brand-accent: #6d28d9;
}

.workspace-tool-creator {
  --brand-primary: #ea580c;
  --brand-accent: #c2410c;
}

.workspace-founder {
  --brand-primary: #0891b2;
  --brand-accent: #0e7490;
}
```

## Color Palette

### Primary Colors
- **Primary Blue**: #2563eb - Main brand color
- **Secondary Green**: #059669 - Secondary actions
- **Accent Red**: #dc2626 - Alerts and errors
- **Neutral Gray**: #6b7280 - Text and borders

### Extended Color System
- **Background**: #f9fafb - Main background
- **Surface**: #ffffff - Cards and panels
- **Text Primary**: #111827 - Main text
- **Text Secondary**: #6b7280 - Muted text
- **Border**: #e5e7eb - Dividers and borders

### Workspace-Specific Colors
Each workspace context has its own color variation:
- **Consultant**: Blue (#2563eb)
- **Client**: Green (#059669)
- **Admin**: Red (#dc2626)
- **Expert**: Purple (#7c3aed)
- **Tool Creator**: Orange (#ea580c)
- **Founder**: Cyan (#0891b2)

## Typography System

### Font Families
- **Primary**: Inter - Clean, modern sans-serif
- **Code**: JetBrains Mono - Monospace for code
- **System Fallback**: -apple-system, BlinkMacSystemFont, sans-serif

### Typography Scale
- **Heading 1**: 32px / 2rem - Main page headings
- **Heading 2**: 24px / 1.5rem - Section headings
- **Heading 3**: 20px / 1.25rem - Subsection headings
- **Body**: 16px / 1rem - Standard text
- **Small**: 14px / 0.875rem - Secondary text
- **Caption**: 12px / 0.75rem - Captions and labels

## Logo Usage Guidelines

### Primary Logo Usage
Use `wheel_logo_primary.svg` for:
- Main Storybook branding
- Header and navigation elements
- Primary brand representation

### Logo Variant Selection
- **Compact**: Small spaces, mobile headers
- **Dashboard**: Admin interfaces
- **Stacked**: Vertical layouts
- **Icon Only**: App icons, favicons
- **Monochrome**: Single color contexts

### Logo Implementation
```typescript
// In components
<img 
  src="/logos/wheel_logo_primary.svg" 
  alt="THE WHEEL Design System"
  style={{ height: '32px' }}
/>

// In CSS
.logo {
  background-image: url('/logos/wheel_logo_primary.svg');
  background-size: contain;
  background-repeat: no-repeat;
}
```

## Brand Asset Management

### Asset Organization
```
.storybook/public/logos/
├── wheel_logo_primary.svg          # Primary logo
├── wheel_logo_compact.svg          # Compact version
├── wheel_logo_dashboard.svg        # Dashboard logo
├── wheel_logo_stacked.svg          # Stacked layout
├── wheel_logo_icon_only.svg        # Icon only
├── wheel_logo_monochrome.svg       # Single color
├── wheel_logo_one_color.svg        # One color variant
├── wheel_logo_watermark.svg        # Watermark
├── wheel_logo_app_icon_32.svg      # App icon 32px
├── wheel_logo_app_icon_64.svg      # App icon 64px
├── wheel_logo_app_icon_128.svg     # App icon 128px
├── wheel_logo_social_square.svg    # Social media
├── wheel_logo_vc_portfolio.svg     # VC portfolio
└── wheel_logo_journey_energy.svg   # Journey energy
```

### Asset Optimization
All logo assets are:
- SVG format for scalability
- Optimized for web usage
- Consistent naming convention
- Accessible with proper alt text

## Brand Consistency

### Design Principles
1. **Simplicity**: Clean, uncluttered design
2. **Accessibility**: WCAG 2.1 AA compliance
3. **Consistency**: Uniform visual language
4. **Professionalism**: Enterprise-grade appearance
5. **Scalability**: Works across all device sizes

### Color Usage Rules
- **Primary**: Use for main actions and highlights
- **Secondary**: Use for secondary actions
- **Accent**: Use sparingly for emphasis
- **Neutral**: Use for text and subtle elements

### Typography Rules
- **Hierarchy**: Clear heading structure
- **Readability**: Sufficient line height and spacing
- **Contrast**: Meets accessibility standards
- **Consistency**: Uniform font usage

## Integration with Storybook

### Manager Configuration
The brand is integrated into Storybook's manager interface:
- Custom theme applied automatically
- Brand logo in sidebar
- Consistent color scheme
- Professional typography

### Preview Integration
Brand styles are available in all stories:
- CSS variables for colors
- Typography classes
- Brand-specific components
- Workspace-aware styling

### Documentation Pages
Brand guidelines are documented in:
- Color palette showcase
- Typography system examples
- Logo usage examples
- Brand asset library

## Troubleshooting

### Common Issues

**Logo not displaying**:
- Check file path in public directory
- Verify SVG file integrity
- Ensure proper alt text

**Colors not matching**:
- Verify CSS variable values
- Check color format (hex vs rgb)
- Validate brand guidelines

**Typography issues**:
- Ensure fonts are loaded
- Check font fallbacks
- Verify font weights available

### Best Practices

1. **Always use official brand assets**
2. **Maintain color consistency** across all components
3. **Follow typography hierarchy**
4. **Ensure accessibility compliance**
5. **Test across all viewport sizes**
6. **Validate brand guidelines** before implementation

## Brand Guidelines Compliance

### Accessibility Standards
- **Color Contrast**: Minimum 4.5:1 ratio for text
- **Typography**: Readable font sizes (16px minimum)
- **Logo**: Proper alt text for all images
- **Navigation**: Keyboard accessible

### Performance Standards
- **Logo Loading**: SVG assets load instantly
- **Font Loading**: Web fonts optimized for performance
- **CSS Variables**: Efficient color switching
- **Asset Optimization**: Compressed and optimized files

### Brand Compliance Checklist
- [ ] All logos use official brand assets
- [ ] Color palette matches brand guidelines
- [ ] Typography follows brand standards
- [ ] Accessibility standards are met
- [ ] Performance benchmarks are achieved
- [ ] Cross-browser compatibility verified
- [ ] Responsive design validated
- [ ] Brand consistency maintained

## Advanced Brand Features

### Dynamic Branding
The brand system supports dynamic theming:
- Workspace-specific color variations
- Context-aware logo selection
- Automatic brand adaptation
- Real-time brand switching

### Brand Asset Pipeline
Automated brand asset management:
- SVG optimization
- Asset versioning
- Automatic deployment
- Quality validation

### Brand Monitoring
Continuous brand compliance:
- Automated color validation
- Typography checking
- Logo integrity verification
- Performance monitoring

## Future Brand Enhancements

### Planned Features
- [ ] Dark mode brand variations
- [ ] Animated logo transitions
- [ ] Brand sound design
- [ ] Interactive brand guidelines
- [ ] Brand asset generator
- [ ] Custom brand themes

### Extensibility
The brand system is designed for future expansion:
- Modular brand components
- Plugin architecture
- Custom brand configurations
- Third-party integrations

## Conclusion

The brand integration in THE WHEEL design system provides:
- **Professional appearance** that reflects brand identity
- **Consistent visual language** across all components
- **Accessible design** meeting WCAG standards
- **Scalable architecture** for future growth
- **Performance optimization** for fast loading
- **Comprehensive documentation** for team use

This brand integration establishes THE WHEEL as a sophisticated, professional design system that maintains brand consistency while providing flexibility for different workspace contexts.
