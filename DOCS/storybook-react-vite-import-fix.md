# Storybook React-Vite Import Fix

## Issue Summary
After resolving infrastructure issues with Storybook, components were not rendering due to TypeScript errors:
- `Cannot find module '@storybook/react' or its corresponding type declarations`
- Story files were importing from `@storybook/react` but only `@storybook/react-vite` was installed

## Root Cause
The project uses Storybook 8 with Vite, which requires `@storybook/react-vite` instead of `@storybook/react`. The story files were incorrectly importing from the webpack-based package.

## Solution Decision

### Options Considered

#### Option A: Fix imports to use `@storybook/react-vite` ✅ SELECTED
**Pros:**
- Architecturally correct for Storybook 8 + Vite
- No extra dependencies
- Better performance (Vite-optimized)
- Future-proof
- Clearer intent
- Avoids potential conflicts

**Cons:**
- More work upfront (updating all story files)
- Risk of missing some imports
- Documentation mismatch with online examples

#### Option B: Install `@storybook/react` ❌ REJECTED
**Pros:**
- Quick fix (single npm install)
- No code changes needed
- Familiar pattern
- Lower risk of breaking code

**Cons:**
- Redundant dependency
- Architecturally incorrect
- Potential confusion
- Version management overhead
- Larger bundle size
- Technical debt

### Rationale for Decision
Option A was selected because:
1. **Long-term maintainability** - Following official architecture prevents future issues
2. **Team clarity** - Makes it obvious this is a Vite-based project
3. **Performance** - Uses Vite-specific optimizations
4. **Clean codebase** - No unnecessary dependencies or workarounds

## Implementation Plan

1. **Remove problematic type declaration file**
   - Delete `.storybook/storybook.d.ts`

2. **Update all story imports**
   - Change: `import type { Meta, StoryObj } from '@storybook/react';`
   - To: `import type { Meta, StoryObj } from '@storybook/react-vite';`

3. **Update preview configuration**
   - Fix any imports in `.storybook/preview.ts`

4. **Files to update:**
   - All `*.stories.tsx` files across packages
   - `.storybook/preview.ts`
   - Any other files importing from `@storybook/react`

5. **Verification**
   - Restart Storybook server
   - Verify components render properly
   - Check for any remaining TypeScript errors

## Benefits
- Proper Vite integration
- No unnecessary dependencies
- Clear architectural intent
- Better performance
- Future-proof solution

## Date: July 15, 2025
