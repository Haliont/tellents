import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import PanelDefault from './PanelDefault';

function Preview({
  className, isOpen, isEven, children, onOpen, onScroll,
}) {
  return (
    <PanelDefault
      className={cn(
        'job-box',
        isOpen && 'open',
        isEven && 'right-details',
        !isEven && 'left-details',
        className,
      )}
      onClick={isOpen
        ? onScroll
        : onOpen
      }
    >
      {children}
    </PanelDefault>
  );
}

Preview.defaultProps = {
  className: '',
};

Preview.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  isEven: PropTypes.bool.isRequired,
  onOpen: PropTypes.func.isRequired,
  onScroll: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Preview;
