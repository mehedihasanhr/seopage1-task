import React from 'react';

export const Icon = React.forwardRef(({ className, ...props }, ref) => (
  <span {...props} ref={ref} className="material-icons" />
));
