import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import CreateAlbumPage from './pages/album/CreateAlbumPage';
import ListAlbumsPage from './pages/album/ListAlbumsPage';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="albums" component={ListAlbumsPage} />
        <Route path="albums/create" component={CreateAlbumPage} />
    </Switch>
);

export default Routes;
