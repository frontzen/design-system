import { grey } from '.';

export const defaultPalette = {
  primary: '#006FFF',
  secondary: '#FDB913',
  success: '#42BE65',
  error: '#FA4D56',
  warning: '#FFC107',
  disable: '#DDE1E6',
  text: {
    primary: '#161616',
    secondary: '#393939',
    light: '#F4F4F4',
    disabled: '#A8A8A8',
    placeholder: '#393939',
    link: '#006FFF',
  },
} as const;

export const background = {
  white: '#FFFFFF',
  grey: '#F2F4F8',
  black: '#121619',
} as const;

export const common = {
  black: '#000000',
  white: '#FFFFFF',
} as const;

export const border = {
  grey20: grey[20],
  grey10: grey[10],
} as const;
