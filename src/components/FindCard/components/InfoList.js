import React from 'react';
import InfoBlock from './InfoBlock';

function InfoList({ items }) {
  return items.map((props, inx) => (
    // eslint-disable-next-line
    <InfoBlock key={inx + 1} {...props} />
  ));
}

export default InfoList;
