export interface PickersComponentCommonLocaleText {
  // Action bar
  cancelButtonLabel: string;
  clearButtonLabel: string;
  confirmButtonLabel: string;
  todayButtonLabel: string;

  // MutliCalendar switch lables
  calendarLabels: Record<string, string>;
}

export interface PickersLocaleText extends PickersComponentCommonLocaleText {}

export type PickersInputLocaleText = Partial<PickersLocaleText>;
