/**
 * ESLint rule to prevent hardcoded design values
 * 
 * This rule checks for hardcoded color values, spacing, typography, and other design tokens
 * that should be using the theme system instead.
 */

module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Disallow hardcoded design values',
      category: 'Best Practices',
      recommended: true,
    },
    fixable: 'code',
    schema: [],
    messages: {
      noHardcodedColors: 'Avoid hardcoded color values. Use CSS variables or Tailwind classes instead.',
      noHardcodedSpacing: 'Avoid hardcoded spacing values. Use CSS variables or Tailwind classes instead.',
      noHardcodedTypography: 'Avoid hardcoded typography values. Use CSS variables or Tailwind classes instead.',
      noHardcodedBorders: 'Avoid hardcoded border values. Use CSS variables or Tailwind classes instead.',
      noHardcodedShadows: 'Avoid hardcoded shadow values. Use CSS variables or Tailwind classes instead.',
    },
  },
  create(context) {
    // Regular expressions to match hardcoded values
    const colorRegex = /#[0-9a-f]{3,8}|rgb\(.*?\)|rgba\(.*?\)|hsl\(.*?\)|hsla\(.*?\)/i;
    const spacingRegex = /\b(\d+(\.\d+)?(px|rem|em|vh|vw|%|pt))\b/;
    const fontFamilyRegex = /'[^']*'|"[^"]*"/;
    const fontSizeRegex = /\b(\d+(\.\d+)?(px|rem|em|pt))\b/;
    const borderRegex = /\b(\d+(\.\d+)?(px|rem|em))\s+(solid|dashed|dotted|double)/;
    const shadowRegex = /\b(0|(\d+(\.\d+)?(px|rem|em)))\s+(0|(\d+(\.\d+)?(px|rem|em)))\s+(0|(\d+(\.\d+)?(px|rem|em)))/;
    
    // Allowed values (exceptions)
    const allowedValues = [
      '0', '0px', '0rem', '0em', '0%', '100%', '50%', '25%', '75%',
      '1px', '2px', // Very small values are sometimes acceptable
      'transparent', 'inherit', 'initial', 'unset', 'currentColor',
      'none', 'auto',
    ];
    
    // Check if a value is in the allowed list
    const isAllowed = (value) => {
      return allowedValues.includes(value.trim());
    };
    
    // Check if we're in a CSS-in-JS object (like Tailwind's apply or styled-components)
    const isCSSInJSContext = (node) => {
      let current = node;
      while (current) {
        if (current.type === 'Property' && 
            (current.key.name === 'className' || 
             current.key.name === 'class' || 
             current.key.name === 'tw' || 
             current.key.name === 'css' || 
             current.key.name === 'style')) {
          return true;
        }
        current = current.parent;
      }
      return false;
    };
    
    // Check if we're in a CSS file
    const isCSSFile = () => {
      return context.getFilename().endsWith('.css') || 
             context.getFilename().endsWith('.scss') || 
             context.getFilename().endsWith('.less');
    };
    
    // Check if we're in a theme-related file
    const isThemeFile = () => {
      return context.getFilename().includes('theme') || 
             context.getFilename().includes('styles') || 
             context.getFilename().includes('tokens') ||
             context.getFilename().includes('variables');
    };
    
    return {
      Literal(node) {
        // Skip if we're in a theme-related file
        if (isThemeFile()) return;
        
        // Only check string literals
        if (typeof node.value !== 'string') return;
        
        const value = node.value;
        
        // Skip if the value is allowed
        if (isAllowed(value)) return;
        
        // Check for hardcoded colors
        if (colorRegex.test(value) && !isCSSInJSContext(node)) {
          context.report({
            node,
            messageId: 'noHardcodedColors',
            fix(fixer) {
              // Can't provide automatic fixes without knowing the correct variable
              return null;
            },
          });
        }
        
        // Check for hardcoded spacing
        if (spacingRegex.test(value) && !isCSSInJSContext(node) && !isCSSFile()) {
          context.report({
            node,
            messageId: 'noHardcodedSpacing',
            fix(fixer) {
              // Can't provide automatic fixes without knowing the correct variable
              return null;
            },
          });
        }
        
        // Check for hardcoded typography
        if ((fontFamilyRegex.test(value) || fontSizeRegex.test(value)) && 
            !isCSSInJSContext(node) && !isCSSFile()) {
          context.report({
            node,
            messageId: 'noHardcodedTypography',
            fix(fixer) {
              // Can't provide automatic fixes without knowing the correct variable
              return null;
            },
          });
        }
        
        // Check for hardcoded borders
        if (borderRegex.test(value) && !isCSSInJSContext(node) && !isCSSFile()) {
          context.report({
            node,
            messageId: 'noHardcodedBorders',
            fix(fixer) {
              // Can't provide automatic fixes without knowing the correct variable
              return null;
            },
          });
        }
        
        // Check for hardcoded shadows
        if (shadowRegex.test(value) && !isCSSInJSContext(node) && !isCSSFile()) {
          context.report({
            node,
            messageId: 'noHardcodedShadows',
            fix(fixer) {
              // Can't provide automatic fixes without knowing the correct variable
              return null;
            },
          });
        }
      },
      
      // Check for inline styles with hardcoded values
      JSXAttribute(node) {
        // Skip if we're in a theme-related file
        if (isThemeFile()) return;
        
        // Only check style attributes
        if (node.name.name !== 'style') return;
        
        // Only check object expressions
        if (node.value.expression.type !== 'ObjectExpression') return;
        
        node.value.expression.properties.forEach(prop => {
          if (prop.type !== 'Property' || typeof prop.value.value !== 'string') return;
          
          const value = prop.value.value;
          
          // Skip if the value is allowed
          if (isAllowed(value)) return;
          
          // Check for hardcoded colors
          if (colorRegex.test(value)) {
            context.report({
              node: prop.value,
              messageId: 'noHardcodedColors',
            });
          }
          
          // Check for hardcoded spacing
          if (spacingRegex.test(value)) {
            context.report({
              node: prop.value,
              messageId: 'noHardcodedSpacing',
            });
          }
          
          // Check for hardcoded typography
          if (fontFamilyRegex.test(value) || fontSizeRegex.test(value)) {
            context.report({
              node: prop.value,
              messageId: 'noHardcodedTypography',
            });
          }
          
          // Check for hardcoded borders
          if (borderRegex.test(value)) {
            context.report({
              node: prop.value,
              messageId: 'noHardcodedBorders',
            });
          }
          
          // Check for hardcoded shadows
          if (shadowRegex.test(value)) {
            context.report({
              node: prop.value,
              messageId: 'noHardcodedShadows',
            });
          }
        });
      },
    };
  },
};
