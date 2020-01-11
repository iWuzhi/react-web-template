/**
 * Author iWuzhi
 * Date 2019/11/30
 * */

/* eslint-disable */
import { HOME_UPDATE_NAME_ACTION, reducerActionCreator } from '../types';

const initState = {
  name: 'iWuzhi'
};

const reducers = {
  [reducerActionCreator(HOME_UPDATE_NAME_ACTION).type]: (
    state = initState,
    action,
  ) => ({
    ...state,
    name: action.name,
  }),
};

function homeReducers(state = initState, action) {
  if (!reducers[action.type]) {
    return state;
  }
  return reducers[action.type](state, action);
}

export default {
  home: homeReducers,
};
