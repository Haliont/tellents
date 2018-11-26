import React from 'react';
import { Link } from 'react-router-dom';

export default function PageSwitcher() {
  return (
    <>
      <ul>
        <li>
          <Link to="/dashboard/search">Поиск</Link>
        </li>
        <li>
          <Link to="/dashboard/skills">Скиллы</Link>
        </li>
      </ul>
    </>
  );
}
