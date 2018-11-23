import React from 'react';
import { Link } from 'react-router-dom';

export default function PageSwitcher() {
  return (
    <ul>
      <li>
        <Link to="/private/search">Поиск</Link>
      </li>
      <li>
        <Link to="/private/skills">Скиллы</Link>
      </li>
    </ul>
  );
}
