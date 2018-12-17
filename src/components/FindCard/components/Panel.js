import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

function Panel({
  color, children, isDefault, className, onClick,
}) {
  return (
    <div
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
  );
}

Panel.defaultProps = {
  color: null,
  onClick: null,
  isDefault: false,
};

Panel.propTypes = {
  color: PropTypes.oneOfType(['blue', 'pink', 'orange']),
  onClick: PropTypes.func,
  isDefault: PropTypes.bool,
};

export default Panel;
