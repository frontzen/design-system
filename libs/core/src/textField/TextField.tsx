import {
  FormControl,
  FormControlProps,
  FormHelperTextProps,
  FormLabelProps,
  OutlinedInput,
  OutlinedInputProps,
} from '@mui/material';
import { FormHelperText } from '../formHelperText';
import { FormLabel } from '../formLabel';

export interface TextFieldProps extends Omit<OutlinedInputProps, 'select'> {
  helperText?: string;
  formLabelProps?: FormLabelProps;
  formControlProps?: FormControlProps;
  formHelperTextProps?: FormHelperTextProps;
}

export const TextField: React.FC<TextFieldProps> = ({
  label,
  helperText,
  formLabelProps,
  formControlProps,
  formHelperTextProps,
  ...textFieldProps
}) => {
  const { fullWidth, disabled, error, warning, size } = textFieldProps;

  return (
    <FormControl disabled={disabled} fullWidth={fullWidth} {...formControlProps}>
      {label && (
        <FormLabel
          fontSize={size === 'small' ? 'small' : 'default'}
          {...formLabelProps}
          sx={{ mb: 0.5, ...formLabelProps?.sx }}
        >
          {label}
        </FormLabel>
      )}

      <OutlinedInput {...textFieldProps} />

      {helperText && (
        <FormHelperText error={error} warning={warning} {...formHelperTextProps}>
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
};
