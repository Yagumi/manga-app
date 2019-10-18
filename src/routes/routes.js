import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../containers/Home';
import PersonalMangaPageParent from '../containers/PersonalMangaPagePerent';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Home />} />
      <Route
        exact
        path="/:title"
        render={({ ...props }) => <PersonalMangaPageParent {...props} />}
      />
    </Switch>
  );
};

export default Routes;
