import React from 'react';

export const EditorValue = React.forwardRef(({ className, value, ...props }, ref) => {
  const textLines = value.document.nodes
    .map((node) => node.text)
    .toArray()
    .join('\n');
  return (
    <div ref={ref} {...props} className="">
      <div>Slate's value as text</div>
      <div>{textLines}</div>
    </div>
  );
});
