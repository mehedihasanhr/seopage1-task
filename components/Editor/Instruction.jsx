import React from 'react';
export const Instruction = React.forwardRef(({ className, ...props }, ref) => (
  <div {...props} ref={ref} className="" />
));
