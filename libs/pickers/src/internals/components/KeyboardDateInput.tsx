import { Calendar as CalendarIcon } from '@front.zen/design-system';
import { IconButton, InputAdornment } from '@mui/material';
import * as React from 'react';
import { useMaskedInput } from 'src/internals/hooks/useMaskedInput';
import { useLocaleText, useUtils } from 'src/internals/hooks/useUtils';
import { DateInputProps } from './PureDateInput';

export const KeyboardDateInput = React.forwardRef(function KeyboardDateInput<TDate>(
  props: DateInputProps<TDate>,
  ref: React.Ref<HTMLDivElement>,
) {
  const {
    className,
    components = {},
    disableOpenPicker,
    InputAdornmentProps,
    InputProps,
    inputRef,
    openPicker,
    OpenPickerButtonProps,
    renderInput,
    ...other
  } = props;

  const localeText = useLocaleText<TDate>();

  const utils = useUtils<TDate>();
  const textFieldProps = useMaskedInput(other);
  const adornmentPosition = InputAdornmentProps?.position || 'end';
  const OpenPickerIcon = components.OpenPickerIcon || CalendarIcon;

  return renderInput({
    ref,
    inputRef,
    className,
    ...textFieldProps,
    InputProps: {
      ...InputProps,
      [`${adornmentPosition}Adornment`]: disableOpenPicker ? undefined : (
        <InputAdornment position={adornmentPosition} {...InputAdornmentProps}>
          <IconButton
            edge={adornmentPosition}
            disabled={other.disabled || other.readOnly}
            aria-label={localeText?.openDatePickerDialogue(other.value, utils)}
            {...OpenPickerButtonProps}
            onClick={openPicker}
          >
            <OpenPickerIcon />
          </IconButton>
        </InputAdornment>
      ),
    },
  });
});
