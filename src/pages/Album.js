import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';
import '../css/musiccard.css';

export default class Album extends React.Component {
  constructor(props) {
    super(props);

    const dados = JSON.parse(localStorage.getItem('favorite_songs'));

    this.state = {
      loading: true,
      loadedSongs: [],
      favSongs: dados,
      artista: '',
      aux: false,
    };
  }

  componentDidMount() {
    this.requestSongs();
    this.initialFavSongs();
    this.setState({
      favSongs: JSON.parse(localStorage.getItem('favorite_songs')),
    });
  }

  initialFavSongs = async () => {
    const favSongs = (await getFavoriteSongs()).map((song) => song.trackId);
    this.setState({ favSongs });
  };

  appendNewFavSong = (songId) => {
    const { favSongs } = this.state;
    if (!(favSongs.some((song) => song.trackId === songId))) {
      this.setState({
        favSongs: [...favSongs, songId],
      });
    }
  };

  removeFavSong = (songId) => {
    const { favSongs } = this.state;
    const newFav = [...favSongs];
    newFav.slice(favSongs.indexOf(songId), 1);
    this.setState({ favSongs: newFav });
  };

  startLoading = () => {
    this.setState({
      loading: true,
    });
  }

  stopLoading = () => {
    this.setState({
      loading: false,
    });
  };

  requestSongs = () => {
    const { match: { params: { id } } } = this.props;
    getMusics(id).then((res) => this.setState({ loadedSongs: res }, () => {
      this.setState({ loading: false });
    }));
  };

  renderSongsList = () => {
    const { favSongs, loadedSongs, aux } = this.state;
    return loadedSongs.map((res, index) => {
      let retu = null;
      if (index === 0 && !aux) {
        const caminho = res.artworkUrl100;
        this.setState({
          artista: {
            image: caminho.replace('100x100bb', '1000x1000bb'),
            artista: res.artistName,
            albumName: res.collectionName,
          },
          aux: true,
        }, () => {});
        retu = false;
      } else if (index !== 0) {
        const songs = JSON.parse(localStorage.getItem('favorite_songs'));
        const checked = songs.some((song) => song.trackId === res.trackId);
        retu = (
          <MusicCard
            key={ res.trackName }
            artistId={ res.artistId }
            trackName={ res.trackName }
            previewUrl={ res.previewUrl }
            trackId={ res.trackId }
            favSongs={ favSongs }
            songData={ res }
            checked={ checked }
            removeFavSong={ this.removeFavSong }
            appendNewFavSong={ this.appendNewFavSong }
            startLoading={ this.startLoading }
            stopLoading={ this.stopLoading }
            artista={ res.artistName }
          />
        );
      }
      return retu;
    });
  };

  renderLoadingScreen = () => <div><p>Carregando...</p></div>;

  render() {
    const { loading, artista } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        <div className="musicas">
          <div id="albumInfo">
            <img alt="artsiaalbum" id="albumFoto" src={ artista.image } />
            <p className="infos cima">
              <strong>Artista: </strong>
              { artista.artista }
            </p>
            {/* <hr id="linha" /> */}
            <p className="infos">
              <strong>Album: </strong>
              { artista.albumName }
            </p>
          </div>
          <div className="musica">
            { loading ? this.renderLoadingScreen() : this.renderSongsList() }
          </div>
        </div>
      </div>
    );
  }
}

Album.propTypes = (({
  match: PropTypes.object,
}).isRequired);
