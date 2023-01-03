import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { createTheme } from '@front.zen/design-system';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { DecoratorFn } from '@storybook/react';
import * as React from 'react';
import rtlPlugin from 'stylis-plugin-rtl';

/**
 * Add ThemeProvider as a global decorator
 */
const ltrTheme = createTheme({ direction: 'ltr' });
const rtlTheme = createTheme({ direction: 'rtl' });

const cacheLtr = createCache({
  key: 'muiltr',
  stylisPlugins: [],
});
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [rtlPlugin],
});

const DocumentDirection = ({ dir }: { dir: string }) => {
  React.useEffect(() => {
    document.dir = dir;
  }, [dir]);

  return null;
};

export const themeDecorator: DecoratorFn = (Story, context) => {
  const locale = context?.globals.locale ?? 'en';
  const { theme, dir, cache } =
    locale === 'fa'
      ? { theme: rtlTheme, dir: 'rtl', cache: cacheRtl }
      : { theme: ltrTheme, dir: 'ltr', cache: cacheLtr };

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <DocumentDirection dir={dir} />
        <Story />
      </ThemeProvider>
    </CacheProvider>
  );
};
