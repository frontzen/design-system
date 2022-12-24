import { useThemeProps } from '@mui/material/styles';
import * as React from 'react';
import { BaseDatePickerProps } from 'src/DatePicker/shared';
import { CalendarOrClockPicker } from 'src/internals/components/CalendarOrClockPicker';
import { KeyboardDateInput } from 'src/internals/components/KeyboardDateInput';
import {
  DesktopWrapper,
  DesktopWrapperSlotsComponent,
  DesktopWrapperSlotsComponentsProps,
} from 'src/internals/components/wrappers/DesktopWrapper';
import { usePickerState } from 'src/internals/hooks/usePickerState';
import { useValidation } from 'src/internals/hooks/validation/useValidation';
import { singleItemValueManager } from 'src/internals/utils/valueManagers';

export interface DesktopDatePickerSlotsComponent extends DesktopWrapperSlotsComponent {}

export interface DesktopDatePickerSlotsComponentsProps extends DesktopWrapperSlotsComponentsProps {}

export interface DesktopDatePickerProps<TDate>
  extends Omit<BaseDatePickerProps<TDate>, 'components' | 'componentsProps'> {
  children?: React.ReactNode;
  /**
   * Overrideable components.
   * @default {}
   */
  components?: DesktopDatePickerSlotsComponent;
  /**
   * The props used for each component slot.
   * @default {}
   */
  componentsProps?: DesktopDatePickerSlotsComponentsProps;
}

interface InternalDesktopDatePickerProps<TDate> extends DesktopDatePickerProps<TDate> {
  inputFormat: string;
}

type DesktopDatePickerComponent = <TDate>(
  props: DesktopDatePickerProps<TDate> & React.RefAttributes<HTMLDivElement>,
) => JSX.Element;

export const DesktopDatePicker = React.forwardRef(function DesktopDatePicker<TDate>(
  inProps: InternalDesktopDatePickerProps<TDate>,
  ref: React.Ref<HTMLDivElement>,
) {
  const props = useThemeProps({ props: inProps, name: 'ZenDesktopDatePicker' });

  const validationError = useValidation(props, 'date', null);
  const { pickerProps, inputProps, wrapperProps } = usePickerState(props, singleItemValueManager);

  const { onChange, value, components, componentsProps, ...other } = props;
  const AllDateInputProps = {
    ...inputProps,
    ...other,
    components,
    componentsProps,
    ref,
    validationError,
  };

  return (
    <DesktopWrapper
      {...wrapperProps}
      DateInputProps={AllDateInputProps}
      KeyboardDateInputComponent={KeyboardDateInput}
      components={components}
      componentsProps={componentsProps}
    >
      <CalendarOrClockPicker
        {...pickerProps}
        autoFocus
        DateInputProps={AllDateInputProps}
        components={components}
        componentsProps={componentsProps}
        {...other}
      />
    </DesktopWrapper>
  );
}) as DesktopDatePickerComponent;
