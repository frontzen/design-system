import { DatePickerProps } from 'src/DatePicker';
import { CalendarOrClockPickerProps } from 'src/internals/components/CalendarOrClockPicker';
import { PickerPopperProps } from 'src/internals/components/PickersPopper';
import { LocalizationProviderProps } from 'src/LocalizationProvider';

export interface PickersComponentsPropsList {
  ZenLocalizationProvider: LocalizationProviderProps<any>;
  ZenPickersPopper: PickerPopperProps;
  ZenCalendarOrClockPicker: CalendarOrClockPickerProps<any, any>;
  ZenDatePicker: DatePickerProps<any>;
}

declare module '@mui/material/styles' {
  interface ComponentsPropsList extends PickersComponentsPropsList {}
}
