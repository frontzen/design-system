import * as React from 'react';
import { createSvgIcon } from '../mui';

export const Undo = createSvgIcon(
  <React.Fragment>
    <path
      d="M7.13 18.31h8c2.76 0 5-2.24 5-5s-2.24-5-5-5h-11"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.43 10.81 3.87 8.25l2.56-2.56"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </React.Fragment>,
  'Undo',
);
