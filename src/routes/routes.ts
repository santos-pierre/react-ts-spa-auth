import { RouteType } from './routeTypes';

const ROUTES: Array<RouteType> = [
    {
        name: 'login',
        path: '/login',
    },
    {
        name: 'register',
        path: '/register',
    },
    {
        name: 'forgot-password',
        path: '/forgot-password',
    },
    {
        name: 'home',
        path: '/',
    },
    {
        name: 'reset-password',
        path: '/reset-password',
    },
];

const getAllRoutes = (): Array<RouteType> => {
    return ROUTES;
};

const getRoute = (name: string, params?: object): RouteType => {
    let route = ROUTES.filter((route) => route.name === name)[0];
    if (params) {
        for (const [key, value] of Object.entries(params)) {
            route = { ...route, path: route.path.replace(`:${key}`, value) };
        }
    }
    return route;
};

export { getAllRoutes, getRoute };
