import React from 'react';

function Item({ iconName, text }) {
  return (
    <div className="panel panel-default panel-btn">
      <a href="javascript:void;">
        <i className={`icon icon-${iconName}`} />
        <span>{text}</span>
      </a>
    </div>
  );
}

export default function RightSidebar() {
  return (
    <div className="col-xs-3 right-sidebar">
      <Item
        iconName="hand"
        text="Propose New Lesson"
      />
      <Item
        iconName="new"
        text="Start New Promotion"
      />
      <Item
        iconName="share"
        text="Share Your Project"
      />
    </div>
  );
}
