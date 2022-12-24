import { useThemeProps } from '@mui/material/styles';
import * as React from 'react';
import {
  DesktopDatePicker,
  DesktopDatePickerProps,
  DesktopDatePickerSlotsComponent,
  DesktopDatePickerSlotsComponentsProps,
} from 'src/DesktopDatePicker';
import { useUtils } from 'src/internals/hooks/useUtils';
import { PickerViewsProvider } from 'src/internals/providers/PickerViewsProvider';
import { getDatePickerDefaultizedProps } from './shared';

export interface DatePickerSlotsComponent extends DesktopDatePickerSlotsComponent {}

export interface DatePickerSlotsComponentsProps extends DesktopDatePickerSlotsComponentsProps {}

export interface DatePickerProps<TDate> extends Omit<DesktopDatePickerProps<TDate>, 'components' | 'componentsProps'> {
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

  const { views, openTo, onViewChange, ...rest } = getDatePickerDefaultizedProps<TDate, DatePickerProps<TDate>>(
    props,
    utils,
  );

  // We can add MobileDatePicker here later

  return (
    <PickerViewsProvider views={views} openTo={openTo} onViewChange={onViewChange}>
      <DesktopDatePicker ref={ref} {...rest} />
    </PickerViewsProvider>
  );
}) as DatePickerComponent;
