import { ComponentsProps } from '@mui/material/styles';

export interface PickerComponents<Theme> {
  ZenLocalizationProvider?: {
    defaultProps?: ComponentsProps['ZenLocalizationProvider'];
    styleOverrides?: ComponentsOverrides<Theme>['ZenLocalizationProvider'];
    variants?: ComponentsVariants['ZenLocalizationProvider'];
  };
}

declare module '@mui/material/styles' {
  interface Components<Theme = unknown> extends PickerComponents<Theme> {}
}
