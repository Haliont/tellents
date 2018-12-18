import React from 'react';
import Panel from './Panel';

const PanelDefault = React.forwardRef((props, ref) => (
  <Panel {...props} isDefault ref={ref} />
));

PanelDefault.displayName = 'PanelDefault';

export default PanelDefault;
