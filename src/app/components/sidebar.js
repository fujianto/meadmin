import React from 'react';
import { Link } from 'react-router-dom';
import style from './sidebar.css';
import { withRouter } from 'react-router-dom';

const activeMenuClass = (path, to) => {
  return path === to ? 'active' : '';
}

const Sidebar = (props) => {
  return (
    <aside className="sidebar">
      <ul className="sidebar-menu">
        <li className={ activeMenuClass(props.location.pathname, '/') }>
          <Link to="/">Home</Link>
        </li>
        <li className={activeMenuClass(props.location.pathname, '/nested-fragment') }>
          <Link to="/nested-fragment">Nested Fragment</Link>
        </li>
        <li className={activeMenuClass(props.location.pathname, '/list') }>
          <Link to="/list">List</Link>
        </li>
      </ul>
    </aside>
  )
}

export default withRouter(Sidebar);
export { Sidebar, activeMenuClass }