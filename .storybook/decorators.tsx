import { createTheme } from '@front.zen/design-system';
import { CssBaseline, ThemeProvider } from '@mui/material';
import * as React from 'react';

console.log(React);

/**
 * Add ThemeProvider as a global decorator
 */
const theme = createTheme();

export const themeDecorator = (Story) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Story />
  </ThemeProvider>
);
