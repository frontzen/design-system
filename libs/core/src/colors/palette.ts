import { blue } from './blue';
import { coolGrey } from './coolGrey';
import { green } from './green';
import { grey } from './grey';
import { red } from './red';
import { yellow } from './yellow';

export const background = {
  white: '#FFFFFF',
  grey: coolGrey[50],
  black: coolGrey[900],
} as const;

export const common = {
  black: '#000000',
  white: '#FFFFFF',
} as const;

export const border = {
  grey50: grey[50],
  grey100: grey[100],
} as const;

export const defaultPalette = {
  primary: {
    main: blue[500],
    light: blue[400],
    dark: blue[600],
    contrastText: common.white,
  },
  secondary: {
    main: yellow[200],
    light: yellow[100],
    dark: yellow[300],
    contrastText: common.white,
  },
  success: {
    main: green[300],
    light: green[200],
    dark: green[400],
    contrastText: common.white,
  },
  error: {
    main: red[400],
    light: red[300],
    dark: red[500],
    contrastText: common.white,
  },
  warning: {
    main: yellow[200],
    light: yellow[100],
    dark: yellow[300],
    contrastText: common.white,
  },
  disable: coolGrey[100],
  text: {
    primary: grey[900],
    secondary: grey[700],
    light: grey[50],
    disabled: grey[300],
    placeholder: grey[700],
    link: '#006FFF',
  },
} as const;
