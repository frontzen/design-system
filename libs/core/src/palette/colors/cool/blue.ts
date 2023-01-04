import { PaletteColor } from '@mui/material';
import { DesignSystemColor } from '../../types';

export const blueShades: DesignSystemColor = {
  50: '#EDF5FF',
  100: '#D0E2FF',
  200: '#A6C8FF',
  300: '#78A9FF',
  400: '#4589FF',
  500: '#0F62FE',
  600: '#0043CE',
  700: '#002D9C',
  800: '#001D6C',
  900: '#001141',
};

export const blue: PaletteColor = {
  dark: blueShades[600],
  main: blueShades[500],
  light: blueShades[400],
  contrastText: '#FFFFFF',

  ...blueShades,
};
