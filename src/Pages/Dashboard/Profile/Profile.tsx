import Auth from '../../../layouts/Auth/Auth';
import ProfileInfoForm from '../../../components/ProfileInfoForm/ProfileInfoForm';
import PasswordChangeForm from '../../../components/PasswordChangeForm/PasswordChangeForm';
import { useEffect } from 'react';
import { UserState } from '../../../redux/user/userTypes';
import { useSelector } from 'react-redux';
import { getUser } from '../../../redux/user/userSelector';
import { Redirect } from 'react-router-dom';
import { getRoute } from '../../../routes/routes';

const UserProfile = () => {
    const user: UserState = useSelector(getUser);

    useEffect(() => {
        document.title = 'Laravel React SPA - User Profile';
    }, []);

    return (
        <Auth>
            {!user.is_github_account ? (
                <>
                    <ProfileInfoForm />
                    <PasswordChangeForm />
                </>
            ) : (
                <Redirect to={getRoute('home').path} />
            )}
        </Auth>
    );
};

export default UserProfile;
