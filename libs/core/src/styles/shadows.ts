import { Shadows } from '@mui/material';

export const createShadows = (defaultShadows: Shadows): Shadows =>
  Object.assign(defaultShadows, {
    2: '0px 1px 2px 0px rgba(0,0,0,0.10)', // Raised
    8: '0px 4px 8px 0px rgba(0,0,0,0.10)', // Overlay
    12: '0px 6px 12px 0px rgba(0,0,0,0.10)', // Sticky Nav
    16: '0px 8px 16px 0px rgba(0,0,0,0.10)', // Temporary Nav
    24: '0px 12px 24px 0px rgba(0,0,0,0.10)', // Pop out
  });
