//"use strict";

import React from 'react';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
//import About from './components/about/aboutPage';
//import NotFoundPage from './components/notFoundPage';
import { Route, Redirect, IndexRoute, hashHistory } from 'react-router';


export default (
    <Route path="/" history={hashHistory} component={App}>
        <IndexRoute component={HomePage} />
        <Route path="courses" component={CoursesPage} />
        <Route path="about" component={AboutPage} />


    </Route>
);