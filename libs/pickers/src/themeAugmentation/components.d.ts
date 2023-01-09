import { ComponentsProps } from '@mui/material/styles';

export interface PickerComponents {
  ZenLocalizationProvider?: {
    defaultProps?: ComponentsProps['ZenLocalizationProvider'];
  };
  ZenPickersPopper?: {
    defaultProps?: ComponentsProps['ZenPickersPopper'];
  };
  ZenCalendarOrClockPicker?: {
    defaultProps?: ComponentsProps['ZenCalendarOrClockPicker'];
  };
  ZenDatePicker?: {
    defaultProps?: ComponentsProps['ZenDatePicker'];
  };
}

declare module '@mui/material/styles' {
  interface Components extends PickerComponents {}
}
