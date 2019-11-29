import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/home';
import AboutUs from './pages/about-us';
import ContactUs from './pages/contact-us';
import FindUs from './pages/find-us';
import Menu from './pages/menu';
import Dashboard from './pages/admin/dashboard';
import AppProduct from './pages/admin/add-product';
import Categories from './pages/admin/categories';
import SubCategories from './pages/admin/sub-categories';
import Locator from './pages/admin/locator';
import Channels from './pages/admin/channels';
import Products from './pages/admin/products';
import Edit from './pages/admin/edit';
import "./static/style.css";
import "./static/tailwind.css";
// import App from './App';

const routing = (
    <Router basename="/build">
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/contact-us" component={ContactUs} />
            <Route path="/find-us" component={FindUs} />
            <Route path="/menu" component={Menu} />
            <Route exact path="/admin" component={Dashboard} />
            <Route path="/admin/add-product" component={AppProduct} />
            <Route path="/admin/categories" component={Categories} />
            <Route path="/admin/sub-categories" component={SubCategories} />
            <Route path="/admin/locator" component={Locator} />
            <Route path="/admin/channels" component={Channels} />
            <Route path="/admin/products" component={Products} />
            <Route path="/admin/edit" component={Edit} />
        </div>
    </Router>
)

// ReactDOM.render(<routing />, document.getElementById('root'));
ReactDOM.render(routing, document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
