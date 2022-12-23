import React from 'react';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import Album from './Album';
import '../css/favorites.css';

class Favorites extends React.Component {
  album = new Album();

  constructor(props) {
    super(props);

    this.state = {
      songData: JSON.parse(localStorage.getItem('favorite_songs')),
    };
  }

  // componentDidUpdate() {
  //   console.log('atualizou!');
  // }

  verifyIfFavoriteSongs = async (id) => {
    this.album.removeFavSong(id);
    this.setState({ songData: JSON.parse(localStorage.getItem('favorite_songs')) });
  };

  render() {
    const { songData } = this.state;
    const auxiliar = (favorito, favoritos) => {
      const checked = favoritos.some((song) => song.trackId === favorito.trackId);
      return (
        <MusicCard
          key={ favorito.trackName }
          artistId={ favorito.artistId }
          trackName={ favorito.trackName }
          previewUrl={ favorito.previewUrl }
          trackId={ favorito.trackId }
          favSongs={ songData }
          songData={ favorito }
          checked={ checked }
          removeFavSong={ this.verifyIfFavoriteSongs }
          appendNewFavSong={ this.album.appendNewFavSong }
          startLoading={ this.album.startLoading }
          stopLoading={ this.album.stopLoading }
          artista={ favorito.artistName }
        />);
    };

    const favoritos = songData;
    return (
      <div data-testid="page-favorites">
        <Header />
        <h1 id="fav">Favoritos</h1>
        <div id="favoritos">
          { favoritos.map((favorito) => auxiliar(favorito, favoritos)) }
        </div>
      </div>
    );
  }
}

export default Favorites;
