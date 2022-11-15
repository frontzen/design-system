import * as React from 'react';
import { createSvgIcon } from '../mui';

export const ChevronRight = createSvgIcon(
  <React.Fragment>
    <path
      d="m8.91 19.92 6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </React.Fragment>,
  'ChevronRight',
);
