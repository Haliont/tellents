import React from 'react';
import PanelDefault from './PanelDefault';

const Dropdown = React.forwardRef(({ children }, ref) => (
  <PanelDefault ref={ref} className="job-box-details">
    {children}
  </PanelDefault>
));

export default Dropdown;
