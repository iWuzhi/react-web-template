/**
 * Author iWuzhi
 * Date 2019/12/8
 * */
/* eslint-disable */
import { REQUEST_FETCH_DATA_TEST, reducerActionCreator } from "../types";

const initState = {
  data: []
};

const reducers = {
  [reducerActionCreator(REQUEST_FETCH_DATA_TEST).type]: (
    state = initState,
    action,
  ) => ({
    ...state,
    data: action.data,
  })
};

function requestReducer(state = initState, action) {
  if (!reducers[action.type]) {
    return state;
  }
  return reducers[action.type](state, action);
}

export default {
  request: requestReducer
};
