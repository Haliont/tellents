import React from 'react';
import cn from 'classnames';

function DropdownContentBody({ className, children }) {
  return (
    <div className={cn('job-details-right-body', className)}>
      {children}
    </div>
  );
}

export default DropdownContentBody;
