import { SvgIcon, SvgIconProps } from '@mui/material';

export function Indeterminate(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M4.8,0h14.4C21.9,0,24,2.1,24,4.8v14.4c0,2.7-2.1,4.8-4.8,4.8H4.8C2.1,24,0,21.9,0,19.2V4.8C0,2.1,2.1,0,4.8,0z" />
      <path
        d="M17.4,13.2H6.6c-0.7,0-1.3-0.5-1.3-1.2c0-0.7,0.6-1.2,1.3-1.2h10.8c0.7,0,1.4,0.5,1.4,1.2
		C18.8,12.7,18.1,13.2,17.4,13.2z"
      />
    </SvgIcon>
  );
}
