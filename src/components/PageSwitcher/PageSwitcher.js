import React from 'react';
import { Link } from 'react-router-dom';

export default function PageSwitcher({ signOut }) {
  return (
    <>
      <button type="button" onClick={() => signOut()}>
        Sign Out
      </button>
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
