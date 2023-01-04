import { PaletteColor } from '@mui/material';
import { DesignSystemColor } from '../../types';

export const redShades: DesignSystemColor = {
  50: '#FFF1F1',
  100: '#FFD7D9',
  200: '#FFB3B8',
  300: '#FF8389',
  400: '#FA4D56',
  500: '#DA1E28',
  600: '#A2191F',
  700: '#750E13',
  800: '#520408',
  900: '#2D0709',
};

export const red: PaletteColor = {
  dark: redShades[500],
  main: redShades[400],
  light: redShades[300],
  contrastText: '#FFFFFF',

  ...redShades,
};
