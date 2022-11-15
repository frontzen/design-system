import * as React from 'react';
import { createSvgIcon } from '../mui';

export const Redo = createSvgIcon(
  <React.Fragment>
    <path
      d="M16.87 18.31h-8c-2.76 0-5-2.24-5-5s2.24-5 5-5h11"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m17.57 10.81 2.56-2.56-2.56-2.56"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </React.Fragment>,
  'Redo',
);
