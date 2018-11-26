import React from 'react';
import { Link } from 'react-router-dom';

function NavList({ links }) {
  return (
    <div className="nav-list">
      <ul className="flexbox justify-space-between">
        {links.map(({ name, path }) => (
          <li key={name}>
            <Link to={path}>
              {name}
              <div className="caret" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavList;
