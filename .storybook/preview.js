import { createTheme } from '@front.zen/design-system';
import { CssBaseline, ThemeProvider } from '@mui/material';

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
