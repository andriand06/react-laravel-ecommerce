
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */
require('./bootstrap');
/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
require('./components/Slides');
require('./components/Example');
require('./components/Pages/LandingPage');



import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LandingPage from './components/Pages/LandingPage';
import NotFound from './components/Pages/NotFound';
import ProductPage from './components/Pages/ProductPage';
import ShoppingCart from './components/Pages/ShoppingCart';
import Success from './components/Pages/Succes';
import Slides from './components/Slides';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/"><LandingPage /></Route>
                <Route exact path="/slides"><Slides /></Route>
                <Route exact path="/products"><ProductPage /></Route>
                <Route exact path="/shoppingcart"><ShoppingCart /></Route>
                <Route exact path="/success"><Success /></Route>
            </Switch>
        </Router>
    );
}
if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
