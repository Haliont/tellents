import React from 'react';
import PropTypes from 'prop-types';

import Panel from './Panel';

function PromotionItem({ title, description }) {
  return (
    <Panel
      className="flexbox justify-space-between"
      color="blue"
    >
      <div>
        {title && (
          <div className="other-title">
            {title}
          </div>
        )}

        {description && (
          <div className="other-description">
            {description}
          </div>
        )}
      </div>
      <span className="btn btn-blue-border btn-bold">Free</span>
    </Panel>
  );
}

function PromotionsList({ items }) {
  if (!items.length) {
    return (
      <PromotionItem
        description="User has not promoted himself yet"
      />
    );
  }

  return items.map((_, inx) => (
    <PromotionItem title={`Promotion ${inx}`} />
  ));
}

PromotionsList.defaultProps = {
  items: [],
};

PromotionsList.propTypes = {
  items: PropTypes.instanceOf(Array),
};

export default PromotionsList;
