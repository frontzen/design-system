import { SvgIcon, SvgIconProps } from '@mui/material';

export function CurveIndeterminate(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M8,0h8c4.4,0,8,3.6,8,8v8c0,4.4-3.6,8-8,8H8c-4.4,0-8-3.6-8-8V8C0,3.6,3.6,0,8,0z" />
      <path
        d="M17.4,13.2H6.6c-0.7,0-1.3-0.5-1.3-1.2s0.6-1.2,1.3-1.2h10.8c0.7,0,1.4,0.5,1.4,1.2
		C18.8,12.7,18.1,13.2,17.4,13.2z"
      />
    </SvgIcon>
  );
}
