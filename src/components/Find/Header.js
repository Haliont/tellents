import React from 'react';
import PropTypes from 'prop-types';
import SearchForm from '../SearchForm';
import HelloBlock from '../HelloBlock';
import { Row, Left, Right } from './Grid';

function Header({ username }) {
  return (
    <Row
      className="content-header"
    >
      <Left>
        <HelloBlock username={username} />
      </Left>
      <Right>
        <SearchForm />
      </Right>
    </Row>
  );
}

Header.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Header;
