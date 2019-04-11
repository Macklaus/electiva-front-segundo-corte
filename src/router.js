import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Login from './containers/login/login';
import Album from './containers/albums/album';
import NotFound from './components/not-found/not-found';
import Post from './containers/posts/post';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Login}/>
            <Route path="/posts" component={Post}/>
            <Route path="/albums" component={Album}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
);

export default Router;