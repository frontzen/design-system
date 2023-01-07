import { loadingButtonClasses } from '@mui/lab';
import '@mui/lab/themeAugmentation';
import { alpha, createTheme as createMuiTheme, Theme, ThemeOptions } from '@mui/material';
import { buttonBoxShadowAlpha, buttonDisableAlpha } from '../button/constants';
import { muiCheckbox } from '../checkbox';
import { background, common, coolGrey, defaultPalette } from '../colors';
import { DotLoader } from '../DotLoader';
import { muiRadio } from '../radio';
import { muiSwitch } from '../switch';
import { getColorFromThemeWithColorProps } from '../utils';

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
  interface FabPropsVariantOverrides {
    outlined: true;
    text: true;
  }
}
declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
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
    fontFamily: 'IRANYekanX, roboto',
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    allVariants: {
      fontFeatureSettings: '"ss02"',
    },
    h1: {
      fontWeight: 800,
      fontSize: '2.25rem', // 32px
      lineHeight: 1.5,
    },
    h2: {
      fontWeight: 800,
      fontSize: '1.5rem', // 24px
      lineHeight: 1.5,
    },
    h3: {
      fontWeight: 400,
      fontSize: '1.5rem', // 24px
      lineHeight: 1.5,
    },
    h4: {
      fontWeight: 700,
      fontSize: '1.125rem', // 18px
      lineHeight: 1.5,
    },
    h5: {
      fontWeight: 700,
      fontSize: '1rem', // 16px
      lineHeight: 1.5,
    },
    button: {
      fontWeight: 500,
      fontSize: '1rem', // 16px
      lineHeight: 1.25,
    },
    body1: {
      fontWeight: 400,
      fontSize: '1rem', // 16px
      lineHeight: 1.75,
    },
    body2: {
      fontWeight: 400,
      fontSize: '0.875rem', // 14px
      lineHeight: 1.75,
    },
    subtitle1: {
      fontWeight: 500,
      fontSize: '0.625rem', // 10px
      lineHeight: 1.5,
    },
    caption: {
      fontWeight: 400,
      fontSize: '0.75rem', // 12px
      lineHeight: 1.5,
    },
    // Disable h6, subtitle2, caption and overline variant
    h6: undefined,
    subtitle2: undefined,
    overline: undefined,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: 'IRANYekanX, roboto',
        },
      },
    },
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
          '&&:hover:not(:active)': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: ({ theme, ownerState }) => ({
          '&:active': {
            boxShadow: `0px 0px 10px ${alpha(
              getColorFromThemeWithColorProps(theme, ownerState),
              buttonBoxShadowAlpha,
            )}`,
            transition: theme.transitions.create(['background-color', 'box-shadow', 'border-color', 'color'], {
              duration: theme.transitions.duration.short,
            }),
          },
          '&:hover': {
            background: coolGrey[50],
          },
          '&.Mui-disabled': {
            color: alpha(getColorFromThemeWithColorProps(theme, ownerState), buttonDisableAlpha),
          },
          '&.MuiIconButton-sizeSmall': {
            padding: theme.spacing(0.5), //4
            height: 28,
            width: 28,
            '&& >*:nth-of-type(1)': {
              fontSize: theme.typography.button.fontSize, //16px
            },
          },
          '&.MuiIconButton-sizeMedium': {
            padding: theme.spacing(1), //8
            height: 36,
            width: 36,
            '&& >*:nth-of-type(1)': {
              fontSize: `calc(${theme.typography.button.fontSize} + 0.25rem)`, //20px
            },
          },
          '&.MuiIconButton-sizeLarge': {
            padding: theme.spacing(2), //16
            height: 52,
            width: 52,
            '&& >*:nth-of-type(1)': {
              fontSize: `calc(${theme.typography.button.fontSize} + 0.5rem)`, // 24px
            },
          },
        }),
      },
    },
    MuiFab: {
      styleOverrides: {
        root: ({ theme, ownerState }) => ({
          transition: theme.transitions.create(['background-color', 'box-shadow', 'border-color', 'color'], {
            duration: theme.transitions.duration.short,
          }),
          '&:active': {
            boxShadow: `0px 0px 10px ${alpha(
              getColorFromThemeWithColorProps(theme, ownerState),
              buttonBoxShadowAlpha,
            )}`,
          },
          // '&.MuiFab-text' : {},
          '&.MuiFab-outlined': {
            border:
              ownerState.size === 'small'
                ? `1px solid ${getColorFromThemeWithColorProps(theme, ownerState)}`
                : `2px solid ${getColorFromThemeWithColorProps(theme, ownerState)}`,
            background: theme.palette.common.white,
            color: getColorFromThemeWithColorProps(theme, ownerState),
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
              background: theme.palette.common.white,
            },
          },
          minWidth: 'unset',
          minHeight: 'unset',
          '&.Mui-disabled': {
            backgroundColor: alpha(getColorFromThemeWithColorProps(theme, ownerState), buttonDisableAlpha),
            color: getColorFromThemeWithColorProps(theme, ownerState, 'contrastText'),
          },
          '&.MuiFab-sizeSmall': {
            padding: theme.spacing(0.5), //4
            height: 28,
            width: 28,
            '&& >*:nth-of-type(1)': {
              fontSize: theme.typography.button.fontSize, //16px
            },
          },
          '&.MuiFab-sizeMedium': {
            padding: theme.spacing(1), //8
            height: 36,
            width: 36,
            '&& >*:nth-of-type(1)': {
              fontSize: `calc(${theme.typography.button.fontSize} + 0.25rem)`, //20px
            },
          },
          '&.MuiFab-sizeLarge': {
            padding: theme.spacing(2), //16
            height: 52,
            width: 52,
            '&& >*:nth-of-type(1)': {
              fontSize: `calc(${theme.typography.button.fontSize} + 0.5rem)`, // 24px
            },
          },
        }),
      },
      defaultProps: {
        color: 'primary',
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
          '&.MuiButton-text': {
            '&:hover': {
              background: coolGrey[50],
            },
            '&.Mui-disabled': {
              color: alpha(getColorFromThemeWithColorProps(theme, ownerState), buttonDisableAlpha),
            },
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
            padding:
              ownerState.endIcon || ownerState.startIcon
                ? ownerState.variant !== 'outlined'
                  ? `calc(${theme.spacing(2)} - 2px) ${theme.spacing(3.5)}` /*14 28*/
                  : `calc(${theme.spacing(2)} - 4px) calc(${theme.spacing(3.5)} - 2px)` //12 26
                : ownerState.variant !== 'outlined'
                ? theme.spacing(2, 3.5) /*16 28*/
                : `calc(${theme.spacing(2)} - 2px) calc(${theme.spacing(3.5)} - 2px)`, //14 26

            fontSize: `calc(${theme.typography.button.fontSize} + 0.5rem)`, // 24px
            fontWeight: theme.typography.fontWeightBold,
            '.MuiLoadingButton-loadingIndicator': {
              '& >*:nth-of-type(1)': {
                fontSize: `calc(${theme.typography.button.fontSize} + 0.5rem)`, // 24px
              },
            },
            '.MuiButton-startIcon': {
              marginRight: theme.spacing(3),
              '& >*:nth-of-type(1)': {
                fontSize: `calc(${theme.typography.button.fontSize} + 0.5rem)`, // 24px
              },
            },
            '.MuiButton-endIcon': {
              marginLeft: theme.spacing(3),
              '& >*:nth-of-type(1)': {
                fontSize: `calc(${theme.typography.button.fontSize} + 0.5rem)`, // 24px
              },
            },
          },
          '&.MuiButton-sizeMedium': {
            padding:
              ownerState.variant !== 'outlined'
                ? theme.spacing(1, 3) /*8 24 */
                : `calc(${theme.spacing(1)} - 2px) calc(${theme.spacing(3)} - 2px)`, //6 22
            '.MuiLoadingButton-loadingIndicator': {
              '& >*:nth-of-type(1)': {
                fontSize: `calc(${theme.typography.button.fontSize} + 0.25rem)`, // 20px
              },
            },
            fontSize: theme.typography.button.fontSize, //16
            '.MuiButton-startIcon': {
              marginRight: theme.spacing(2),
              '& >*:nth-of-type(1)': {
                fontSize: `calc(${theme.typography.button.fontSize} + 0.25rem)`, // 20px
              },
            },
            '.MuiButton-endIcon': {
              marginLeft: theme.spacing(2),
              '& >*:nth-of-type(1)': {
                fontSize: `calc(${theme.typography.button.fontSize} + 0.25rem )`, // 20px
              },
            },
          },
          '&.MuiButton-sizeSmall': {
            padding:
              ownerState.variant !== 'outlined'
                ? theme.spacing(0.5, 2) /*4 16 */
                : `calc(${theme.spacing(0.5)} - 1px) calc(${theme.spacing(2)} - 1px)`, // 3 15
            fontSize: `calc(${theme.typography.button.fontSize} - 0.25rem)`, //12px
            '.MuiLoadingButton-loadingIndicator': {
              '& >*:nth-of-type(1)': {
                fontSize: theme.typography.button.fontSize, // 16px
              },
            },
            '.MuiButton-startIcon': {
              marginRight: theme.spacing(2),
              '& >*:nth-of-type(1)': {
                fontSize: theme.typography.button.fontSize, // 16px
              },
            },
            '.MuiButton-endIcon': {
              marginLeft: theme.spacing(2),
              '& >*:nth-of-type(1)': {
                fontSize: theme.typography.button.fontSize, // 16px
              },
            },
          },
        }),
      },
    },
    MuiLoadingButton: {
      styleOverrides: {
        root: ({ theme, ownerState }) => ({
          ...(ownerState.loadingPosition === 'center' && {
            //these classes are used to override default material behavior
            [`&&.${loadingButtonClasses.loading}`]: {
              // it's for hiding text
              color: 'transparent',
            },
            [`.${loadingButtonClasses.loadingIndicator}`]: {
              // it's for setting loadingIndicator color
              color: alpha(
                getColorFromThemeWithColorProps(
                  theme,
                  ownerState,
                  ownerState.variant !== 'contained' ? 'main' : 'contrastText',
                ),
                ownerState.variant !== 'contained' ? buttonDisableAlpha : 1,
              ),
            },
          }),
        }),
      },
      defaultProps: {
        loadingIndicator: <DotLoader />,
        loadingPosition: 'center',
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        fontSizeSmall: {
          fontSize: '1rem',
        },
        fontSizeMedium: {
          fontSize: '1.25rem',
        },
        fontSizeLarge: {
          fontSize: '1.5rem',
        },
      },
    },
    MuiCheckbox: muiCheckbox,
    MuiRadio: muiRadio,
    MuiSwitch: muiSwitch,
  },
};

export function createTheme(options: ThemeOptions = {}, ...args: object[]): Theme {
  return createMuiTheme(defaultOptions, options, ...args);
}
