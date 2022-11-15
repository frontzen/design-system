import * as React from 'react';
import { createSvgIcon } from '../mui';

export const CloseSquare = createSvgIcon(
  <React.Fragment>
    <path
      d="M9 14.66 14.66 9M14.66 14.66 9 9M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </React.Fragment>,
  'CloseSquare',
);
