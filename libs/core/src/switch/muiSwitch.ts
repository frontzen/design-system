import { Components, SwitchProps, Theme } from '@mui/material';
import { getColorFromThemeWithColorProps } from '../utils';

declare module '@mui/material/Switch' {
  interface SwitchProps {
    variant?: 'outline' | 'contain';
  }
  interface SwitchPropsColorOverrides {
    default: false;
  }
  interface SwitchPropsSizeOverrides {
    large: true;
  }
}

export const muiSwitch: Components<Omit<Theme, 'components'>>['MuiSwitch'] = {
  defaultProps: {
    disableRipple: true,
    variant: 'outline',
  },
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      padding: 0,
      '.MuiButtonBase-root.MuiSwitch-switchBase': {
        padding: 0,
        '&.Mui-disabled': {
          '.MuiSwitch-thumb': {
            backgroundColor: theme.palette.coolGrey[100],
            boxShadow: 'none',
          },
          '+.MuiSwitch-track': {
            borderColor: theme.palette.coolGrey[100],
            backgroundColor: theme.palette.coolGrey[50],
          },
        },
      },
      'span[variant="contain"]': {
        '.MuiSwitch-thumb': {
          backgroundImage: getClosedBackgroundImage(theme.palette.common.white, ownerState.size),
        },
        '&.Mui-checked': {
          '.MuiSwitch-thumb': {
            backgroundColor: theme.palette.common.white,
            backgroundImage: getCheckedBackgroundImage(
              ownerState.disabled ? theme.palette.common.white : getColorFromThemeWithColorProps(theme, ownerState),
              ownerState.size,
            ),
          },
          '+.MuiSwitch-track': {
            backgroundColor: getColorFromThemeWithColorProps(theme, ownerState),
          },
        },
      },
      ...(!ownerState.disabled && {
        '&:hover': {
          '.MuiButtonBase-root.MuiSwitch-switchBase': {
            ':not(.Mui-checked) ': {
              '+.MuiSwitch-track': {
                borderColor: theme.palette.grey[700],
              },
              '.MuiSwitch-thumb': {
                backgroundColor: theme.palette.grey[700],
              },
            },
            '&.Mui-checked': {
              '+.MuiSwitch-track': {
                borderColor: getColorFromThemeWithColorProps(theme, ownerState, 'dark'),
              },
              '&[variant="outline"] .MuiSwitch-thumb': {
                backgroundColor: getColorFromThemeWithColorProps(theme, ownerState, 'dark'),
              },
              '&[variant="contain"]': {
                '+.MuiSwitch-track': {
                  backgroundColor: getColorFromThemeWithColorProps(theme, ownerState, 'dark'),
                },
                '.MuiSwitch-thumb': {
                  backgroundImage: getCheckedBackgroundImage(
                    getColorFromThemeWithColorProps(theme, ownerState, 'dark'),
                    ownerState.size,
                  ),
                },
              },
            },
          },
        },
      }),
    }),
    switchBase: {
      top: 4,
      left: '4px /* @noflip */',
      right: 'unset /* @noflip */',
    },
    input: {
      width: '600%',
      left: '-250%',
      height: '200%',
      top: '-50%',
    },
    thumb: ({ theme, ownerState }) => ({
      backgroundColor: theme.palette.grey[500],
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      boxShadow: 'none',
      '.Mui-checked &': {
        backgroundColor: getColorFromThemeWithColorProps(theme, ownerState),
      },
    }),
    track: ({ theme, ownerState }) => ({
      '.MuiButtonBase-root.MuiSwitch-switchBase+&': {
        backgroundColor: theme.palette.common.white,
        border: `1.5px solid ${theme.palette.grey[500]}`,
        opacity: 1,
        borderRadius: 100000,
      },
      '.MuiButtonBase-root.MuiSwitch-switchBase.Mui-checked+&': {
        borderColor: getColorFromThemeWithColorProps(theme, ownerState),
      },
    }),
    sizeSmall: {
      width: 32,
      height: 16,
      '.MuiSwitch-thumb': {
        width: 8,
        height: 8,
      },
      '.MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(16px) /* @noflip */',
      },
    },
    sizeMedium: {
      width: 40,
      height: 20,
      '.MuiSwitch-thumb': {
        width: 12,
        height: 12,
      },
      '.MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(20px) /* @noflip */',
      },
    },
  },
  variants: [
    {
      props: { size: 'large' },
      style: {
        width: 48,
        height: 24,
        '.MuiSwitch-thumb': {
          width: 16,
          height: 16,
        },
        '.MuiSwitch-switchBase.Mui-checked': {
          transform: 'translateX(24px) /* @noflip */',
        },
      },
    },
  ],
};

const getClosedBackgroundImage = (color: string, size: NonNullable<SwitchProps['size']> = 'medium') => {
  const sizes: Record<NonNullable<SwitchProps['size']>, number> = {
    small: 10,
    medium: 16,
    large: 20,
  };
  return `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="${sizes[size]}" width="${
    sizes[size]
  }" viewBox="0 0 24 24"><path fill="none" stroke="${encodeURIComponent(
    color,
  )}" d="m7.757 16.243 8.486-8.486M16.243 16.243 7.757 7.757" stroke-width="1.5px" stroke-linecap="round" stroke-linejoin="round"/></svg>')`;
};

const getCheckedBackgroundImage = (color: string, size: NonNullable<SwitchProps['size']> = 'medium') => {
  const sizes: Record<NonNullable<SwitchProps['size']>, number> = {
    small: 6,
    medium: 8,
    large: 12,
  };
  return `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="${sizes[size]}" width="${
    sizes[size]
  }" viewBox="0 0 24 24"><path fill="none" stroke="${encodeURIComponent(
    color,
  )}" d="m4 12.327 5.327 5.327L20 7" stroke-width="3px" stroke-linecap="round" stroke-linejoin="round"/></svg>')`;
};
