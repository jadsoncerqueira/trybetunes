import React from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {
  render() {
    return (
      <div>
        {/* <Link to="/">Login</Link> */}
        <Link data-testid="link-to-search" to="/search">Busca</Link>
        <Link data-testid="link-to-favorites" to="/favorites">Favoritos</Link>
        {/* <Link to="/profile/edit">Editar Perfil</Link> */}
        <Link data-testid="link-to-profile" to="/profile">Perfil</Link>
      </div>
    );
  }
}

export default Sidebar;
