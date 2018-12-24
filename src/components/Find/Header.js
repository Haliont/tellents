import React from 'react';
import PropTypes from 'prop-types';
import SearchForm from '../SearchForm';
import HelloBlock from '../HelloBlock';
import { Row, Left, Right } from './Grid';

function Header({
  username, searchObject, filterCards,
}) {
  return (
    <Row
      className="content-header"
    >
      <Left>
        <HelloBlock username={username} />
      </Left>
      <Right>
        <SearchForm
          filterCards={filterCards}
          searchObject={searchObject}
        />
      </Right>
    </Row>
  );
}

Header.propTypes = {
  searchObject: PropTypes.oneOf(['talent', 'job']).isRequired,
  filterCards: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
};

export default Header;
