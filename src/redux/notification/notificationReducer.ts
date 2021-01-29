import {
    NotificationActionTypes,
    NotificationState,
    NotificationStatus,
    SET_NOTIFICATION,
} from './notificationTypes';

export const INITIAL_STATE: NotificationState = {
    message: '',
    status: NotificationStatus.NULL,
    show: false,
};

const notificationReducer = (
    state = INITIAL_STATE,
    action: NotificationActionTypes
) => {
    switch (action.type) {
        case SET_NOTIFICATION:
            return { ...action.payload };
        default:
            return state;
    }
};

export default notificationReducer;
