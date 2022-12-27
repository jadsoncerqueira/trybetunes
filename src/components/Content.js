import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Album from '../pages/Album';
import Search from '../pages/Search';
import Favorites from '../pages/Favorites';
// import Profile from '../pages/Profile';
import ProfileEdit from '../pages/ProfileEdit';
import NotFound from '../pages/NotFound';

class Content extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path="/trybetunes" exact component={ Login } />
          <Route path="/search" component={ Search } />
          <Route path="/album/:id" component={ Album } />
          <Route path="/favorites" component={ Favorites } />
          <Route path="/profile/edit" component={ ProfileEdit } />
          {/* <Route path="/profile" component={ Profile } /> */}
          <Route path="*" component={ NotFound } />
        </Switch>
      </main>
    );
  }
}

export default Content;
