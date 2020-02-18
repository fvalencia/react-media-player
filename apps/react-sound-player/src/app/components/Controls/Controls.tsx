import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  getIsPlaying,
  nextSong,
  prevSong,
  togglePlaying,
  getPrevDisabled,
  getNextDisabled
} from '@felipe-nx/store';
import Control from '../Control/Control';
import './Controls.scss';

export const Controls = props => {
  /**
   * Store
   */
  const playing = useSelector(getIsPlaying);
  const prevDisabled = useSelector(getPrevDisabled);
  const nextDisabled = useSelector(getNextDisabled);
  const dispatch = useDispatch();

  return (
    <div className="player-controls">
      <Control
        type="backward"
        onClick={() => dispatch(prevSong())}
        disabled={prevDisabled}
      ></Control>
      <Control
        type={playing ? 'pause' : 'play'}
        onClick={() => dispatch(togglePlaying())}
      ></Control>
      <Control
        type="forward"
        onClick={() => dispatch(nextSong())}
        disabled={nextDisabled}
      ></Control>
    </div>
  );
};

export default Controls;
