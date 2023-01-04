import { PaletteOptions } from '@mui/material';
import { blue, coolGrey, green, grey, magenta, orange, purple, red, teal, turquoise, warmGrey, yellow } from './colors';

/**
 * Note: The Frontzen Design System dose not have the info color and it should be set on each project separately.
 */
export const palette: PaletteOptions = {
  primary: blue,
  secondary: yellow,
  error: red,
  warning: yellow,
  success: green,

  // grey colors
  grey: grey,
  coolGrey: coolGrey,
  warmGrey: warmGrey,

  // cool colors
  blue: blue,
  green: green,
  purple: purple,
  teal: teal,
  turquoise: turquoise,

  // warm colors
  magenta: magenta,
  orange: orange,
  red: red,
  yellow: yellow,

  text: {
    light: grey[50],
    primary: grey[900],
    disabled: grey[300],
    secondary: grey[700],
    placeholder: grey[700],
    link: '#006FFF',
  },

  common: { black: '#000000', white: '#FFFFFF' },
  background: { paper: coolGrey[50], default: '#FFFFFF' },
};
