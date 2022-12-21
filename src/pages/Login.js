import React from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Carregando from '../components/Carregando';
import '../css/login.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      disableButton: true,
      loading: false,
      redirect: false,
      name: '',
    };
  }

  clickEvent = async () => {
    const { name } = this.state;
    this.setState({ loading: true });
    await createUser({ name });
    this.setState({ loading: false, redirect: true });
  }

  validationButton = (event) => {
    const valor = event.target.value;
    const minimoLetras = 3;
    if (valor.length >= minimoLetras) {
      this.setState({
        disableButton: false,
        name: valor,
      });
    } else {
      this.setState({
        disableButton: true,
        name: valor,
      });
    }
  }

  render() {
    const { name, disableButton, loading, redirect } = this.state;
    if (loading) return <Carregando />;
    if (redirect) return <Redirect to="/search" />;
    return (
      <form id="page-login" data-testid="page-login">
        <h1>Login</h1>

        <label htmlFor="nameInput">
          <input
            onChange={ this.validationButton }
            value={ name }
            data-testid="login-name-input"
            type="text"
            id="nameInput"
            placeholder="Nome"
          />
        </label>

        <br />

        <input
          onClick={ this.clickEvent }
          disabled={ disableButton }
          data-testid="login-submit-button"
          type="button"
          value="Entrar"
          id="btnInput"
        />

      </form>
    );
  }
}

export default Login;
