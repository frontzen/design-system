import * as React from 'react';
import { PickersAdapter } from 'src/LocalizationProvider';
import { useUtils } from '../useUtils';

export interface ValidationCommonProps<TError, TValue> {
  /**
   * Callback that fired when input value or new `value` prop validation returns **new** validation error (or value is valid after error).
   * In case of validation error detected `reason` prop return non-null value and `TextField` must be displayed in `error` state.
   * This can be used to render appropriate form error.
   *
   * @DateIOType
   *
   * @template TError, TValue
   * @param {TError} reason The reason why the current value is not valid.
   * @param {TValue} value The invalid value.
   */
  onError?: (reason: TError, value: TValue) => void;
  value: TValue;
}

export type ValidationProps<TError, TValue, TValidationProps extends {}> = ValidationCommonProps<TError, TValue> &
  TValidationProps;

export type Validator<TValue, TDate, TError, TValidationProps> = (params: {
  utils: PickersAdapter<TDate>;
  value: TValue;
  props: Omit<TValidationProps, 'value' | 'onError'>;
}) => TError;

export function useValidation<TValue, TDate, TError, TValidationProps extends {}>(
  props: ValidationProps<TError, TValue, TValidationProps>,
  validate: Validator<TValue, TDate, TError, TValidationProps>,
  isSameError: (a: TError, b: TError | null) => boolean,
  defaultErrorState: TError,
): TError {
  const { value, onError } = props;
  const utils = useUtils<TDate>();
  const previousValidationErrorRef = React.useRef<TError | null>(defaultErrorState);

  const validationError = validate({ utils, value, props });

  React.useEffect(() => {
    if (onError && !isSameError(validationError, previousValidationErrorRef.current)) {
      onError(validationError, value);
    }

    previousValidationErrorRef.current = validationError;
  }, [isSameError, onError, previousValidationErrorRef, validationError, value]);

  return validationError;
}
