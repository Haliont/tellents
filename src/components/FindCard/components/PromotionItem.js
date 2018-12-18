import React from 'react';
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

export default PromotionItem;
