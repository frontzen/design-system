import { PaletteColor, Theme } from '@mui/material';

type ColorType = 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';

export const getColorFromThemeWithColorProps = (
  theme: Theme,
  props: { color?: ColorType },
  paletteKey: keyof PaletteColor = 'main',
): string =>
  theme.palette?.[props.color === 'inherit' ? 'primary' : !props.color ? 'primary' : props.color][paletteKey];
