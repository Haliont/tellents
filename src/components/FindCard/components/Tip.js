import React from 'react';
import PropTypes from 'prop-types';
import { stringify } from '../../../utils';

function Tip({
  text,
  iconName,
  iconComponent: IconComponent,
}) {
  return (
    <div className="tip">
      {IconComponent
        ? <IconComponent />
        : <span className={`icon icon-${iconName}`} />
      }
      {<span className="text">{stringify(text)}</span>}
    </div>
  );
}

Tip.defaultProps = {
  text: '',
  iconName: '',
  iconComponent: null,
};

Tip.propTypes = {
  text: PropTypes.string,
  iconName: PropTypes.string,
  iconComponent: PropTypes.func,
};

export default Tip;
