import { MAX_DEFAULT_DATE_ISO_STRING, MIN_DEFAULT_DATE_ISO_STRING } from 'src/internals/constants/defaultDates';
import { BaseDateValidationProps } from 'src/internals/hooks/validation/models';
import { DateView, DefaultizedProps } from 'src/internals/models';
import { PickersAdapter } from 'src/LocalizationProvider/LocalizationProvider';

export interface BaseDatePickerProps<TDate> extends BaseDateValidationProps<TDate> {
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

export const getDatePickerDefaultizedProps = <TDate>(
  props: BaseDatePickerProps<TDate>,
  utils: PickersAdapter<TDate>,
): DefaultizedProps<BaseDatePickerProps<TDate>, 'openTo' | 'views' | keyof BaseDateValidationProps<TDate>> => {
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
    ...props,
    minDate: props.minDate || utils.date(MIN_DEFAULT_DATE_ISO_STRING)!,
    maxDate: props.maxDate || utils.date(MAX_DEFAULT_DATE_ISO_STRING)!,
  };
};
