import { useThemeProps } from '@mui/material/styles';
import * as React from 'react';

export interface DatePickerProps<TDate> {
  value: TDate | null;
}

export const DatePicker = React.forwardRef(function DatePicker<TDate>(
  inProps: DatePickerProps<TDate>,
  ref: React.Ref<HTMLDivElement>,
) {
  const props = useThemeProps({ props: inProps, name: 'DatePicker' });

  return <div {...props}>DatePicker</div>;
});
