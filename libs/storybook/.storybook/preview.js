import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@my-frontzen/design-system';

/**
 * Add ThemeProvider as a global decorator
 */
const theme = createTheme();

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {Story()}
    </ThemeProvider>
  ),
];
