import React from 'react';
import PanelDefault from './PanelDefault';

function Dropdown({ children }) {
  return (
    <PanelDefault className="job-box-details">
      {children}
    </PanelDefault>
  );
}

export default Dropdown;
