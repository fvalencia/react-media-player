import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from './reducers';
import { rootEpic } from './epics';

export const logger = store => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  const result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result;
};

export function configureStore() {
  const epicMiddleware = createEpicMiddleware();

  let middleware = applyMiddleware(epicMiddleware, logger);
  middleware = composeWithDevTools(middleware);

  const store = createStore(rootReducer(), {}, middleware);
  epicMiddleware.run(rootEpic);

  return store;
}
