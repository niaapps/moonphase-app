import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li>
          <Link to="/phases" className="nav-link">Phases</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

