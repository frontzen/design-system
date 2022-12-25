import { IconButtonProps } from '@mui/material/IconButton';
import { InputAdornmentProps } from '@mui/material/InputAdornment';
import { TextFieldProps as MuiTextFieldPropsType } from '@mui/material/TextField';

export type MuiTextFieldProps = MuiTextFieldPropsType | Omit<MuiTextFieldPropsType, 'variant'>;

export interface DateInputSlotsComponent {
  /**
   * Icon displayed in the open picker button.
   * @default Calendar or Clock
   */
  OpenPickerIcon?: React.ElementType;
}

export interface DateInputProps<TDate> {
  /**
   * Regular expression to detect "accepted" symbols.
   * @default /\dap/gi
   */
  acceptRegex?: RegExp;
  className?: string;
  /**
   * Overrideable components.
   * @default {}
   */
  components?: DateInputSlotsComponent;
  disabled?: boolean;
  /**
   * Disable mask on the keyboard, this should be used rarely. Consider passing proper mask for your format.
   * @default false
   */
  disableMaskedInput?: boolean;
  /**
   * Do not render open picker button (renders only text field with validation).
   * @default false
   */
  disableOpenPicker?: boolean;
  // ?? TODO when it will be possible to display "empty" date in datepicker use it instead of ignoring invalid inputs.
  ignoreInvalidInputs?: boolean;
  /**
   * Props to pass to keyboard input adornment.
   */
  InputAdornmentProps?: Partial<InputAdornmentProps>;
  inputFormat: string;
  InputProps?: MuiTextFieldProps['InputProps'];
  /**
   * Pass a ref to the `input` element.
   */
  inputRef?: React.Ref<HTMLInputElement>;
  label?: MuiTextFieldProps['label'];
  /**
   * Custom mask. Can be used to override generate from format. (e.g. `__/__/____ __:__` or `__/__/____ __:__ _M`).
   */
  mask?: string;
  // lib/src/wrappers/DesktopPopperWrapper.tsx:87
  onBlur?: () => void;
  onChange: (date: TDate | null, keyboardInputValue?: string) => void;
  open: boolean;
  openPicker: () => void;
  /**
   * Props to pass to keyboard adornment button.
   */
  OpenPickerButtonProps?: Partial<IconButtonProps>;
  value: TDate | null;
  readOnly?: boolean;
  /**
   * The `renderInput` prop allows you to customize the rendered input.
   * The `props` argument of this render prop contains props of [TextField](https://mui.com/material-ui/api/text-field/#props) that you need to forward.
   * Pay specific attention to the `ref` and `inputProps` keys.
   * @example ```jsx
   * renderInput={props => <TextField {...props} />}
   * ````
   * @param {MuiTextFieldPropsType} props The props of the input.
   * @returns {React.ReactNode} The node to render as the input.
   */
  renderInput: (props: Omit<MuiTextFieldProps, 'variant'>) => React.ReactElement;
  /**
   * Custom formatter to be passed into Rifm component.
   * @param {string} str The un-formatted string.
   * @returns {string} The formatted string.
   */
  rifmFormatter?: (str: string) => string;
  TextFieldProps?: Partial<MuiTextFieldProps>;
  validationError?: string;
}