import Auth from '../../../layouts/Auth/Auth';
import ProfileInfoForm from '../../../components/ProfileInfoForm/ProfileInfoForm';
import PasswordChangeForm from '../../../components/PasswordChangeForm/PasswordChangeForm';
import { useEffect } from 'react';

const UserProfile = () => {
    useEffect(() => {
        document.title = 'Laravel React SPA - User Profile';
    }, []);

    return (
        <Auth>
            <ProfileInfoForm />
            <PasswordChangeForm />
        </Auth>
    );
};

export default UserProfile;
