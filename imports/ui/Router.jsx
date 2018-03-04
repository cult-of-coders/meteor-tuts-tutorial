import React from 'react';
import {Route} from 'react-router';
import App from './App';
import Home from './pages/Home';

export default () =>
    <App>
        <Route exact path="/" component={Home}/>
    </App>