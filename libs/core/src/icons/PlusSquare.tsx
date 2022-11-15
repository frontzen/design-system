import * as React from 'react';
import { createSvgIcon } from '../mui';

export const PlusSquare = createSvgIcon(
  <React.Fragment>
    <path d="M15.75 12.5h-8a.75.75 0 1 1 0-1.5h8a.75.75 0 1 1 0 1.5Z" fill="currentColor" />
    <path d="M11.75 16.5a.755.755 0 0 1-.75-.75v-8a.75.75 0 1 1 1.5 0v8a.755.755 0 0 1-.75.75Z" fill="currentColor" />
    <path
      d="M14.75 22.5h-6C3.32 22.5 1 20.18 1 14.75v-6C1 3.32 3.32 1 8.75 1h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.14 2.5 2.5 4.14 2.5 8.75v6C2.5 19.36 4.14 21 8.75 21h6c4.61 0 6.25-1.64 6.25-6.25v-6c0-4.61-1.64-6.25-6.25-6.25h-6Z"
      fill="currentColor"
    />
  </React.Fragment>,
  'PlusSquare',
);
