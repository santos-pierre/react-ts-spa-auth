import { useCallback } from 'react';
import userClient from './api/users/usersClient';
import useThunkDispatch from './custom-hooks/useThunkDispatch';
import { getAuthUser, logout } from './redux/user/userAction';

const App = () => {
    const dispatch = useThunkDispatch();

    const logoutUser = useCallback(() => {
        dispatch(logout());
    }, [dispatch]);

    const authUser = useCallback(() => {
        dispatch(getAuthUser());
    }, [dispatch]);

    const handleLogin = async () => {
        try {
            await userClient.login({
                email: 'user@user.com',
                password: 'password',
            });
            authUser();
        } catch (error) {
            console.log(error);
        }
    };

    const handleLogout = async () => {
        try {
            logoutUser();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h1>Hello World</h1>
            <div className="flex space-x-4">
                <button
                    className="px-2 py-1 font-semibold text-white bg-indigo-500 rounded-md focus:outline-none hover:bg-opacity-75"
                    onClick={handleLogin}
                >
                    Log In
                </button>
                <button
                    className="px-2 py-1 font-semibold text-white bg-indigo-500 rounded-md focus:outline-none hover:bg-opacity-75"
                    onClick={handleLogout}
                >
                    Log out
                </button>
            </div>
        </div>
    );
};

export default App;
