import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {urls} from './util/urlUtils';

ReactDOM.render(
    <Router>
        <Route path={urls.home.path} component={App}/>
    </Router>
    , document.getElementById('root'));

