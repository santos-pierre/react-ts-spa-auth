import userClient from '../../api/users/usersClient';
import { AppThunk } from '../types/AppThunk';
import { SET_USER, UserActionTypes, UserState } from './userTypes';
import { INITIAL_STATE } from './userReducer';

export const setCurrentUser = (user: UserState): UserActionTypes => {
    return {
        type: SET_USER,
        payload: user,
    };
};

export const getAuthUser = (): AppThunk => async (dispatch) => {
    try {
        const response = await userClient.getAuthUser();
        dispatch(setCurrentUser(response.data));
        return Promise.resolve(response);
    } catch (error) {
        dispatch(setCurrentUser(INITIAL_STATE));
        return Promise.reject(error);
    }
};

export const logout = (): AppThunk => async (dispatch) => {
    try {
        const response = await userClient.logout();
        dispatch(setCurrentUser(INITIAL_STATE));
        return Promise.resolve(response);
    } catch (errors) {
        return Promise.resolve(errors);
    }
};
