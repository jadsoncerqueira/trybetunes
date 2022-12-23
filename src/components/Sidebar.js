import React from 'react';
import { Link } from 'react-router-dom';
import '../css/sidebar.css';

class Sidebar extends React.Component {
  render() {
    return (
      <nav id="nav">
        <Link className="link" data-testid="link-to-search" to="/search">Buscar</Link>
        <Link className="link" data-testid="link-to-favorites" to="/favorites">
          Favoritos
        </Link>
      </nav>
    );
  }
}

export default Sidebar;
