import * as React from 'react';
import { createSvgIcon } from '../mui';

export const ArrowDown = createSvgIcon(
  <React.Fragment>
    <path
      d="M18.07 14.43 12 20.5l-6.07-6.07M12 3.5v16.83"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </React.Fragment>,
  'ArrowDown',
);
