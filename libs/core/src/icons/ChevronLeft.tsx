import * as React from 'react';
import { createSvgIcon } from '../mui';

export const ChevronLeft = createSvgIcon(
  <React.Fragment>
    <path
      d="M15 19.92 8.48 13.4c-.77-.77-.77-2.03 0-2.8L15 4.08"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </React.Fragment>,
  'ChevronLeft',
);
