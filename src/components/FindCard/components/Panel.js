import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const Panel = React.forwardRef(({
  color, children, isDefault, className, onClick,
}, ref) => (
  <div
    ref={ref}
    className={cn(
      'panel',
      'panel-default',
      color && `panel-${color}`,
      isDefault && 'panel-default',
      className,
    )}
    onClick={onClick}
  >
    {children}
  </div>
));

Panel.defaultProps = {
  color: null,
  onClick: null,
  isDefault: false,
};

Panel.propTypes = {
  color: PropTypes.oneOf(['blue', 'pink', 'orange']),
  onClick: PropTypes.func,
  isDefault: PropTypes.bool,
};

export default Panel;
