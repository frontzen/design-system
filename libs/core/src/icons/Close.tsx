import * as React from 'react';
import { createSvgIcon } from '../mui';

export const Close = createSvgIcon(
  <React.Fragment>
    <path
      d="m7.757 16.243 8.486-8.486M16.243 16.243 7.757 7.757"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </React.Fragment>,
  'Close',
);
