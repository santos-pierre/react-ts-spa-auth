import React from 'react';
import { Switch } from 'react-router-dom';
import Login from '../Pages/Login/Login';
import PublicRoute from './PublicRoute';
import GuardedRoute from './GuardedRoute';
import { getRoute } from './routes';
import Register from '../Pages/Register/Register';
import Dashboard from '../Pages/Dashboard/Dashboard';

const RouterSwitch = () => {
    return (
        <Switch>
            <GuardedRoute
                component={Dashboard}
                path={getRoute('home').path}
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
        </Switch>
    );
};

export default RouterSwitch;
