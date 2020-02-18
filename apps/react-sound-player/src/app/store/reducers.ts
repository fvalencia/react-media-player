import { combineReducers } from 'redux';

import { playerReducer } from '@felipe-nx/store';

export const rootReducer = () => combineReducers({ player: playerReducer });
