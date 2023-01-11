import { alpha, Components, outlinedInputClasses, svgIconClasses, Theme } from '@mui/material';
import { getColorFromThemeWithColorProps } from '../utils';
import { TextFieldProps } from './TextField';

declare module '@mui/material/InputBase' {
  interface InputBaseProps {
    warning?: boolean;
    radius?: 4 | 8 | 16 | 24;
  }

  interface InputBasePropsSizeOverrides {
    large: true;
  }
}

const textFieldInputSpacing: Record<NonNullable<TextFieldProps['size']>, number> = {
  small: 0.5,
  medium: 1,
  large: 1.5,
};

export const muiOutlinedInput: Components<Omit<Theme, 'components'>>['MuiOutlinedInput'] = {
  defaultProps: {
    size: 'medium',
  },
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      padding: 0, // for multiline
      borderRadius: ownerState.radius || 4,

      ...(ownerState.startAdornment && {
        paddingLeft: ownerState.radius === 24 ? theme.spacing(2) : theme.spacing(1),
      }),

      ...(ownerState.endAdornment && {
        paddingRight: ownerState.radius === 24 ? theme.spacing(2) : theme.spacing(1),
      }),

      [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
        ...(ownerState.warning
          ? {
              borderColor: theme.palette.warning.main,
            }
          : {
              borderColor: getColorFromThemeWithColorProps(theme, ownerState),
            }),
      },

      [`&.${outlinedInputClasses.focused}`]: {
        [`&.${outlinedInputClasses.error}`]: {
          [`& .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: theme.palette.error.main,
            boxShadow: `0 0 8px 0 ${alpha(theme.palette.error.main, 0.3)}`,
          },
        },

        [`& .${outlinedInputClasses.notchedOutline}`]: {
          borderWidth: '1px',

          ...(ownerState.warning
            ? {
                borderColor: theme.palette.warning.main,
                boxShadow: `0 0 8px 0 ${alpha(theme.palette.warning.main, 0.3)}`,
              }
            : {
                boxShadow: `0 0 8px 0 ${alpha(getColorFromThemeWithColorProps(theme, ownerState), 0.3)}`,
              }),
        },
      },

      ...(ownerState.warning && {
        background: theme.palette.warning[50],

        [`& .${outlinedInputClasses.notchedOutline}`]: {
          borderColor: theme.palette.warning.main,
        },
      }),

      [`&.${outlinedInputClasses.error}`]: {
        background: theme.palette.error[50],

        [`& .${outlinedInputClasses.notchedOutline}`]: {
          borderColor: theme.palette.error.main,
        },
      },

      [`&.${outlinedInputClasses.disabled}`]: {
        background: theme.palette.grey[50],

        [`& .${outlinedInputClasses.notchedOutline}`]: {
          borderWidth: '1px',
          borderColor: theme.palette.grey[200],
        },
      },
    }),

    notchedOutline: ({ theme }) => ({
      borderWidth: '1px',
      borderColor: theme.palette.warmGrey[300],
    }),

    adornedStart: ({ theme, ownerState }) => ({
      [`& .${svgIconClasses.root}`]: {
        ...(ownerState.warning && {
          color: theme.palette.warning.dark,
        }),

        ...(ownerState.error && {
          color: theme.palette.error.main,
        }),
      },
    }),

    adornedEnd: ({ theme, ownerState }) => ({
      [`& .${svgIconClasses.root}`]: {
        ...(ownerState.warning && {
          color: theme.palette.warning.dark,
        }),

        ...(ownerState.error && {
          color: theme.palette.error.main,
        }),
      },
    }),

    input: ({ theme, ownerState }) => ({
      height: '1.5rem',
      fontSize: ownerState.size === 'small' ? '0.75rem' : '0.875rem',
      padding: `${theme.spacing(textFieldInputSpacing[ownerState.size || 'medium'])} ${theme.spacing(1)} `,

      ...(ownerState.radius === 24 && {
        ...(!ownerState.startAdornment && { paddingLeft: theme.spacing(2) }),
        ...(!ownerState.endAdornment && { paddingRight: theme.spacing(2) }),
      }),

      '&::placeholder': {
        fontSize: ownerState.size === 'small' ? '0.75rem' : '0.875rem',
        color: theme.palette.warmGrey[ownerState.disabled ? 200 : 300],
      },
    }),
  },
};
