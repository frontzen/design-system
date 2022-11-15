import * as React from 'react';
import { createSvgIcon } from '../mui';

export const ArrowUp = createSvgIcon(
  <React.Fragment>
    <path
      d="M18.07 9.57 12 3.5 5.93 9.57M12 20.5V3.67"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </React.Fragment>,
  'ArrowUp',
);
