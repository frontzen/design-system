import * as React from 'react';
import { useUtils } from '../useUtils';
import { BaseDateValidationProps, CommonDateTimeValidationError } from './models';
import { Validator } from './useValidation';

export interface DateComponentValidationProps<TDate> extends Required<BaseDateValidationProps<TDate>> {}

export type DateValidationError = CommonDateTimeValidationError | 'minDate' | 'maxDate';

export const validateDate: Validator<any | null, any, DateValidationError, BaseDateValidationProps<any>> = ({
  props,
  value,
  utils,
}): DateValidationError => {
  if (value === null) return value;

  const now = utils.date()!;

  if (!utils.isValid(value)) return 'invalidDate';
  else if (Boolean(props.disablePast && utils.isBeforeDay(value, now))) return 'disablePast';
  else if (Boolean(props.disableFuture && utils.isAfterDay(value, now))) return 'disableFuture';
  else if (Boolean(props.minDate && utils.isBeforeDay(value, props.minDate))) return 'minDate';
  else if (Boolean(props.maxDate && utils.isAfterDay(value, props.maxDate))) return 'maxDate';
  else return null;
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
