import { PickersAdapter } from 'src/LocalizationProvider/LocalizationProvider';

export const replaceInvalidDateByNull = <TDate>(utils: PickersAdapter<TDate>, value: TDate | null) =>
  value == null || !utils.isValid(value) ? null : value;

/**
 * Replaces defaultValue in case value is null, undefined or invalid
 * @param utils - picker's adapter instance
 * @param value - a possible undefined or invalid date object
 * @param defaultValue - default value
 */
export const replaceWhenInvalid = <TDate>(
  utils: PickersAdapter<TDate>,
  value: TDate | null | undefined,
  defaultValue: TDate,
): TDate => (value == null || !utils.isValid(value) ? defaultValue : value);
