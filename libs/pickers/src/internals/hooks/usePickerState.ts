import * as React from 'react';
import { useUtils } from 'src/internals/hooks/useUtils';
import { PickersAdapter } from 'src/LocalizationProvider';
import { DateOrTimeView } from '../models';
import { useOpenState } from './useOpenState';
import { useViews } from './useViews';

export interface PickerStateValueManager<TValue, TDate, TError> {
  /**
   * Determines if two values are equal.
   * @template TDate, TValue
   * @param {MuiPickersAdapter<TDate>} utils The adapter.
   * @param {TValue} valueLeft The first value to compare.
   * @param {TValue} valueRight The second value to compare.
   * @returns {boolean} A boolean indicating if the two values are equal.
   */
  areValuesEqual: (utils: PickersAdapter<TDate>, valueLeft: TValue, valueRight: TValue) => boolean;
  /**
   * Value to set when clicking the "Clear" button.
   */
  emptyValue: TValue;
  /**
   * Method returning the value to set when clicking the "Today" button
   * @template TDate, TValue
   * @param {MuiPickersAdapter<TDate>} utils The adapter.
   * @returns {TValue} The value to set when clicking the "Today" button.
   */
  getTodayValue: (utils: PickersAdapter<TDate>) => TValue;
  /**
   * Method parsing the input value to replace all invalid dates by `null`.
   * @template TDate, TValue
   * @param {MuiPickersAdapter<TDate>} utils The adapter.
   * @param {TValue} value The value to parse.
   * @returns {TValue} The value without invalid date.
   */
  cleanValue: (utils: PickersAdapter<TDate>, value: TValue) => TValue;
  /**
   * Generates the new value, given the previous value and the new proposed value.
   * @template TDate, TValue
   * @param {MuiPickersAdapter<TDate>} utils The adapter.
   * @param {TValue} lastValidDateValue The last valid value.
   * @param {TValue} value The proposed value.
   * @returns {TValue} The new value.
   */
  valueReducer?: (utils: PickersAdapter<TDate>, lastValidDateValue: TValue, value: TValue) => TValue;
  /**
   * Compare two errors to know if they are equal.
   * @template TError
   * @param {TError} error The new error
   * @param {TError | null} prevError The previous error
   * @returns {boolean} `true` if the new error is different from the previous one.
   */
  isSameError: (error: TError, prevError: TError | null) => boolean;
  /**
   * The value identifying no error, used to initialise the error state.
   */
  defaultErrorState: TError;
}

interface DateStateAction<DraftValue> {
  value: DraftValue;
  callOnChange?: boolean;
  closePicker?: boolean;
  openNextView?: boolean;
}

export type PickerSelectionState = 'partial' | 'finish';

export interface PickerStateProps<TValue, View extends DateOrTimeView> {
  openTo?: View;
  view: View | undefined;
  views: readonly View[];
  /**
   * Callback fired when view is changed
   * @template View
   * @param {View} newView The new view
   */
  onViewChange?: (newView: View) => void;
  /**
   * If `true` the popup or dialog will immediately close after submitting full date.
   */
  closeOnConfirm?: boolean;
  /**
   * Control the popup or dialog open state.
   */
  open?: boolean;
  /**
   * Callback fired when date is cofirmed @DateIOType.
   * @template TValue
   * @param {TValue} value The value that was just accepted.
   */
  onConfirm?: (value: TValue) => void;
  /**
   * Callback fired when the value (the selected date) changes @DateIOType.
   * @template TValue
   * @param {TValue} value The new value.
   * @param {string} keyboardInputValue The current value of the keyboard input.
   */
  onChange: (value: TValue, keyboardInputValue?: string) => void;
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see open).
   */
  onClose?: () => void;
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see open).
   */
  onOpen?: () => void;
  /**
   * The value of the picker.
   */
  value: TValue;
}

interface PickerStateInputProps<TValue> {
  onChange: (value: TValue, keyboardInputValue?: string) => void;
  open: boolean;
  value: TValue;
  openPicker: () => void;
}

export interface PickerStatePickerProps<TValue> {
  value: TValue;
  onDateChange: (newDate: TValue) => void;
}

export interface PickerStateWrapperProps {
  onConfirm: () => void;
  onClear: () => void;
  onDismiss: () => void;
  onSetToday: () => void;
  open: boolean;
}

interface PickerState<TValue> {
  inputProps: PickerStateInputProps<TValue>;
  pickerProps: PickerStatePickerProps<TValue>;
  wrapperProps: PickerStateWrapperProps;
}

export const usePickerState = <TValue, TDate, TError, TView extends DateOrTimeView>(
  props: PickerStateProps<TValue, TView>,
  valueManager: PickerStateValueManager<TValue, TDate, TError>,
): PickerState<TValue> => {
  const { onConfirm, onChange, value: rawValue, closeOnConfirm, open, onOpen, onClose, ...useViewProps } = props;

  const utils = useUtils<TDate>();
  const { isOpen, setIsOpen } = useOpenState({ open, onClose, onOpen });
  const { nextView, openNext, ...useViewsRest } = useViews(useViewProps);

  const value = React.useMemo(() => valueManager.cleanValue(utils, rawValue), [valueManager, utils, rawValue]);

  const [draftState, setDraftState] = React.useState<TValue>(value);

  const setDate = React.useCallback(
    (params: DateStateAction<TValue>) => {
      setDraftState(params.value);

      if (params.callOnChange && !valueManager.areValuesEqual(utils, params.value, value)) onChange(params.value);
      if (params.openNextView) openNext();
      if (params.closePicker && !nextView) setIsOpen(false);
    },
    [onChange, setIsOpen, utils, valueManager, value, nextView, openNext],
  );

  React.useEffect(() => {
    if (isOpen) {
      setDate({ value });
    }
  }, [isOpen]); // eslint-disable-line react-hooks/exhaustive-deps

  const wrapperProps = React.useMemo<PickerStateWrapperProps>(
    () => ({
      open: isOpen,
      onClear: () => {
        setDate({
          value: valueManager.emptyValue,
          callOnChange: true,
        });
      },
      onConfirm: () => {
        setDate({ value: draftState, callOnChange: true, openNextView: true, closePicker: closeOnConfirm });
      },
      onDismiss: () => {
        setIsOpen(false);
      },
      onSetToday: () => {
        setDate({ value: valueManager.getTodayValue(utils) });
      },
    }),
    [setDate, isOpen, utils, draftState, valueManager, setIsOpen, closeOnConfirm],
  );

  const pickerProps = React.useMemo<PickerStatePickerProps<TValue>>(
    () => ({
      value: draftState,
      onDateChange: setDraftState,
      useViewsResult: {
        ...useViewsRest,
        nextView,
        openNext,
      },
    }),
    [draftState, setDraftState, openNext, nextView, useViewsRest],
  );

  const inputProps = React.useMemo<PickerStateInputProps<TValue>>(
    () => ({
      onChange,
      open: isOpen,
      value: rawValue,
      openPicker: () => setIsOpen(true),
    }),
    [onChange, isOpen, setIsOpen, rawValue],
  );

  const pickerState: PickerState<TValue> = { pickerProps, inputProps, wrapperProps };

  return pickerState;
};
