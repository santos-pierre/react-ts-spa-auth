import { SET_USER, UserActionTypes, UserState } from './userTypes';

export const INITIAL_STATE: UserState = {
    name: '',
    email: '',
    is_verified: false,
};

const userReducer = (state = INITIAL_STATE, action: UserActionTypes) => {
    switch (action.type) {
        case SET_USER:
            return { ...action.payload };
        default:
            return state;
    }
};

export default userReducer;
