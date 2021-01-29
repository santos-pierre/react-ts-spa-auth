import Auth from '../../../layouts/Auth/Auth';
import ProfileInfoForm from '../../../components/ProfileInfoForm/ProfileInfoForm';
import PasswordChangeForm from '../../../components/PasswordChangeForm/PasswordChangeForm';

const UserProfile = () => {
    return (
        <Auth>
            <ProfileInfoForm />
            <PasswordChangeForm />
        </Auth>
    );
};

export default UserProfile;
