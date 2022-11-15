import * as React from 'react';
import { createSvgIcon } from '../mui';

export const Download = createSvgIcon(
  <React.Fragment>
    <path
      d="M4 22h17"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 6v11.52M16 14l-4 4-4-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </React.Fragment>,
  'Download',
);
