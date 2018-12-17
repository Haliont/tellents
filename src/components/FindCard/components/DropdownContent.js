import React from 'react';

function DropdownContent({ children }) {
  return (
    <div className="flexbox justify-space-between">
      {children}
    </div>
  );
}

export default DropdownContent;
