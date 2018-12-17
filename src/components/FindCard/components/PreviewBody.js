import React from 'react';
import cn from 'classnames';

function PreviewBody({ className, children }) {
  return (
    <div
      className={cn(
        'job-box-body',
        className,
      )}
    >
      {children}
    </div>
  );
}

export default PreviewBody;
