import { PickerStateProps } from 'src/internals/hooks/usePickerState';

export interface BasePickerProps<TValue> extends PickerStateProps<TValue> {
  /**
   * className applied to the root component.
   */
  className?: string;
  /**
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * Format string.
   */
  inputFormat?: string;
  /**
   * Make picker read only.
   * @default false
   */
  readOnly?: boolean;
}
