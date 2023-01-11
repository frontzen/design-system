import { PaletteColor } from '@mui/material';
import { DesignSystemColor } from '../../types';

export const yellowShades: DesignSystemColor = {
  50: '#FCF4D6',
  100: '#FDDC69',
  200: '#F1C21B',
  300: '#D2A106',
  400: '#B28600',
  500: '#8E6A00',
  600: '#684E00',
  700: '#483700',
  800: '#302400',
  900: '#1C1500',
};

export const yellow: PaletteColor = {
  dark: yellowShades[300],
  main: yellowShades[200],
  light: yellowShades[100],
  contrastText: '#FFFFFF',

  ...yellowShades,
};
