import * as React from 'react';
import { createSvgIcon } from '../mui';

export const Forbidden = createSvgIcon(
  <React.Fragment>
    <path
      d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10Z"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M19.071 4.929 4.929 19.07" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
  </React.Fragment>,
  'Forbidden',
);
