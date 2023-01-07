import { SvgIcon, SvgIconProps } from '@mui/material';

export function CurveUnselected(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M8,0.5h8c4.1,0,7.5,3.4,7.5,7.5v8c0,4.1-3.4,7.5-7.5,7.5H8c-4.1,0-7.5-3.4-7.5-7.5V8C0.5,3.9,3.9,0.5,8,0.5z" />
      <path
        d="M16,24H8c-4.4,0-8-3.6-8-8V8c0-4.4,3.6-8,8-8h8c4.4,0,8,3.6,8,8v8C24,20.4,20.4,24,16,24z M8,1
		C4.1,1,1,4.1,1,8v8c0,3.9,3.1,7,7,7h8c3.9,0,7-3.1,7-7V8c0-3.9-3.1-7-7-7H8z"
      />
    </SvgIcon>
  );
}
