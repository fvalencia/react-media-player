import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { loadSongs } from '@felipe-nx/store';
import Controls from '../Controls/Controls';
import AlbumArt from '../AlbumArt/AlbumArt';
import Track from '../Track/Track';
import './Player.scss';

export const Player = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadSongs());
  }, []);

  return (
    <div className="player">
      <Track></Track>
      <div className="player-content">
        <AlbumArt></AlbumArt>
        <div></div>
        <Controls></Controls>
      </div>
    </div>
  );
};

export default Player;
