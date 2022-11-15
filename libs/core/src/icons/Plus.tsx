import * as React from 'react';
import { createSvgIcon } from '../mui';

export const Plus = createSvgIcon(
  <React.Fragment>
    <path
      d="M6 12h12M12 18V6"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </React.Fragment>,
  'Plus',
);
