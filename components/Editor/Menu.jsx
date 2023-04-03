import React from 'react';

export const Menu = React.forwardRef(({ className, ...props }, ref) => (
  <div {...props} data-test-id="menu" ref={ref} className={`${className}`} />
));
