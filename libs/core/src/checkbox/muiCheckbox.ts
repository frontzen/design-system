import { Components, Theme } from '@mui/material';
import { getColorFromThemeWithColorProps } from '../utils';

declare module '@mui/material/Checkbox' {
  interface CheckboxProps {
    radiusVariant?: 'normal' | 'curve' | 'circle';
  }
  interface CheckboxPropsSizeOverrides {
    large: true;
  }
  interface CheckboxPropsColorOverrides {
    default: false;
  }
}

export const muiCheckbox: Components<Omit<Theme, 'components'>>['MuiCheckbox'] = {
  defaultProps: {
    disableRipple: true,
  },
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      padding: 0,
      '& .MuiSvgIcon-root path:nth-of-type(2)': {
        fill: theme.palette.common.white,
      },
      '&:not(.Mui-checked, .MuiCheckbox-indeterminate)': {
        '& path:nth-of-type(1)': {
          fill: theme.palette.common.white,
        },
        '& path:nth-of-type(2)': {
          fill: theme.palette.coolGrey[300],
        },
        '&.Mui-disabled .MuiSvgIcon-root': {
          '& path:nth-of-type(1)': {
            fill: theme.palette.coolGrey[50],
          },
          '& path:nth-of-type(2)': {
            fill: theme.palette.coolGrey[100],
          },
        },
      },
      '&.Mui-disabled': {
        '& .MuiSvgIcon-root': {
          '& path:nth-of-type(1)': {
            fill: theme.palette.coolGrey[100],
          },
          '& path:nth-of-type(2)': {
            fill: theme.palette.coolGrey[300],
          },
        },
      },
      '&:hover': {
        color: getColorFromThemeWithColorProps(theme, ownerState, 'dark'),
        '&:not(.Mui-checked, .MuiCheckbox-indeterminate) path:nth-of-type(2)': {
          fill: getColorFromThemeWithColorProps(theme, ownerState, 'dark'),
        },
      },
    }),
  },
};
