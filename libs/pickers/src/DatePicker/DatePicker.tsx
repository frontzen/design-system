import { useThemeProps } from '@mui/material/styles';
import * as React from 'react';
import { CalendarOrClockPicker } from 'src/internals/components/CalendarOrClockPicker';
import { KeyboardDateInput } from 'src/internals/components/KeyboardDateInput';
import { ExportedDateInputProps } from 'src/internals/components/PureDateInput';
import {
  PopperWrapper,
  PopperWrapperSlotsComponent,
  PopperWrapperSlotsComponentsProps,
} from 'src/internals/components/wrappers/PopperWrapper';
import { usePickerState } from 'src/internals/hooks/usePickerState';
import { useUtils } from 'src/internals/hooks/useUtils';
import { BaseDateValidationProps } from 'src/internals/hooks/validation/models';
import { DateValidationError } from 'src/internals/hooks/validation/useDateValidation';
import { useValidation, ValidationCommonProps } from 'src/internals/hooks/validation/useValidation';
import { DateView } from 'src/internals/models';
import { BasePickerProps, PickerVariant } from 'src/internals/models/props/basePickerProps';
import { singleItemValueManager } from 'src/internals/utils/valueManagers';
import { getDatePickerDefaultizedProps } from './shared';

export interface DatePickerSlotsComponent extends PopperWrapperSlotsComponent {}

export interface DatePickerSlotsComponentsProps extends PopperWrapperSlotsComponentsProps {}

export interface DatePickerProps<TDate>
  extends ValidationCommonProps<DateValidationError, TDate | null>,
    BasePickerProps<TDate | null>,
    BaseDateValidationProps<TDate>,
    ExportedDateInputProps<TDate> {
  /**
   * Callback fired on view change.
   * @param {DateView} view The new view.
   */
  onViewChange?: (view: DateView) => void;
  /**
   * First view to show.
   * Must be a valid option from `views` list
   * @default 'day'
   */
  openTo?: DateView;
  /**
   * Array of views to show.
   * @default ['year', 'day']
   */
  views?: readonly DateView[];
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

const WrapperDict = {
  popper: PopperWrapper,
  modal: React.Fragment,
} satisfies Record<PickerVariant, React.ElementType>;

type DatePickerComponent = <TDate>(props: DatePickerProps<TDate> & React.RefAttributes<HTMLDivElement>) => JSX.Element;

export const DatePicker = React.forwardRef(function DatePicker<TDate>(
  inProps: DatePickerProps<TDate>,
  ref: React.Ref<HTMLDivElement>,
) {
  const props = useThemeProps({ props: inProps, name: 'ZenDatePicker' });

  const utils = useUtils<TDate>();

  const { variant, ...mergedProps } = getDatePickerDefaultizedProps<TDate>(props, utils);

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

  const Wrapper = WrapperDict[variant];

  return (
    <Wrapper
      {...wrapperProps}
      DateInputProps={AllDateInputProps}
      DateInputComponent={KeyboardDateInput}
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
    </Wrapper>
  );
}) as DatePickerComponent;
