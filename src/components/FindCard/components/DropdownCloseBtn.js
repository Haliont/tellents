import React from 'react';
import Button from '../../Button';

function DropdownCloseBtn({ onClick }) {
  return (
    <Button
      onClick={onClick}
      className="btn btn-bg-transparent close-btn icon-btn"
    >
      <span className="glyphicon glyphicon-remove" />
    </Button>
  );
}

export default DropdownCloseBtn;
