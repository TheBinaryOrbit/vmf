/**
 * CENTRAL COLOR THEME CONFIGURATION
 * ===================================
 * This file contains all color definitions for the entire application.
 * Import and use these colors for consistency across all components.
 */

export const colors = {
  // Primary Colors - Main brand color (dark red)
  primary: '#910606',
  primaryDark: '#7a0505',
  primaryDarker: '#740404',
  primaryLight: '#ff6b6b',

  // Secondary Colors - Accent color (dark blue)
  secondary: '#164972',
  secondaryLight: '#1e5a96',

  // Neutral/Background Colors
  backgroundLight: '#f8fafc',
  backgroundWhite: '#ffffff',
  backgroundDark: '#001d3d',

  // Text Colors
  textPrimary: '#001d3d',
  textSecondary: '#23293a',
  textLight: '#575757',
  textMuted: '#7a7a7a',

  // Semantic Colors
  red50: '#fee2e2',
  red100: '#fecaca',
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',

  // Border & Shadow Colors
  borderLight: '#e5e7eb',
  borderDark: '#d1d5db',
};

/**
 * TAILWIND COMPATIBLE COLOR MAP
 * Use these in Tailwind classes like: bg-primary, text-primary, etc.
 */
export const tailwindColors = {
  primary: {
    DEFAULT: colors.primary,
    dark: colors.primaryDark,
    darker: colors.primaryDarker,
    light: colors.primaryLight,
  },
  secondary: {
    DEFAULT: colors.secondary,
    light: colors.secondaryLight,
  },
  background: {
    light: colors.backgroundLight,
    white: colors.backgroundWhite,
    dark: colors.backgroundDark,
  },
  text: {
    primary: colors.textPrimary,
    secondary: colors.textSecondary,
    light: colors.textLight,
    muted: colors.textMuted,
  },
};

export default colors;
