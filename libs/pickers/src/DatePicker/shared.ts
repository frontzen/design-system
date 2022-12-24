import { ExportedDateInputProps } from 'src/internals/components/PureDateInput';
import { MAX_DEFAULT_DATE_ISO_STRING, MIN_DEFAULT_DATE_ISO_STRING } from 'src/internals/constants/defaultDates';
import { BaseDateValidationProps } from 'src/internals/hooks/validation/models';
import { DateValidationError } from 'src/internals/hooks/validation/useDateValidation';
import { ValidationCommonProps } from 'src/internals/hooks/validation/useValidation';
import { DateView, DefaultizedProps } from 'src/internals/models';
import { BasePickerProps } from 'src/internals/models/props/basePickerProps';
import { PickersAdapter } from 'src/LocalizationProvider/LocalizationProvider';

export interface BaseDatePickerProps<TDate>
  extends ValidationCommonProps<DateValidationError, TDate | null>,
    BasePickerProps<TDate | null>,
    BaseDateValidationProps<TDate>,
    ExportedDateInputProps<TDate> {
  /**
   * Callback fired on view change.
   * @param {DateView} view The new view.
   */
  onViewChange?: (view: DateView) => void;
  /**
   * First view to show.
   * Must be a valid option from `views` list
   * @default 'day'
   */
  openTo?: DateView;
  /**
   * Array of views to show.
   * @default ['year', 'day']
   */
  views?: readonly DateView[];
}

export const getDatePickerDefaultizedProps = <TDate, Props extends BaseDatePickerProps<TDate>>(
  props: Props,
  utils: PickersAdapter<TDate>,
): DefaultizedProps<Props, 'openTo' | 'views' | keyof BaseDateValidationProps<TDate>, { inputFormat: string }> => {
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
    ...props,
    minDate: props.minDate || utils.date(MIN_DEFAULT_DATE_ISO_STRING)!,
    maxDate: props.maxDate || utils.date(MAX_DEFAULT_DATE_ISO_STRING)!,
  };
};
