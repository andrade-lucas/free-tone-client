import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import CreateAlbumPage from './pages/album/CreateAlbumPage';

const Routes = () => (
    <Route>
        <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="albums/create" component={CreateAlbumPage} />
        </Switch>
    </Route>
);

export default Routes;
