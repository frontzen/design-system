import { PickersLocaleText } from './types';

export const faIRLocaleText: PickersLocaleText<any> = {
  cancelButtonLabel: 'خروج',
  confirmButtonLabel: 'تأیید',
  clearButtonLabel: 'بازنشانی',
  todayButtonLabel: 'امروز',

  calendarLabels: {
    islamic: 'تقویم قمری',
    gregorian: 'تقویم میلادی',
    persian: 'تقویم شمسی',
  },

  // Open picker labels
  openDatePickerDialogue: (value, utils) =>
    value !== null && utils.isValid(value)
      ? `تاریخ را انتخاب کنید، تاریخ انتخاب شده ${utils.format(value, 'fullDate')} می باشد`
      : 'تاریخ را انتخاب کنید',
  openTimePickerDialogue: (value, utils) =>
    value !== null && utils.isValid(value)
      ? `ساعت را انتخاب کنید، ساعت انتخاب شده ${utils.format(value, 'fullTime')} می باشد`
      : 'ساعت را انتخاب کنید',
};
