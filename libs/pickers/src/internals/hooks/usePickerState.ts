import * as React from 'react';
import { useUtils } from 'src/internals/hooks/useUtils';
import { PickersAdapter } from 'src/LocalizationProvider';
import { DateOrTimeView } from '../models';
import { useOpenState } from './useOpenState';
import { useViews } from './useViews';

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

export const usePickerState = <TValue, TDate, TView extends DateOrTimeView>(
  props: PickerStateProps<TValue, TView>,
  valueManager: PickerStateValueManager<TValue, TDate>,
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
    }),
    [setDate, isOpen, draftState, valueManager, setIsOpen, closeOnConfirm],
  );

  const pickerProps = React.useMemo<PickerStatePickerProps<TValue>>(
    () => ({
      value: draftState,
      onValueChange: setDraftState,
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
      value: draftState,
      openPicker: () => setIsOpen(true),
    }),
    [onChange, isOpen, setIsOpen, draftState],
  );

  const pickerState: PickerState<TValue> = { pickerProps, inputProps, wrapperProps };

  return pickerState;
};
