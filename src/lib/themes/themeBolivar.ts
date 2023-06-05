import { createTheme} from "@nextui-org/react";

// @ts-ignore
export const themeBolivar = createTheme({
  type: "dark", // it could be "light" or "dark"
  theme: {
    colors: {
      white: '#7ede7e',
      black: '#000000',
      background: "$white",
      backgroundAlpha: "rgba(255, 255, 255, 0.8)", // used for semi-transparent backgrounds like the navbar
      foreground: "$black",
      backgroundContrast: "$white",
      blue50: '#EDF5FF',
      blue900: '#00254D',
      primaryLight: '$blue200',
      primaryLightHover: '$blue300', // commonly used on hover state
      primaryLightActive: '$blue400', // commonly used on pressed state
      primaryLightContrast: '$blue600', // commonly used for text inside the component
      primary: '$blue600',
      primaryBorder: '$blue500',
      primaryBorderHover: '$blue600',
      primarySolidHover: '$blue700',
      primarySolidContrast: '$white', // commonly used for text inside the component
      primaryShadow: '$blue500'
    },
    fontSizes: {
      xs: '0.75rem', /* 12px */
      sm: '0.875rem', /* 14px */
      base: '1rem', /* 16px */
      md: '1rem', /* 16px */
      lg: '1.125rem', /* 18px */
      xl: '1.25rem', /* 20px */
      '2xl': '1.5rem', /* 24px */
      '3xl': '1.875rem', /* 30px */
      '4xl': '2.25rem', /* 36px */
      '5xl': '3rem', /* 48px */
      '6xl': '3.75rem', /* 60px */
      '7xl': '4.5rem', /* 72px */
      '8xl': '6rem', /* 96px */
      '9xl': '8rem', /* 128px */
    },
    fontWeights: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900
    },
    lineHeights: {
      xs: 1, /* 16px */
      sm: 1.25, /* 20px */
      base: 1.5, /* 24px */
      md: 1.5, /* 24px */
      lg: 1.75, /* 28px */
      xl: 1.75, /* 28px */
      '2xl': 2, /* 32px */
      '3xl': 2.25, /* 36px */
      '4xl': 2.5, /* 40px */
      '5xl': 1, /* 16px */
      '6xl': 1, /* 16px */
      '7xl': 1, /* 16px */
      '8xl': 1, /* 16px */
      '9xl': 1 /* 16px */
    },
    letterSpacings: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em'
    },
    radii: {
      xs: '7px',
      sm: '9px',
      md: '12px',
      base: '14px',
      lg: '14px', // preferred value by NextUI components
      xl: '18px',
      '2xl': '24px',
      '3xl': '32px',
      squared: '33%',
      rounded: '50%',
      pill: '9999px',
    },
    borderWeights: {
      light: '1px',
      normal: '2px',
      bold: '3px',
      extrabold: '4px',
      black: '5px'
    },
    breakpoints: {
      xs: '650px',
      sm: '960px',
      md: '1280px',
      lg: '1400px',
      xl: '1920px'
    },
    zIndices: {
      1: '100',
      2: '200',
      3: '300',
      4: '400',
      5: '500',
      10: '1000',
      max: '9999'
    },
    shadows: {
      xs: '0 2px 8px 1px rgb(104 112 118 / 0.07), 0 1px 1px -1px rgb(104 112 118 / 0.04)',
      sm: '0 2px 8px 2px rgb(104 112 118 / 0.07), 0 2px 4px -1px rgb(104 112 118 / 0.04)',
      md: '0 12px 20px 6px rgb(104 112 118 / 0.08)',
      lg: '0 12px 34px 6px rgb(104 112 118 / 0.18)',
      xl: '0 25px 65px 0px rgb(104 112 118 / 0.35)'
    },
    // to use along with css dropShadow utility
    dropShadows: {
      xs: 'drop-shadow(0 2px 4px rgb(104 112 118 / 0.07)) drop-shadow(0 1px 1px rgb(104 112 118 / 0.04))',
      sm: 'drop-shadow(0 2px 8px rgb(104 112 118 / 0.07)) drop-shadow(0 2px 4px rgb(104 112 118 / 0.04))',
      md: 'drop-shadow(0 4px 12px rgb(104 112 118 / 0.08)) drop-shadow(0 20px 8px rgb(104 112 118 / 0.04))',
      lg: 'drop-shadow(0 12px 24px rgb(104 112 118 / 0.15)) drop-shadow(0 12px 14px rgb(104 112 118 / 0.1))',
      xl: 'drop-shadow(0 25px 34px rgb(104 112 118 / 0.35))'
    }
  }
})
