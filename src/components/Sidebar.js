import React from 'react';
import { Link } from 'react-router-dom';
import '../css/sidebar.css'

class Sidebar extends React.Component {
  render() {
    return (
      <nav>
        {/* <Link to="/">Login</Link> */}
        <Link className="link" data-testid="link-to-search" to="/search">Busca</Link>
        <Link className="link" data-testid="link-to-favorites" to="/favorites">Favoritos</Link>
        {/* <Link to="/profile/edit">Editar Perfil</Link> */}
        <Link className="link" data-testid="link-to-profile" to="/profile">Perfil</Link>
      </nav>
    );
  }
}

export default Sidebar;
