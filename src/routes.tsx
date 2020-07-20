import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import CreateAlbumPage from './pages/album/CreateAlbumPage';
import ListAlbumsPage from './pages/album/ListAlbumsPage';
import CreateSongPage from './pages/song/CreateSongPage';


const Routes = () => (
    <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/albums" component={ListAlbumsPage} />
        <Route path="/albums/create" component={CreateAlbumPage} />
        <Route path="/songs/create" component={CreateSongPage} />
    </Switch>
);

export default Routes;
