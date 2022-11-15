import * as React from 'react';
import { createSvgIcon } from '../mui';

export const ChevronUp = createSvgIcon(
  <React.Fragment>
    <path
      d="M19.92 15.05 13.4 8.53c-.77-.77-2.03-.77-2.8 0l-6.52 6.52"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </React.Fragment>,
  'ChevronUp',
);
