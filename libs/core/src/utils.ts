import { PaletteColor, Theme } from '@mui/material';

type ColorType = 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';

export const getColorFromThemeWithColorProps = (
  theme: Theme,
  props: { color?: ColorType },
  paletteKey: keyof PaletteColor = 'main',
): string => {
  const { color = 'primary' } = props;
  return theme.palette?.[color === 'inherit' ? 'primary' : color][paletteKey];
};

export const expectProps = (notAllowed: string | string[]) => {
  return (prop: string) => {
    const _notAllowed = Array.isArray(notAllowed) ? notAllowed : [notAllowed];
    return !_notAllowed.includes(prop);
  };
};
