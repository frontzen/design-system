import * as React from 'react';
import { createSvgIcon } from '../mui';

export const MinusSquare = createSvgIcon(
  <React.Fragment>
    <path
      d="M8 12h8M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </React.Fragment>,
  'MinusSquare',
);
