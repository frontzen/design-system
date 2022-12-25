import { PickerStateProps } from 'src/internals/hooks/usePickerState';
import { UseViewsProps } from 'src/internals/hooks/useViews';

export type PickerVariant = 'popover' | 'modal';

export interface BasePickerProps<TValue> extends Omit<PickerStateProps<TValue, any>, keyof UseViewsProps<any>> {
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
  /**
   * Variant of picker
   * @default "popover"
   */
  variant?: PickerVariant;
}
