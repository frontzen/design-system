import { useThemeProps } from '@mui/material/styles';
import * as React from 'react';
import { CalendarOrClockPicker } from 'src/internals/components/CalendarOrClockPicker';
import { KeyboardDateInput } from 'src/internals/components/KeyboardDateInput';
import {
  PopperWrapper,
  PopperWrapperSlotsComponent,
  PopperWrapperSlotsComponentsProps,
} from 'src/internals/components/wrappers/PopperWrapper';
import { usePickerState } from 'src/internals/hooks/usePickerState';
import { useUtils } from 'src/internals/hooks/useUtils';
import { useValidation } from 'src/internals/hooks/validation/useValidation';
import { singleItemValueManager } from 'src/internals/utils/valueManagers';
import { BaseDatePickerProps, getDatePickerDefaultizedProps } from './shared';

export interface DatePickerSlotsComponent extends PopperWrapperSlotsComponent {}

export interface DatePickerSlotsComponentsProps extends PopperWrapperSlotsComponentsProps {}

export interface DatePickerProps<TDate> extends Omit<BaseDatePickerProps<TDate>, 'components' | 'componentsProps'> {
  /**
   * Overrideable components.
   * @default {}
   */
  components?: DatePickerSlotsComponent;
  /**
   * The props used for each component slot.
   * @default {}
   */
  componentsProps?: DatePickerSlotsComponentsProps;
}

type DatePickerComponent = <TDate>(props: DatePickerProps<TDate> & React.RefAttributes<HTMLDivElement>) => JSX.Element;

export const DatePicker = React.forwardRef(function DatePicker<TDate>(
  inProps: DatePickerProps<TDate>,
  ref: React.Ref<HTMLDivElement>,
) {
  const props = useThemeProps({ props: inProps, name: 'ZenDatePicker' });

  const utils = useUtils<TDate>();

  const { variant, ...mergedProps } = getDatePickerDefaultizedProps<TDate, DatePickerProps<TDate>>(props, utils);

  const validationError = useValidation(mergedProps, 'date', null);
  const { pickerProps, inputProps, wrapperProps } = usePickerState(mergedProps, singleItemValueManager);

  const { onChange, value, components, componentsProps, ...other } = mergedProps;
  const AllDateInputProps = {
    ...inputProps,
    ...other,
    components,
    componentsProps,
    ref,
    validationError,
  };

  const Wrapper =
    variant === 'popper'
      ? ({ children }: { children: React.ReactNode }) => (
          <PopperWrapper
            {...wrapperProps}
            DateInputProps={AllDateInputProps}
            KeyboardDateInputComponent={KeyboardDateInput}
            components={components}
            componentsProps={componentsProps}
          >
            {children}
          </PopperWrapper>
        )
      : () => <></>;

  return (
    <Wrapper>
      <CalendarOrClockPicker
        {...pickerProps}
        autoFocus
        DateInputProps={AllDateInputProps}
        components={components}
        componentsProps={componentsProps}
        {...other}
      />
    </Wrapper>
  );
}) as DatePickerComponent;
