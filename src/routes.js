import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Search from './components/search';

export const routes = (
  <Route path="/" component={App}>
    <Route path="search/:type" component={Search} />
  </Route>
);
