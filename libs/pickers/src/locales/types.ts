import { PickersAdapter } from 'src/LocalizationProvider';

export interface PickersComponentCommonLocaleText<TDate> {
  // Action bar
  cancelButtonLabel: string;
  clearButtonLabel: string;
  confirmButtonLabel: string;
  todayButtonLabel: string;

  // MutliCalendar switch lables
  calendarLabels: Record<string, string>;

  // Open picker labels
  openDatePickerDialogue: (date: TDate | null, utils: PickersAdapter<TDate>) => string;
  openTimePickerDialogue: (date: TDate | null, utils: PickersAdapter<TDate>) => string;
}

export interface PickersLocaleText<TDate> extends PickersComponentCommonLocaleText<TDate> {}

export type PickersInputLocaleText<TDate> = Partial<PickersLocaleText<TDate>>;
