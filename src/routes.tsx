import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import CreateAlbumPage from './pages/album/CreateAlbumPage';
import ListAlbumsPage from './pages/album/ListAlbumsPage';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="albums" component={ListAlbumsPage} />
            <Route path="albums/create" component={CreateAlbumPage} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
