import { SvgIcon, SvgIconProps } from '@mui/material';

export function CurveChecked(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M8,0h8c4.4,0,8,3.6,8,8v8c0,4.4-3.6,8-8,8H8c-4.4,0-8-3.6-8-8V8C0,3.6,3.6,0,8,0z" />
      <path
        d="M9.9,17.1c-0.2,0-0.5-0.1-0.6-0.3L5,12.6c-0.4-0.4-0.4-0.9,0-1.3s0.9-0.4,1.3,0L9.9,15l7.9-7.9
	c0.4-0.4,0.9-0.3,1.3,0c0.4,0.4,0.4,0.9,0,1.3l-8.5,8.5C10.3,17.1,10.1,17.1,9.9,17.1z"
      />
    </SvgIcon>
  );
}
