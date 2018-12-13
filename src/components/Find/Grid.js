import React from 'react';

export const Row = ({ className = '', children }) => (
  <div className={`row flexbox ${className}`}>
    {children}
  </div>
);

export const Left = ({ children }) => (
  <div className="col-xs-2 left-sidebar">
    {children}
  </div>
);

export const Right = ({ className = '', children }) => (
  <div className={`col-xs-10 ${className}`}>
    {children}
  </div>
);
