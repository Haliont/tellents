import React from 'react';
import PropTypes from 'prop-types';
import PromotionItem from './PromotionItem';

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
