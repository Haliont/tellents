import React from 'react';
// import PropTypes from 'prop-types';
import cn from 'classnames';
import { stringify } from '../../../utils';

function InfoBlock({
  className, title, text, children,
}) {
  return (
    <div className={cn('info-block', className)}>
      {title && (
        <div className="title">
          {title}
        </div>
      )}

      {text && (
        <div className="text">
          {stringify(text)}
        </div>
      )}

      {children}
    </div>
  );
}

export default InfoBlock;
