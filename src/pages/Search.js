import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Carregando from '../components/Carregando';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      userRendered: false,
      buttonDisable: true,
      valor: '',
      resultadoPesquisa: [{}],
      valor2: '',
    };
  }

  pesquisaMusica = async () => {
    const { valor } = this.state;
    this.setState({
      userRendered: true,
      resultadoPesquisa: [{}],
      valor2: valor,
    });
    this.setState({
      userRendered: false,
      valor: '',
      buttonDisable: true,
      resultadoPesquisa: await searchAlbumsAPI(valor),
    });
  }

  verificaInput = (event) => {
    const valorCampo = event.target.value;
    this.setState({ valor: valorCampo });
    const valorMinimo = 2;
    if (valorCampo.length >= valorMinimo) {
      this.setState({ buttonDisable: false });
    } else {
      this.setState({ buttonDisable: true });
    }
  }

  render() {
    const {
      resultadoPesquisa,
      userRendered,
      valor,
      valor2,
      buttonDisable,
    } = this.state;

    return (
      <div data-testid="page-search">
        <Header />
        <input
          value={ valor }
          onChange={ this.verificaInput }
          data-testid="search-artist-input"
          type="text"
        />
        <input
          value="Pesquisar"
          onClick={ this.pesquisaMusica }
          disabled={ buttonDisable }
          data-testid="search-artist-button"
          type="button"
        />
        {userRendered && <Carregando />}
        {
          resultadoPesquisa.length > 1
          && <p>{`Resultado de álbuns de: ${valor2}`}</p>
        }
        {
          resultadoPesquisa.length === 0
          && <p>Nenhum álbum foi encontrado</p>
        }
        <ul>
          {
            resultadoPesquisa.map((elem) => (
              <li key={ elem.collectionId }>
                <Link
                  data-testid={ `link-to-album-${elem.collectionId}` }
                  to={ `/album/${elem.collectionId}` }
                >
                  {elem.collectionName}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default Search;
