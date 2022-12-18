import { LocalizationProviderProps } from 'src/LocalizationProvider';

export interface PickersComponentsPropsList {
  ZenLocalizationProvider: LocalizationProviderProps<any>;
  ZenPickersPopper: PickerPopperProps;
}

declare module '@mui/material/styles' {
  interface ComponentsPropsList extends PickersComponentsPropsList {}
}
