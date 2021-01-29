import { NotificationState } from '../notification/notificationTypes';
import { UserState } from '../user/userTypes';

export interface RootState {
    user: UserState;
    notification: NotificationState;
}
