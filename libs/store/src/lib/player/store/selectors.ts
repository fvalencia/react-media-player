import { createSelector } from 'reselect';

const state = state => state.player;

export const getSongs = createSelector(
  state,
  state => state.songs
);

export const getPrevDisabled = createSelector(
  state,
  state => state.currentSongIndex <= 0
);

export const getNextDisabled = createSelector(
  state,
  state => state.currentSongIndex >= state.songs.length - 1
);

export const getIsPlaying = createSelector(
  state,
  state => state.playing
);

export const getCurrentSong = createSelector(
  state,
  state => (state.songs ? state.songs[state.currentSongIndex] : null)
);

export const getCurrentSongCover = createSelector(
  getCurrentSong,
  state => (state ? state.cover : null)
);
