import * as PlayerActions from './actions';

const initialState = {
  currentSongIndex: 0,
  playing: false,
  songs: [],
  loading: false,
  loaded: false,
  failure: false
};

export const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case PlayerActions.NEXT:
      return {
        ...state,
        currentSongIndex: state.currentSongIndex + 1,
        playing: true
      };

    case PlayerActions.PREV:
      return {
        ...state,
        currentSongIndex: state.currentSongIndex - 1,
        playing: true
      };

    case PlayerActions.TOGGLE_PLAYING:
      return {
        ...state,
        playing: !state.playing
      };

    case PlayerActions.LOAD_SONGS:
      return {
        ...state,
        loading: true,
        failure: false
      };

    case PlayerActions.LOAD_SONGS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        songs: action.payload
      };

    case PlayerActions.LOAD_SONGS_FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        failure: true
      };

    default:
      return state;
  }
};
