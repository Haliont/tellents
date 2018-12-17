import React from 'react';

function PreviewHeader({ children }) {
  return (
    <div className="job-box-header flexbox justify-space-between">
      {children}
    </div>
  );
}

export default PreviewHeader;
