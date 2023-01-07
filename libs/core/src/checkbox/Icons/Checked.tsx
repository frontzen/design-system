import { SvgIcon, SvgIconProps } from '@mui/material';

export function Checked(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M4.8,0h14.4C21.9,0,24,2.1,24,4.8v14.4c0,2.7-2.1,4.8-4.8,4.8H4.8C2.1,24,0,21.9,0,19.2V4.8C0,2.1,2.1,0,4.8,0z" />
      <path
        d="M9.9,17.1c-0.2,0-0.5-0.1-0.6-0.3L5,12.6c-0.4-0.4-0.4-0.9,0-1.3s0.9-0.4,1.3,0L9.9,15l7.9-7.9
c0.4-0.4,0.9-0.3,1.3,0c0.4,0.4,0.4,0.9,0,1.3l-8.5,8.5C10.3,17.1,10.1,17.1,9.9,17.1z"
      />
    </SvgIcon>
  );
}
