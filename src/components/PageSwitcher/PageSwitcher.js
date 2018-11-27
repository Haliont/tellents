import React from 'react';
import { Link } from 'react-router-dom';

export default function PageSwitcher() {
  return (
    <>
      <ul>
        <li>
          <Link to="/dashboard/find/">Поиск</Link>
        </li>
        <li>
          <Link to="/dashboard/your-office/skills">Скиллы</Link>
        </li>
      </ul>
    </>
  );
}
