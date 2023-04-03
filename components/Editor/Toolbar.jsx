// toolbar component

import React from 'react';
import { Menu } from './Menu';

export const Toolbar = React.forwardRef(({ className, ...props }, ref) => (
  <Menu {...props} ref={ref} className="relative flex" />
));
