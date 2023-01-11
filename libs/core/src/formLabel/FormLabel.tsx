import { FormLabel as MuiFormLabel, FormLabelProps as MuiFormLabelProps, styled } from '@mui/material';
import { expectProps } from '../utils';

export interface FormLabelProps extends MuiFormLabelProps {
  fontSize?: 'small' | 'default';
}

export const FormLabel = styled(MuiFormLabel, {
  shouldForwardProp: expectProps('fontSize'),
})<FormLabelProps>(({ fontSize }) => ({
  ...(fontSize === 'small' && { fontSize: '0.75rem' }),
}));
