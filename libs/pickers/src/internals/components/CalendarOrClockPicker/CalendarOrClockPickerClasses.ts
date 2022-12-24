import {
  unstable_generateUtilityClass as generateUtilityClass,
  unstable_generateUtilityClasses as generateUtilityClasses,
} from '@mui/utils';

export interface CalendarOrClockPickerClasses {
  /** Styles applied to the root element. */
  root: string;
}

export type CalendarOrClockPickerClassKey = keyof CalendarOrClockPickerClasses;

export function getCalendarOrClockPickerUtilityClass(slot: string) {
  return generateUtilityClass('ZenCalendarOrClockPicker', slot);
}

export const calendarOrClockPickerClasses = generateUtilityClasses('MuiCalendarOrClockPicker', ['root']);
