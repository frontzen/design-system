import { PickersLocaleText } from './types';

export const enUSLocaleText: PickersLocaleText<any> = {
  cancelButtonLabel: 'Cancel',
  confirmButtonLabel: 'Confirm',
  clearButtonLabel: 'Clear',
  todayButtonLabel: 'Today',

  calendarLabels: {
    islamic: 'Islamic Calendar',
    gregorian: 'Gregorian Calendar',
    persian: 'Jalali Calendar',
  },

  // Open picker labels
  openDatePickerDialogue: (value, utils) =>
    value !== null && utils.isValid(value)
      ? `Choose date, selected date is ${utils.format(value, 'fullDate')}`
      : 'Choose date',
  openTimePickerDialogue: (value, utils) =>
    value !== null && utils.isValid(value)
      ? `Choose time, selected time is ${utils.format(value, 'fullTime')}`
      : 'Choose time',
};
