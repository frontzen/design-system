import { MAX_DEFAULT_DATE_ISO_STRING, MIN_DEFAULT_DATE_ISO_STRING } from 'src/internals/constants/defaultDates';
import { BaseDateValidationProps } from 'src/internals/hooks/validation/models';
import { DefaultizedProps } from 'src/internals/models';
import { PickerVariant } from 'src/internals/models/props/basePickerProps';
import { PickersAdapter } from 'src/LocalizationProvider/LocalizationProvider';
import { DatePickerProps } from './DatePicker';

export const getDatePickerDefaultizedProps = <TDate>(
  props: DatePickerProps<TDate>,
  utils: PickersAdapter<TDate>,
): DefaultizedProps<
  DatePickerProps<TDate>,
  'openTo' | 'views' | keyof BaseDateValidationProps<TDate>,
  { inputFormat: string; variant: PickerVariant }
> => {
  if (!utils.isValid(props.minDate) || !utils.isValid(props.maxDate)) {
    throw new Error(
      [
        'FrontZen: one of minDate or maxDate props is invalid.',
        'Pass valid and parsable date to the mentioned props.',
      ].join('\n'),
    );
  }

  return {
    openTo: 'day',
    disableFuture: false,
    disablePast: false,
    views: ['year', 'day'],
    inputFormat: utils.formats.keyboardDate,
    variant: 'popper',
    ...props,
    minDate: props.minDate || utils.date(MIN_DEFAULT_DATE_ISO_STRING)!,
    maxDate: props.maxDate || utils.date(MAX_DEFAULT_DATE_ISO_STRING)!,
  };
};
