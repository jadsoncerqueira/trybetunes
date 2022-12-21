import React from 'react';
import { getUser } from '../services/userAPI';
import Sidebar from '../components/Sidebar';
import CarregandoNome from './carregandoNome';

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
      <header id="header" data-testid="header-component">
        <h1>TryTunes</h1>
        <Sidebar />
        { userRendered ? (
          <div>
            <span data-testid="header-user-name">{username}</span>
          </div>) : <CarregandoNome />}
      </header>
    );
  }
}

export default Header;
