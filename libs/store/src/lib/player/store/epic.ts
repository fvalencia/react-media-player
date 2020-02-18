import { ofType, Epic } from 'redux-observable';
import { switchMap, map } from 'rxjs/operators';

import * as PlayerService from '../service';
import * as PlayerActions from './actions';

interface ActionPayload {
  type: any;
  payload: any;
}

export const fetchSongs: Epic<ActionPayload, ActionPayload, any> = action$ =>
  action$.pipe(
    ofType(PlayerActions.LOAD_SONGS),
    switchMap(() =>
      PlayerService.getSongs().pipe(
        map(response => PlayerActions.loadSongsSuccess(response))
      )
    )
  );
