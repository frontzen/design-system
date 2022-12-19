import * as React from 'react';
import { useUtils } from 'src/internals/hooks/useUtils';
import { PickersAdapter } from 'src/LocalizationProvider';
import { useViews } from '../providers/PickerViewsProvider';
import { useOpenState } from './useOpenState';

export interface PickerStateValueManager<TValue, TDate> {
  /**
   * Determines if two values are equal.
   */
  areValuesEqual: (utils: PickersAdapter<TDate>, valueLeft: TValue, valueRight: TValue) => boolean;
  /**
   * Value to set when clicking the "Clear" button.
   */
  emptyValue: TValue;
  /**
   * Method parsing the input value to replace all invalid dates by `null`.
   */
  cleanValue: (utils: PickersAdapter<TDate>, value: TValue) => TValue;
  /**
   * Generates the new value, given the previous value and the new proposed value.
   */
  valueReducer?: (utils: PickersAdapter<TDate>, lastValidDateValue: TValue, value: TValue) => TValue;
}

interface DateStateAction<DraftValue> {
  value: DraftValue;
  callOnChange?: boolean;
  closePicker?: boolean;
}

export interface PickerStateProps<TValue> {
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
  onClose?: VoidFunction;
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see open).
   */
  onOpen?: VoidFunction;
  /**
   * The value of the picker.
   */
  value: TValue;
}

interface PickerStateInputProps<TValue> {
  onChange: (value: TValue, keyboardInputValue?: string) => void;
  open: boolean;
  value: TValue;
  openPicker: VoidFunction;
}

export interface PickerStatePickerProps<TValue> {
  value: TValue;
  onValueChange: (newDate: TValue) => void;
}

export interface PickerStateWrapperProps {
  onConfirm: VoidFunction;
  onClear: VoidFunction;
  onDismiss: VoidFunction;
  open: boolean;
}

interface PickerState<TValue> {
  inputProps: PickerStateInputProps<TValue>;
  pickerProps: PickerStatePickerProps<TValue>;
  wrapperProps: PickerStateWrapperProps;
}

export const usePickerState = <TValue, TDate>(
  props: PickerStateProps<TValue>,
  valueManager: PickerStateValueManager<TValue, TDate>,
): PickerState<TValue> => {
  const { onConfirm, onChange, value: rawValue, closeOnConfirm, open, onOpen, onClose } = props;

  const utils = useUtils<TDate>();
  const { isOpen, setIsOpen } = useOpenState({ open, onClose, onOpen });

  // PickerViewsProvider should always be used on top of usePickerState usage
  const { openNext } = useViews();

  const value = React.useMemo(() => valueManager.cleanValue(utils, rawValue), [valueManager, utils, rawValue]);

  const [draftState, setDraftState] = React.useState<TValue>(value);

  const setDate = React.useCallback(
    (params: DateStateAction<TValue>) => {
      setDraftState(params.value);

      if (params.callOnChange && !valueManager.areValuesEqual(utils, params.value, value)) onChange(params.value);
      if (params.closePicker) setIsOpen(false);
    },
    [onChange, setIsOpen, utils, valueManager, value],
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
        setDate({ value: draftState, callOnChange: true, closePicker: closeOnConfirm });
        onConfirm?.(draftState);
      },
      onDismiss: () => {
        setIsOpen(false);
      },
    }),
    [setDate, isOpen, draftState, valueManager, setIsOpen, closeOnConfirm, onConfirm],
  );

  const pickerProps = React.useMemo<PickerStatePickerProps<TValue>>(
    () => ({
      value: draftState,
      onValueChange: (value) => {
        setDraftState(value);
        openNext();
      },
    }),
    [draftState, setDraftState, openNext],
  );

  const inputProps = React.useMemo<PickerStateInputProps<TValue>>(
    () => ({
      onChange,
      open: isOpen,
      value,
      openPicker: () => setIsOpen(true),
    }),
    [onChange, isOpen, setIsOpen, value],
  );

  return { pickerProps, inputProps, wrapperProps };
};
