import { SvgIcon, SvgIconProps } from '@mui/material';

export function Selected(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <rect width="24" height="24" rx="12" />
      <rect x="7" y="7" width="10" height="10" rx="5" />{' '}
    </SvgIcon>
  );
}
