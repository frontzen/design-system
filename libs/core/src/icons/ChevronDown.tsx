import * as React from 'react';
import { createSvgIcon } from '../mui';

export const ChevronDown = createSvgIcon(
  <React.Fragment>
    <path
      d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </React.Fragment>,
  'ChevronDown',
);
