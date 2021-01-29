import {
    NotificationActionTypes,
    NotificationState,
    SET_NOTIFICATION,
} from './notificationTypes';

export const setNotification = (
    user: NotificationState
): NotificationActionTypes => {
    return {
        type: SET_NOTIFICATION,
        payload: user,
    };
};
