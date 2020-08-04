import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import CreateAlbumPage from './pages/album/CreateAlbumPage';
import ListAlbumsPage from './pages/album/ListAlbumsPage';
import CreateSongPage from './pages/song/CreateSongPage';
import ListCategoriesPage from './pages/category/ListCategoriesPage';
import CreateCategoriesPage from './pages/category/CreateCategoriesPage';
import ProfilePage from './pages/user/ProfilePage';
import AlbumDetailPage from './pages/album/AlbumDetailPage';
import CreateUserPage from './pages/user/CreateUserPage';


const Routes = () => (
    <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/albums" component={ListAlbumsPage} />
        <Route exact path="/albums/create" component={CreateAlbumPage} />
        <Route path="/albums/:id" component={AlbumDetailPage} />
        <Route path="/songs/create" component={CreateSongPage} />
        <Route exact path="/categories" component={ListCategoriesPage} />
        <Route path="/categories/create" component={CreateCategoriesPage} />
        <Route exact path="/account/profile" component={ProfilePage} />
        <Route exact path="/users/create" component={CreateUserPage} />
    </Switch>
);

export default Routes;
