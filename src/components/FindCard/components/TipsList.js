import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Tip from './Tip';

function TipsList({ className, items }) {
  return (
    <div className={cn('job-box-tips', className)}>
      {items.map(({ id, ...rest }) => (
        <Tip key={id} {...rest} />
      ))}
    </div>
  );
}

TipsList.defaultProps = {
  className: '',
};

TipsList.propTypes = {
  className: PropTypes.string,
};

export default TipsList;
