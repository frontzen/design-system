import {
  FormHelperText as MuiFormHelperText,
  FormHelperTextProps as MuiFormHelperTextProps,
  styled,
} from '@mui/material';
import { expectProps } from '../utils';

export interface FormHelperTextProps extends MuiFormHelperTextProps {
  warning?: boolean;
}

export const FormHelperText = styled(MuiFormHelperText, {
  shouldForwardProp: expectProps('warning'),
})<FormHelperTextProps>(({ theme, warning }) => ({
  ...(warning && { color: theme.palette.warning.main }),
}));
