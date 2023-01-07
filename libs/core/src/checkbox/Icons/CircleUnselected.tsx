import { SvgIcon, SvgIconProps } from '@mui/material';

export function CircleUnselected(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path
        d="M12,0.5L12,0.5c6.4,0,11.5,5.1,11.5,11.5l0,0c0,6.4-5.1,11.5-11.5,11.5l0,0C5.6,23.5,0.5,18.4,0.5,12l0,0
		C0.5,5.6,5.6,0.5,12,0.5z"
      />
      <path
        d="M12,24C5.4,24,0,18.6,0,12C0,5.4,5.4,0,12,0c6.6,0,12,5.4,12,12C24,18.6,18.6,24,12,24z M12,1
		C5.9,1,1,5.9,1,12s4.9,11,11,11s11-4.9,11-11S18.1,1,12,1z"
      />
    </SvgIcon>
  );
}
