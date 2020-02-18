import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';

interface Response {
  songs: any[];
}

export const getSongs = () => {
  return ajax.getJSON<Response>(
    `https://app.fakejson.com/q/DNXHaVmu?token=LNI5cOpWqdwHz1tS5FmnSw`
  ).pipe(map(response => response.songs));
};
