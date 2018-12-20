import React from 'react';
import ListItemLink from '../ListItemLink';

function NavList({ links }) {
  return (
    <div className="nav-list">
      <ul className="flexbox justify-space-between">
        {links.map(({ name, path }) => (
          <ListItemLink key="name" to={path}>
            {name}
            <div className="caret" />
          </ListItemLink>
        ))}
      </ul>
    </div>
  );
}

export default NavList;
