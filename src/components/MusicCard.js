import React from 'react';
import PropTypes from 'prop-types';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import '../css/musiccard.css';

export default class MusicCard extends React.Component {
  constructor(props) {
    super(props);

    const { checked } = this.props;

    this.state = {
      checked,
    };
  }

  componentDidUpdate() {
    const { songData } = this.props;
    this.verifyIfFavoriteSongs(songData);
  }

  verifyIfFavoriteSongs = async (songData) => {
    const allFavorites = await getFavoriteSongs();
    const favOfThisArtist = allFavorites
      .filter(({ trackId }) => trackId === songData.trackId);
    if (favOfThisArtist.includes(songData)) {
      this.setState({ checked: true });
    }
  };

  handleCheck = async () => {
    const { checked } = this.state;
    const { songData, appendNewFavSong, startLoading, stopLoading, removeFavSong,
    } = this.props;
    this.setState({ checked: !checked });
    if (!checked) {
      startLoading();
      await addSong(songData);
      appendNewFavSong(songData.trackId);
      stopLoading();
    } else {
      startLoading();
      await removeSong(songData);
      removeFavSong(songData.trackId);
      stopLoading();
    }
  }

  render() {
    const { checked, trackId, trackName, previewUrl, artista } = this.props;
    return (
      <section id="audio">
        <div id="cabeca">
          <p>{trackName}</p>
          <label id="label" htmlFor="audio-component">
            <input
              // id="audio-component"
              type="checkbox"
              data-testid={ `checkbox-music-${trackId}` }
              checked={ checked }
              onChange={ this.handleCheck }
            />
            Favorita
          </label>
        </div>
        <h5 className="artistaCard">{ artista }</h5>
        <audio controls>
          <track src="" kind="captions" label="english_captions" />
          <source
            type="audio/mp3"
            data-testid="audio-component"
            src={ previewUrl }
          />
        </audio>
      </section>
    );
  }
}

MusicCard.propTypes = (({
  songData: PropTypes.object,
  trackId: PropTypes.string,
  trackName: PropTypes.string,
  previewUrl: PropTypes.string,
}).isRequired);
