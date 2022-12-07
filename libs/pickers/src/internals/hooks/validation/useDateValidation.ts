import * as React from 'react';
import { useUtils } from '../useUtils';
import { BaseDateValidationProps, CommonDateTimeValidationError } from './models';
import { useValidation, ValidationProps, Validator } from './useValidation';

export interface DateComponentValidationProps<TDate> extends Required<BaseDateValidationProps<TDate>> {}

export type DateValidationError = CommonDateTimeValidationError | 'minDate' | 'maxDate';

export const validateDate: Validator<any | null, any, DateValidationError, BaseDateValidationProps<any>> = ({
  props,
  value,
  utils,
}): DateValidationError => {
  if (value === null) return value;

  const now = utils.date()!;

  switch (true) {
    case !utils.isValid(value):
      return 'invalidDate';

    case Boolean(props.disablePast && utils.isBeforeDay(value, now)):
      return 'disablePast';

    case Boolean(props.disableFuture && utils.isAfterDay(value, now)):
      return 'disableFuture';

    case Boolean(props.minDate && utils.isBeforeDay(value, props.minDate)):
      return 'minDate';

    case Boolean(props.maxDate && utils.isAfterDay(value, props.maxDate)):
      return 'maxDate';

    default:
      return null;
  }
};

export const useIsDateDisabled = <TDate>({
  disablePast,
  disableFuture,
  minDate,
  maxDate,
}: DateComponentValidationProps<TDate>) => {
  const utils = useUtils();

  return React.useCallback(
    (day: TDate | null) =>
      validateDate({ utils, props: { disablePast, disableFuture, minDate, maxDate }, value: day }) !== null,
    [utils, disablePast, disableFuture, minDate, maxDate],
  );
};

export const isSameDateError = (a: DateValidationError, b: DateValidationError) => a === b;

export const useDateValidation = <TDate>(
  props: ValidationProps<DateValidationError, TDate | null, DateComponentValidationProps<TDate>>,
): DateValidationError => useValidation(props, validateDate, isSameDateError, null);
