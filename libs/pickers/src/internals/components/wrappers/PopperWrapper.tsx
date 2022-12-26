import { unstable_useForkRef as useForkRef } from '@mui/utils';
import * as React from 'react';
import { PickerStateWrapperProps } from 'src/internals/hooks/usePickerState';
import { PickersPopper, PickersPopperSlotsComponent, PickersPopperSlotsComponentsProps } from '../PickersPopper';
import { DateInputSlotsComponent } from '../PureDateInput';
import { DateInputPropsLike } from './WrapperProps';

export interface PopperWrapperSlotsComponent extends PickersPopperSlotsComponent, DateInputSlotsComponent {}

export interface PopperWrapperSlotsComponentsProps extends PickersPopperSlotsComponentsProps {}

export interface PopperWrapperProps extends PickerStateWrapperProps {
  children?: React.ReactNode;
  DateInputProps: DateInputPropsLike & { ref?: React.Ref<HTMLDivElement> };
  DateInputComponent: React.JSXElementConstructor<DateInputPropsLike & { ref?: React.Ref<HTMLDivElement> }>;
  /**
   * Overrideable components.
   * @default {}
   */
  components?: PopperWrapperSlotsComponent;
  /**
   * The props used for each component slot.
   * @default {}
   */
  componentsProps?: PopperWrapperSlotsComponentsProps;
}

export function PopperWrapper(props: PopperWrapperProps) {
  const {
    children,
    DateInputProps,
    DateInputComponent,
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
      <DateInputComponent {...DateInputProps} inputRef={inputRef} />
      <PickersPopper
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
