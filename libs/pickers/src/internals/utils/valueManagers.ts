import { PickerStateValueManager } from '../hooks/usePickerState';
import { replaceInvalidDateByNull } from './date-utils';

export type SingleItemPickerStateValueManager<TValue = any, TDate = any> = PickerStateValueManager<TValue, TDate>;

export const singleItemValueManager: SingleItemPickerStateValueManager = {
  emptyValue: null,
  cleanValue: replaceInvalidDateByNull,
  areValuesEqual: (utils, a, b) => utils.isEqual(a, b),
};
