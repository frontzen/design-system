import { Components, Theme } from '@mui/material';
import { coolGrey } from '../colors';
import { getColorFromThemeWithColorProps } from '../utils';
import { Selected } from './icons/Selected';
import { UnSelected } from './icons/Unselected';

declare module '@mui/material/Radio' {
  interface RadioPropsSizeOverrides {
    large: true;
  }
  interface RadioPropsColorOverrides {
    default: false;
  }
}

export const muiRadio: Components<Omit<Theme, 'components'>>['MuiRadio'] = {
  defaultProps: {
    disableRipple: true,
    icon: <UnSelected />,
    checkedIcon: <Selected />,
  },
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      padding: 0,
      '& rect': {
        stroke: coolGrey[300],
      },
      '&.Mui-disabled': {
        '& rect:nth-of-type(1)': {
          fill: coolGrey[50],
          stroke: coolGrey[100],
        },
      },
      '&:hover': {
        '& rect': {
          stroke: getColorFromThemeWithColorProps(theme, ownerState, 'dark'),
        },
        '&.Mui-checked rect': {
          fill: getColorFromThemeWithColorProps(theme, ownerState, 'dark'),
        },
      },
      '&.Mui-checked': {
        '& rect ': {
          stroke: 'transparent',
        },
        '& rect:nth-of-type(2)': {
          fill: theme.palette.common.white,
        },
        '&.Mui-disabled': {
          '& rect:nth-of-type(1)': {
            fill: coolGrey[100],
            stroke: 'transparent',
          },
          '& rect:nth-of-type(2)': {
            fill: coolGrey[300],
          },
        },
      },
    }),
  },
};
