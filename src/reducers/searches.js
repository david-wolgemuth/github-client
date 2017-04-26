
import { camelize, camelizeKeys } from 'humps';
import { SEARCH_USERS, SEARCH_REPOS } from '../actions';

const INITIAL_STATE = {
  users: [],
  repos: [],
};

export const searches = (state=INITIAL_STATE, action) => {
  switch (action.type) {
  case SEARCH_USERS:
    return {
      ...state,
      users: camelizeKeys(action.payload.data.items)
    }
  case SEARCH_REPOS:
    return {
      ...state,
      repos: camelizeKeys(action.payload.data.items)
    }
  default:
    return state;
  }
};
