import { combineEpics } from 'redux-observable';

import { fetchSongs } from '@felipe-nx/store';

export const rootEpic = combineEpics(fetchSongs);
