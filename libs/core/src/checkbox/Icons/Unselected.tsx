import { SvgIcon, SvgIconProps } from '@mui/material';

export function Unselected(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M20,24H4c-2.2,0-4-1.8-4-4V4c0-2.2,1.8-4,4-4h16c2.2,0,4,1.8,4,4v16C24,22.2,22.2,24,20,24z" />
      <path
        d="M20,24H4c-2.2,0-4-1.8-4-4V4c0-2.2,1.8-4,4-4h16c2.2,0,4,1.8,4,4v16C24,22.2,22.2,24,20,24z M4,1
	C2.3,1,1,2.3,1,4v16c0,1.7,1.3,3,3,3h16c1.7,0,3-1.3,3-3V4c0-1.7-1.3-3-3-3H4z"
      />
    </SvgIcon>
  );
}
