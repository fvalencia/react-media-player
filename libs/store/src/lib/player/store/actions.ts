/*
 * action types
 */
export const NEXT = 'NEXT_SONG';
export const PREV = 'PREV_SONG';
export const TOGGLE_PLAYING = 'TOGGLE_PLAYING';
export const BUFFERING = 'BUFFERING';

export const LOAD_SONGS = 'LOAD_SONGS';
export const LOAD_SONGS_SUCCESS = 'LOAD_SONGS_SUCCESS';
export const LOAD_SONGS_FAILURE = 'LOAD_SONGS_FAILURE';

/*
 * action creators
 */
export function nextSong() {
  return { type: NEXT };
}
export function prevSong() {
  return { type: PREV };
}
export function togglePlaying() {
  return { type: TOGGLE_PLAYING };
}
export function buffering(buffering: boolean) {
  return { type: BUFFERING, payload: buffering };
}

export function loadSongs() {
    return  {type :LOAD_SONGS }
}
export function loadSongsSuccess(songs) {
    return  {type :LOAD_SONGS_SUCCESS, payload: songs }
}
export function loadSongsFailure() {
    return  {type :LOAD_SONGS_FAILURE }
}