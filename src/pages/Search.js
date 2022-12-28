import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Carregando from '../components/Carregando';
import lupa from '../images/lupa.png';
import '../css/Search.css';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      userRendered: false,
      buttonDisable: true,
      valor: '',
      resultadoPesquisa: { response: [] },
      valor2: '',
    };
  }

  pesquisaMusica = async () => {
    const { valor } = this.state;
    this.setState({
      userRendered: true,
      resultadoPesquisa: { response: [] },
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
        {/* <p id="paragra">Pesquisar artistas</p> */}
        <div id="sea">
          <div id="search-artist-input">
            <input
              value={ valor }
              onKeyDown={ (e) => {
                if (e.key === 'Enter') {
                  const btn = document.querySelector('#search-artist-button');
                  btn.click();
                }
              } }
              onChange={ this.verificaInput }
              data-testid="search-artist-input"
              id="search-artist-inputs"
              type="text"
              placeholder="Pesquisar artistas"
            />
            <button
              onClick={ this.pesquisaMusica }
              disabled={ buttonDisable }
              data-testid="search-artist-button"
              id="search-artist-button"
              type="button"
            >
              <img alt="" id="lupa" src={ lupa } />
            </button>
          </div>
        </div>
        {userRendered && <Carregando />}
        {
          resultadoPesquisa.resultCount > 1
          && <p className="preview">{`Resultados para: ${valor2}`}</p>
        }
        {
          resultadoPesquisa.resultCount === 0
          && <p className="preview">Nenhum álbum foi encontrado</p>
        }
        <ul id="resultado">
          {
            resultadoPesquisa.response.map((elem) => (
              <div id="colecao" key={ elem.collectionId }>
                <img alt="" id="capa" src={ elem.artworkUrl100 } />
                <div id="infos">
                  <Link
                    className="nomes"
                    id="link2"
                    data-testid={ `link-to-album-${elem.collectionId}` }
                    to={ `/trybetunes/album/${elem.collectionId}` }
                  >
                    Album:
                    {elem.collectionName}
                  </Link>
                  <p className="nomes">
                    <strong>Artista: </strong>
                    { elem.artistName }
                  </p>
                  <p className="nomes">
                    <strong>Lançamento: </strong>
                    {new Date(elem.releaseDate).getFullYear()}
                  </p>
                </div>
              </div>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default Search;
