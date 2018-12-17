import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

function StatsList({ className, items }) {
  return (
    <div
      className={cn(
        'stat',
        'flexbox',
        'flex-wrap',
        'justify-space-center',
        className,
      )}
    >
      {items.map(({
        className: itemCn, iconName, title, text,
      }) => (
        <div key={title} className={cn('stat-block', itemCn)}>
          <span className={`icon icon-${iconName}`} />
          <span className="stat-title blue-color">{title}</span>
          <span className="stat-info">{text}</span>
        </div>
      ))}
    </div>
  );
}

StatsList.defaultProps = {
  items: [],
};

StatsList.propTypes = {
  items: PropTypes.instanceOf(Array),
};

export default StatsList;
