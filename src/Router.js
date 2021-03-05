import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import App from './App';
import PrivateRoute from './PrivateRoute';
import Login from './components/Login';
import Signup from './components/Signup';

const Router = () => {
    return(
        <BrowserRouter>
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/Signup">Signup</NavLink>
                <NavLink to="/Login">Login</NavLink>
            </div>

            <PrivateRoute exact path="/" component={App} />
            <Route path="/Signup" component={Signup} />
            <Route path="/Login" component={Login} />
        </BrowserRouter>
    )
}

export default Router;