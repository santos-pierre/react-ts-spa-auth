import { RootState } from '../types/RootState';
import { NotificationState } from './notificationTypes';

export const getNotification = (rootState: RootState): NotificationState => {
    return rootState.notification;
};
