import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar d-none d-md-block">
      <ul className="sidebar-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/nested-fragment">Nested Fragment</Link>
        </li>
        <li>
          <Link to="/list">List</Link>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar;