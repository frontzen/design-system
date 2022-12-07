import { DEFAULT_DATES_ISO_STRING } from 'src/internals/constants/defaultDates';
import { BaseDateValidationProps } from 'src/internals/hooks/validation/models';
import { DateView, DefaultizedProps } from 'src/internals/models';
import { replaceWhenInvalid } from 'src/internals/utils/date-utils';
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

export function getDatePickerDefaultizedProps<TDate>(
  props: BaseDatePickerProps<TDate>,
  utils: PickersAdapter<TDate>,
): DefaultizedProps<BaseDatePickerProps<TDate>, 'openTo' | 'views' | keyof BaseDateValidationProps<TDate>> {
  return {
    openTo: 'day',
    disableFuture: false,
    disablePast: false,
    views: ['year', 'day'],
    ...props,
    minDate: replaceWhenInvalid(utils, props.minDate, utils.date(DEFAULT_DATES_ISO_STRING.minDate)!),
    maxDate: replaceWhenInvalid(utils, props.maxDate, utils.date(DEFAULT_DATES_ISO_STRING.maxDate)!),
  };
}
