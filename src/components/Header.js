import React from 'react';
import { getUser } from '../services/userAPI';
import Carregando from './Carregando';
import Sidebar from './Sidebar';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      userRendered: false,
      username: '',
    };
  }

  async componentDidMount() {
    const user = await getUser();
    this.setState({ userRendered: true, username: user.name });
  }

  render() {
    const { userRendered, username } = this.state;
    return (
      <header data-testid="header-component">
        { userRendered ? (
          <div>
            <span data-testid="header-user-name">{username}</span>
          </div>) : <Carregando />}
        <Sidebar />
      </header>
    );
  }
}

export default Header;
