import { useEffect, useState } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import Loading from '../components/Loading/Loading';
import useThunkDispatch from '../utils/custom-hooks/useThunkDispatch';
import { getAuthUser } from '../redux/user/userAction';
import { getRoute } from './routes';

interface PublicRouteProps extends RouteProps {
    component: React.ComponentType<any>;
}

const PublicRoute = ({ component: Component, ...rest }: PublicRouteProps) => {
    const dispatch = useThunkDispatch();
    const [isAuthenticate, setIsAuthenticate] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const auth = async () => {
            try {
                await dispatch(getAuthUser());
                setIsAuthenticate(true);
            } catch (error) {
                setIsAuthenticate(false);
            } finally {
                setIsLoading(false);
            }
        };
        auth();
    }, [dispatch]);

    return !isLoading ? (
        <Route
            {...rest}
            render={(props) =>
                !isAuthenticate ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={getRoute('home').path} />
                )
            }
        />
    ) : (
        <Loading />
    );
};

export default PublicRoute;
