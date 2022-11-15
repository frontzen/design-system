import * as React from 'react';
import { createSvgIcon } from '../mui';

export const ArrowLeft = createSvgIcon(
  <React.Fragment>
    <path
      d="M9.57 5.93 3.5 12l6.07 6.07M20.5 12H3.67"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </React.Fragment>,
  'ArrowLeft',
);
