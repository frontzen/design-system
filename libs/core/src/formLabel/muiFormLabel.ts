import { Components, formLabelClasses, Theme } from '@mui/material';

export const muiFormLabel: Components<Omit<Theme, 'components'>>['MuiFormLabel'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      fontSize: '0.875rem',

      [`&.${formLabelClasses.focused}`]: {
        color: 'inherit',
      },

      [`&.${formLabelClasses.disabled}`]: {
        color: theme.palette.warmGrey[300],
      },
    }),
  },
};
