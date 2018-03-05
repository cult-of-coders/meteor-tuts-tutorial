import React from 'react';
import {Route} from 'react-router';
import App from './App';
import Home from './pages/Home';
import PostCreate from './pages/Posts/PostCreate';
import PostEdit from './pages/Posts/PostEdit';
import PostList from './pages/Posts/PostList';

export default () =>
    <App>
        <Route exact path="/" component={Home}/>
        <Route exact path="/posts" component={PostList} />
        <Route exact path="/posts/create" component={PostCreate} />
        <Route exact path="/posts/edit/:_id" component={PostEdit} />
    </App>