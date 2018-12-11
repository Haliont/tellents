import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';

function ListItemLink({
  to,
  liProps,
  children,
  activeClassName,
  activeOnlyWhenExact,
  ...rest
}) {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
    >{({ match }) => (
      <li className={match ? activeClassName : ''} {...liProps}>
        <Link to={to} {...rest}>{children}</Link>
      </li>
    )}
    </Route>
  );
}

ListItemLink.defaultProps = {
  liProps: {},
  activeClassName: 'active',
  activeOnlyWhenExact: false,
};

ListItemLink.propTypes = {
  to: PropTypes.string.isRequired,
  liProps: PropTypes.instanceOf(Object),
  activeClassName: PropTypes.string,
  activeOnlyWhenExact: PropTypes.bool,
};

export default ListItemLink;
