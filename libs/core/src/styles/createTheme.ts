import { alpha, createTheme as createMuiTheme, Theme, ThemeOptions } from '@mui/material';
import { background, common, defaultPalette } from '../colors';
import { buttonBoxShadowAlpha, buttonDisableAlpha } from './../button/constants';
import { getColorFromThemeWithColorProps } from './../utils';

/**
 * Add more colors to text palette which are defined by Frontzen Design System
 */
declare module '@mui/material/styles' {
  interface TypeText {
    light: string;
    placeholder: string;
    link: string;
  }
  interface PaletteOptions {
    disabled?: string;
  }
  interface Palette {
    disabled?: string;
  }
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

/**
 * Update the Typography's variant prop options
 * and disable the variants which are not used in Frontzen Design System
 */
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h6: false;
    subtitle2: false;
    caption: false;
    overline: false;
  }
}
declare module '@mui/material/Fab' {
  interface FabPropsColorOverrides {
    default: false;
  }
}

const defaultOptions: ThemeOptions = {
  palette: {
    primary: defaultPalette.primary,
    secondary: defaultPalette.secondary,
    error: defaultPalette.error,
    success: defaultPalette.success,
    warning: defaultPalette.warning,
    // The Frontzen Design System dose not have the info color and it should be set on each project separately.
    // info: { main: '' },
    disabled: defaultPalette.disable,
    common: { ...common }, // prevent mutable object.
    background: {
      paper: background.grey,
      default: background.white,
    },
    text: { ...defaultPalette.text }, // prevent mutable object.
  },

  typography: {
    fontFamily: 'iranyekan',
    fontSize: 16,
    fontWeightLight: 100,
    fontWeightRegular: 200,
    fontWeightMedium: 400,
    fontWeightBold: 600,
    h1: {
      fontWeight: 600,
      fontSize: '2.25rem', // 32px
      lineHeight: 1.5,
    },
    h2: {
      fontWeight: 600,
      fontSize: '1.5rem', // 24px
      lineHeight: 1.5,
    },
    h3: {
      fontWeight: 200,
      fontSize: '1.5rem', // 24px
      lineHeight: 1.5,
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.125rem', // 18px
      lineHeight: 1.5,
    },
    h5: {
      fontWeight: 600,
      fontSize: '1rem', // 16px
      lineHeight: 1.5,
    },
    button: {
      fontWeight: 400,
      fontSize: '1rem', // 16px
      lineHeight: 1.5,
    },
    body1: {
      fontWeight: 200,
      fontSize: '1rem', // 16px
      lineHeight: 1.75,
    },
    body2: {
      fontWeight: 200,
      fontSize: '0.875rem', // 14px
      lineHeight: 1.75,
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: '0.625rem', // 10px
      lineHeight: 1.5,
    },
    // Disable h6, subtitle2, caption and overline variant
    h6: undefined,
    subtitle2: undefined,
    caption: undefined,
    overline: undefined,
  },
  components: {
    MuiLink: {
      defaultProps: {
        variant: 'body2',
        color: defaultPalette.text.link,
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          '&': {
            boxShadow: 'none',
            borderRadius: 100000,
          },
          '&&:hover:not(&:active)': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: ({ theme, ownerState }) => ({
          '&:active': {
            boxShadow: `0px 0px 10px ${alpha(
              getColorFromThemeWithColorProps(theme, ownerState),
              buttonBoxShadowAlpha,
            )}`,
          },
          '&.Mui-disabled': {
            backgroundColor: alpha(getColorFromThemeWithColorProps(theme, ownerState), buttonDisableAlpha),
            color: getColorFromThemeWithColorProps(theme, ownerState, 'contrastText'),
          },
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ theme, ownerState }) => ({
          '&:active': {
            boxShadow: `0px 0px 10px ${alpha(
              getColorFromThemeWithColorProps(theme, ownerState),
              buttonBoxShadowAlpha,
            )}`,
          },

          '&.MuiButton-outlined': {
            border:
              ownerState.size === 'small'
                ? `1px solid ${getColorFromThemeWithColorProps(theme, ownerState)}`
                : `2px solid ${getColorFromThemeWithColorProps(theme, ownerState)}`,
            '&:hover': {
              border:
                ownerState.size === 'small'
                  ? `1px solid ${getColorFromThemeWithColorProps(theme, ownerState, 'dark')}`
                  : `2px solid ${getColorFromThemeWithColorProps(theme, ownerState, 'dark')}`,
              color: getColorFromThemeWithColorProps(theme, ownerState, 'dark'),
            },
            '&.Mui-disabled': {
              borderColor: alpha(getColorFromThemeWithColorProps(theme, ownerState), buttonDisableAlpha),
              color: alpha(getColorFromThemeWithColorProps(theme, ownerState), buttonDisableAlpha),
            },
          },
          '&.MuiButton-contained': {
            '&.Mui-disabled': {
              backgroundColor: alpha(getColorFromThemeWithColorProps(theme, ownerState), buttonDisableAlpha),
              color: getColorFromThemeWithColorProps(theme, ownerState, 'contrastText'),
            },
          },

          '&.MuiButton-sizeLarge': {
            padding: theme.spacing(2, 3.5), //16 28
            fontSize: `calc(${theme.typography.button.fontSize} + 0.5rem)`, // 24px
            fontWeight: theme.typography.fontWeightBold,
            '.MuiButton-startIcon.MuiButton-iconSizeLarge': {
              marginRight: theme.spacing(3),
            },
            '.MuiButton-endIcon.MuiButton-iconSizeLarge': {
              marginLeft: theme.spacing(3),
            },
          },
          '&.MuiButton-sizeMedium': {
            padding: theme.spacing(1, 3), //8 24
            fontSize: theme.typography.button.fontSize, //16
            '.MuiButton-startIcon.MuiButton-iconSizeMedium': {
              marginRight: theme.spacing(2),
            },
            '.MuiButton-endIcon.MuiButton-iconSizeMedium': {
              marginLeft: theme.spacing(2),
            },
          },
          '&.MuiButton-sizeSmall': {
            padding: theme.spacing(0.5, 2), //4 16
            fontSize: `calc(${theme.typography.button.fontSize} - 0.25rem)`, //12px
            '.MuiButton-startIcon.MuiButton-iconSizeMedium': {
              marginRight: theme.spacing(2),
            },
            '.MuiButton-endIcon.MuiButton-iconSizeMedium': {
              marginLeft: theme.spacing(2),
            },
          },
        }),
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: ({ theme }) => ({
          //icon size should change on fontsize prop
          '&.MuiSvgIcon-root.MuiSvgIcon-fontSizeLarge': {
            fontSize: '1.5rem', //24px
            fontWeight: theme.typography.fontWeightBold,
          },
          '&.MuiSvgIcon-root.MuiSvgIcon-fontSizeSmall': {
            fontSize: '0.75rem', //12px
          },
          '&.MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium': {
            fontSize: '1rem', // 16px
          },
        }),
      },
    },
  },
};

export function createTheme(options: ThemeOptions = {}, ...args: object[]): Theme {
  return createMuiTheme(defaultOptions, options, ...args);
}
