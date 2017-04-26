import axios from 'axios';

const ROOT = 'https://api.github.com';

export const SEARCH_USERS = 'SEARCH_USERS';
export const searchUsers = (term) => ({
  type: SEARCH_USERS,
  payload: axios.get(`${ROOT}/search/users?q=${term}`)
});

export const SEARCH_REPOS = 'SEARCH_REPOS';
export const searchRepos = (term) => ({
  type: SEARCH_REPOS,
  payload: axios.get(`${ROOT}/search/repositories?q=${term}`)
});
