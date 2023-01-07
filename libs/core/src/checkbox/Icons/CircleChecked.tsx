import { SvgIcon, SvgIconProps } from '@mui/material';

export function CircleChecked(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M12,0L12,0c6.6,0,12,5.4,12,12v0c0,6.6-5.4,12-12,12h0C5.4,24,0,18.6,0,12v0C0,5.4,5.4,0,12,0z" />
      <path
        d="M9.9,17.1c-0.2,0-0.5-0.1-0.6-0.3L5,12.6c-0.4-0.4-0.4-0.9,0-1.3s0.9-0.4,1.3,0L9.9,15l7.9-7.9
	c0.4-0.4,0.9-0.3,1.3,0c0.4,0.4,0.4,0.9,0,1.3l-8.5,8.5C10.3,17.1,10.1,17.1,9.9,17.1z"
      />
    </SvgIcon>
  );
}
