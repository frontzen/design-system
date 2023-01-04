import { Components, Theme } from '@mui/material';

export const muiFormHelperText: Components<Omit<Theme, 'components'>>['MuiFormHelperText'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      color: theme.palette.grey[500],
    }),
  },
};
