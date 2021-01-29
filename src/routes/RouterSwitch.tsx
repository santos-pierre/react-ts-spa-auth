import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import Login from '../Pages/Login/Login';
import PublicRoute from './PublicRoute';
import GuardedRoute from './GuardedRoute';
import { getRoute } from './routes';
import Register from '../Pages/Register/Register';
import Dashboard from '../Pages/Dashboard/Dashboard';
import ForgotPassword from '../Pages/ForgotPassword/ForgotPassword';
import ResetPassword from '../Pages/ResetPassword/ResetPassword';
import UserProfile from '../Pages/Dashboard/Profile/Profile';

const RouterSwitch = () => {
    return (
        <Switch>
            <GuardedRoute
                component={Dashboard}
                path={getRoute('home').path}
                exact={true}
            />
            <GuardedRoute
                component={UserProfile}
                path={getRoute('profile').path}
                exact={true}
            />
            <PublicRoute
                component={Login}
                path={getRoute('login').path}
                exact={true}
            />
            <PublicRoute
                component={Register}
                path={getRoute('register').path}
                exact={true}
            />
            <PublicRoute
                component={ForgotPassword}
                path={getRoute('forgot-password').path}
                exact={true}
            />
            <PublicRoute
                component={ResetPassword}
                path={getRoute('reset-password').path}
            />
            <Redirect to={getRoute('home').path} />
        </Switch>
    );
};

export default RouterSwitch;
