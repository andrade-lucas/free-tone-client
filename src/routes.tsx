import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import CreateAlbumPage from './pages/album/CreateAlbumPage';
import ListAlbumsPage from './pages/album/ListAlbumsPage';
import CreateSongPage from './pages/song/CreateSongPage';
import ListCategoriesPage from './pages/category/ListCategoriesPage';
import CreateCategoryPage from './pages/category/CreateCategoryPage';
import ProfilePage from './pages/user/ProfilePage';
import AlbumDetailPage from './pages/album/AlbumDetailPage';
import CreateUserPage from './pages/user/CreateUserPage';
import ListUsersPage from './pages/user/ListUsersPage';
import CreateSingerPage from './pages/singers/CreateSingerPage';
import ListSingersPage from './pages/singers/ListSingersPage';
import UpdateSingerPage from './pages/singers/UpdateSingerPage';
import UpdateCategoryPage from './pages/category/UpdateCategoryPage';
import AboutPage from './pages/shared/AboutPage';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/albums" component={ListAlbumsPage} />
        <Route exact path="/albums/create" component={CreateAlbumPage} />
        <Route path="/albums/:id" component={AlbumDetailPage} />
        <Route path="/songs/create" component={CreateSongPage} />
        <Route exact path="/categories" component={ListCategoriesPage} />
        <Route exact path="/categories/create" component={CreateCategoryPage} />
        <Route path="/categories/update/:id" component={UpdateCategoryPage} />
        <Route exact path="/account/profile" component={ProfilePage} />
        <Route exact path="/users" component={ListUsersPage} />
        <Route exact path="/users/create" component={CreateUserPage} />
        <Route exact path="/singers" component={ListSingersPage} />
        <Route exact path="/singers/create" component={CreateSingerPage} />
        <Route path="/singers/update/:id" component={UpdateSingerPage} />
        
        <Route exact path="/about" component={AboutPage} />
    </Switch>
);

export default Routes;
