export interface PickersComponentAgnosticLocaleText {
  // Action bar
  cancelButtonLabel: string;
  clearButtonLabel: string;
  confirmButtonLabel: string;
  todayButtonLabel: string;

  // MutliCalendar switch lables
  calendarLabels: Record<string, string>;
}

export interface PickersLocaleText extends PickersComponentAgnosticLocaleText {}

export type PickersInputLocaleText = Partial<PickersLocaleText>;
