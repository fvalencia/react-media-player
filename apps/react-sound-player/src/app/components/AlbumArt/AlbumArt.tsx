import React from 'react';
import { useSelector } from 'react-redux';

import './AlbumArt.scss';
import {
  getSongs,
  getCurrentSong,
  getIsPlaying,
  getBuffering
} from '@felipe-nx/store';

export const AlbumArt = props => {
  /**
   * Store
   */
  const songs = useSelector(getSongs);
  const currentSong = useSelector(getCurrentSong);
  const isPlaying = useSelector(getIsPlaying);
  const isBuffering = useSelector(getBuffering);

  return (
    <div className={`album-art ${isPlaying ? 'active' : ''} ${isBuffering ? 'buffering' : ''}`}>
      {songs.map(song => (
        <img
          src={song.cover}
          key={song.id}
          className={song.id === currentSong.id ? 'visible' : ''}
        />
      ))}
      <div className="buffer-box">
        Buffering ...
      </div>
    </div>
  );
};

export default AlbumArt;
