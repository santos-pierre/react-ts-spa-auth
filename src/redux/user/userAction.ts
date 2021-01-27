import { SET_USER, UserActionTypes, UserState } from './userTypes';

export const setCurrentUser = (user: UserState): UserActionTypes => {
    return {
        type: SET_USER,
        payload: user,
    };
};
