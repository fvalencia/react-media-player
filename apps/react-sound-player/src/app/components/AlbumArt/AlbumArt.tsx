import React from 'react';
import { useSelector } from 'react-redux';

import './AlbumArt.scss';
import { getSongs, getCurrentSong, getIsPlaying } from '@felipe-nx/store';

export const AlbumArt = props => {
  /**
   * Store
   */
  const songs = useSelector(getSongs);
  const currentSong = useSelector(getCurrentSong);
  const isPlaying = useSelector(getIsPlaying);

  return (
    <div className={`album-art ${isPlaying ? 'active' : ''}`}>
      {songs.map(song => (
        <img
          src={song.cover}
          key={song.id}
          className={song.id === currentSong.id ? 'visible' : ''}
        />
      ))}
      <div id="buffer-box">Buffering ...</div>
    </div>
  );
};

export default AlbumArt;
