import React from 'react';
import Button from '../../Button';
import InfoBlock from './InfoBlock';

function Btn({ text, iconName }) {
  return (
    <Button className="btn btn-blue-border btn-bold btn-blue-hover btn-with-icon">
      <div className="button-content">
        <span className={`icon icon-${iconName}`} />
        <span className="btn-text">{text}</span>
      </div>
    </Button>
  );
}

function InfoBtnsList({ items }) {
  return (
    <InfoBlock
      className="info-block--btns"
    >
      {items.map(props => (
        <Btn key={props.text} {...props} />
      ))}
    </InfoBlock>
  );
}

export default InfoBtnsList;
