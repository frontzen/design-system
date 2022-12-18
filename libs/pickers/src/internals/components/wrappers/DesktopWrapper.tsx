import { unstable_useForkRef as useForkRef } from '@mui/utils';
import * as React from 'react';
import { PickerStateWrapperProps } from 'src/internals/hooks/usePickerState';
import { PickersPopper, PickersPopperSlotsComponent, PickersPopperSlotsComponentsProps } from '../PickersPopper';
import { DateInputSlotsComponent } from '../PureDateInput';
import { DateInputPropsLike } from './WrapperProps';

export interface DesktopWrapperSlotsComponent extends PickersPopperSlotsComponent, DateInputSlotsComponent {}

export interface DesktopWrapperSlotsComponentsProps extends PickersPopperSlotsComponentsProps {}

export interface DesktopWrapperProps extends PickerStateWrapperProps {
  children?: React.ReactNode;
  DateInputProps: DateInputPropsLike & { ref?: React.Ref<HTMLDivElement> };
  KeyboardDateInputComponent: React.JSXElementConstructor<DateInputPropsLike & { ref?: React.Ref<HTMLDivElement> }>;
  /**
   * Overrideable components.
   * @default {}
   */
  components?: DesktopWrapperSlotsComponent;
  /**
   * The props used for each component slot.
   * @default {}
   */
  componentsProps?: DesktopWrapperSlotsComponentsProps;
}

export function DesktopWrapper(props: DesktopWrapperProps) {
  const {
    children,
    DateInputProps,
    KeyboardDateInputComponent,
    onClear,
    onDismiss,
    onConfirm,
    open,
    components,
    componentsProps,
  } = props;
  const ownInputRef = React.useRef<HTMLInputElement>(null);
  const inputRef = useForkRef(DateInputProps.inputRef, ownInputRef);

  return (
    <>
      <KeyboardDateInputComponent {...DateInputProps} inputRef={inputRef} />
      <PickersPopper
        role="dialog"
        open={open}
        anchorEl={ownInputRef.current}
        onDismiss={onDismiss}
        onClear={onClear}
        onConfirm={onConfirm}
        components={components}
        componentsProps={componentsProps}
      >
        {children}
      </PickersPopper>
    </>
  );
}
