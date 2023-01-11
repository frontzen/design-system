import { PaletteColor } from '@mui/material';
import { DesignSystemColor } from '../../types';

export const greenShades: DesignSystemColor = {
  50: '#DEFBE6',
  100: '#A7F0BA',
  200: '#6FDC8C',
  300: '#42BE65',
  400: '#24A148',
  500: '#198038',
  600: '#0E6027',
  700: '#044317',
  800: '#022D0D',
  900: '#071908',
};

export const green: PaletteColor = {
  dark: greenShades[400],
  main: greenShades[300],
  light: greenShades[200],
  contrastText: '#FFFFFF',

  ...greenShades,
};
