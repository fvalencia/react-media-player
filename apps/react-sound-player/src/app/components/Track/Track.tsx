import React, {
  Fragment,
  useEffect,
  useRef,
  useState,
  useCallback
} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './Track.scss';
import {
  getCurrentSong,
  getIsPlaying,
  togglePlaying,
  nextSong,
  getNextDisabled
} from '@felipe-nx/store';
import { useEventListener } from '../../utils/event-listener';
import { getPositions } from '../../utils/get-position';
import { formatSeconds } from '../../utils/format-seconds';

export const Track = props => {
  /**
   * State
   */
  const [barWidth, setBarWidth] = useState(0);
  const [songLength, setSongLength] = useState('');
  const [elapsedTime, setElapsedTime] = useState('');
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipText, setTooltipText] = useState('');
  const [tooltipLeft, setTooltipLeft] = useState(0);

  /**
   * Store
   */
  const currentSong = useSelector(getCurrentSong);
  const isPlaying = useSelector(getIsPlaying);
  const nextDisabled = useSelector(getNextDisabled);
  const dispatch = useDispatch();

  /**
   * Element ref
   */
  const audio = useRef<HTMLAudioElement>(null);
  const timeArea = useRef(null);

  useEffect(() => {
    audio.current = new Audio();
    audio.current.loop = false;
    audio.current.addEventListener('timeupdate', handleTimeUpdate);
  }, []);

  useEffect(() => {
    if (currentSong) {
      setSongLength('');
      audio.current.currentTime = 0;
      audio.current.src = currentSong.songUrl;
      if (isPlaying) {
        audio.current.play();
      }
    }
  }, [currentSong]);

  useEffect(() => {
    if (isPlaying) {
      audio.current.play();
    } else {
      audio.current.pause();
    }
  }, [isPlaying]);

  const handleEnded = useCallback(() => {
    if (!nextDisabled) {
      dispatch(nextSong());
    } else {
      dispatch(togglePlaying());
    }
  }, [nextDisabled]);

  const handleTimeUpdate = () => {
    const currentTime = audio.current.currentTime;
    const duration = audio.current.duration;

    if (duration) {
      if (!songLength) {
        setSongLength(formatSeconds(audio.current.duration));
      }
      setElapsedTime(formatSeconds(currentTime));
      setBarWidth((currentTime / duration) * 100);
    }
  };

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (!showTooltip) {
      setShowTooltip(true);
    }
    const { pos, seconds } = getPositions(
      event,
      audio.current.duration,
      timeArea.current.getBoundingClientRect()
    );
    if (pos > 0) {
      setTooltipLeft(pos);
      setTooltipText(formatSeconds(seconds));
    }
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { seconds } = getPositions(
      event,
      audio.current.duration,
      timeArea.current.getBoundingClientRect()
    );
    audio.current.currentTime = seconds;
  };

  useEventListener('ended', handleEnded, audio.current);

  return (
    <Fragment>
      {currentSong ? (
        <div className={`player-track ${isPlaying ? 'active' : ''}`}>
          <div className="album-name ellipsis-wrap">{currentSong.songName}</div>
          <div className="track-name ellipsis-wrap">
            {currentSong.artist} - {currentSong.album}
          </div>
          <div className={`track-time ${songLength ? 'active' : ''}`}>
            <div className="current-time">{elapsedTime || '0:00'}</div>
            <div className="track-length">{songLength || '0:00'}</div>
          </div>
          <div
            className={`s-area ${songLength ? 'active' : ''}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            ref={timeArea}
          >
            <div
              className={`s-hover ${showTooltip ? 'visible' : ''}`}
              style={{ left: tooltipLeft }}
            >
              {tooltipText}
            </div>
            <div className="seek-bar" style={{ width: `${barWidth}%` }}></div>
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};

export default Track;
