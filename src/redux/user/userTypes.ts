export const SET_USER = 'SET_USER';

interface SetUserAction {
    type: typeof SET_USER;
    payload: UserState;
}

export interface UserState {
    name: string;
    email: string;
    is_verified: boolean;
}

export type UserActionTypes = SetUserAction;
