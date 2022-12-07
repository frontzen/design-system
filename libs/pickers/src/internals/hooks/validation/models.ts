interface FutureAndPastValidationProps {
  /**
   * If `true` disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast?: boolean;
  /**
   * If `true` disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture?: boolean;
}

/**
 * Validation props common to all the date views.
 * All these props have a default value when used inside a picker.
 */
export interface BaseDateValidationProps<TDate> extends FutureAndPastValidationProps {
  /**
   * Maximal selectable date.
   */
  maxDate?: TDate;
  /**
   * Minimal selectable date.
   */
  minDate?: TDate;
}

/**
 * Common validation error types applicable to both date and time validation
 */
export type CommonDateTimeValidationError = 'invalidDate' | 'disableFuture' | 'disablePast' | null;
