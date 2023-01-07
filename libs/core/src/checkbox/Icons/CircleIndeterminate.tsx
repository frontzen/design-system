import { SvgIcon, SvgIconProps } from '@mui/material';

export function CircleIndeterminate(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M12,0L12,0c6.6,0,12,5.4,12,12v0c0,6.6-5.4,12-12,12h0C5.4,24,0,18.6,0,12v0C0,5.4,5.4,0,12,0z" />
      <path
        d="M17.4,13.2H6.6c-0.7,0-1.3-0.5-1.3-1.2s0.6-1.2,1.3-1.2h10.8c0.7,0,1.4,0.5,1.4,1.2
		C18.8,12.7,18.1,13.2,17.4,13.2z"
      />
    </SvgIcon>
  );
}
