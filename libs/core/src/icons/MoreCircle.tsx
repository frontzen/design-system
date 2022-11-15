import * as React from 'react';
import { createSvgIcon } from '../mui';

export const MoreCircle = createSvgIcon(
  <React.Fragment>
    <path
      d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10Z"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.996 12h.01M11.995 12h.01M7.995 12h.008"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </React.Fragment>,
  'MoreCircle',
);
