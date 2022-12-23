import React from 'react';
import { getUser } from '../services/userAPI';
import Sidebar from './Sidebar';
import CarregandoNome from './carregandoNome';

export function filterKeyEnter(handler) {
  const num = 13;
  return (e) => {
    if (e.keyCode === num) {
      handler(e);
    }
  };
}

function animateLink() {
  const links = document.querySelectorAll('#nav .link');
  links.forEach((link, index) => {
    const num = 0.3;
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `navFade 0.5s ease forwards ${(index / 2) * num}s`;
    }
  });
}

export function accessibleOnClick(handler) {
  return {
    role: 'button',
    tabIndex: 0,
    onKeyDown: filterKeyEnter(handler),
    onClick: handler,
  };
}

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

    function handleClick() {
      const nav = document.querySelector('#nav');
      const sam = document.querySelector('.sanduba');
      nav.classList.toggle('active');
      sam.classList.toggle('active');
      animateLink();
    }
    return (
      <header id="header" data-testid="header-component">
        <h1>TryTunes</h1>
        <Sidebar />
        <div { ...accessibleOnClick(handleClick) } className="sanduba">
          <div className="line1" />
          <div className="line2" />
          <div className="line3" />
        </div>
        { userRendered ? (
          <div className="span" id="span">
            <span data-testid="header-user-name">{username}</span>
          </div>) : <div className="span"><CarregandoNome /></div>}
      </header>
    );
  }
}

export default Header;
