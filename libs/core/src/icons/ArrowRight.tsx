import * as React from 'react';
import { createSvgIcon } from '../mui';

export const ArrowRight = createSvgIcon(
  <React.Fragment>
    {' '}
    <path
      d="M14.43 5.93 20.5 12l-6.07 6.07M3.5 12h16.83"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </React.Fragment>,
  'ArrowRight',
);
