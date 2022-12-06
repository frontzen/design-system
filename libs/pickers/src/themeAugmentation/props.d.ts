import { LocalizationProviderProps } from '../LocalizationProvider';

export interface PickersComponentsPropsList {
  ZenLocalizationProvider: LocalizationProviderProps<any>;
}

declare module '@mui/material/styles' {
  interface ComponentsPropsList extends PickersComponentsPropsList {}
}
