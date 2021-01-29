import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import userClient from '../../api/users/usersClient';
import InputForm from '../InputForm/Inputform';
import { setNotification } from '../../redux/notification/notificationAction';
import { setCurrentUser } from '../../redux/user/userAction';
import { getUser } from '../../redux/user/userSelector';
import { UserState } from '../../redux/user/userTypes';

type ErrorsType = {
    email: Array<string> | undefined;
    name: Array<string> | undefined;
};

const ProfileInfoForm = () => {
    const user: UserState = useSelector(getUser);
    const dispatch = useDispatch();
    const [name, setName] = useState<string>(user.name);
    const [email, setEmail] = useState<string>(user.email);
    const [errors, setErrors] = useState<ErrorsType>();

    const updateProfile = async (e: React.FormEvent<HTMLFormElement>) => {
        setErrors({ email: [], name: [] });
        e.preventDefault();
        try {
            if (user.name !== name || user.email !== email) {
                await userClient.updateUser({ name: name, email: email });
                dispatch(
                    setNotification({
                        message: 'Profile Saved',
                        status: 'SUCCESS',
                        show: true,
                    })
                );
                dispatch(
                    setCurrentUser({
                        email: email,
                        name: name,
                        is_verified: false,
                    })
                );
            }
        } catch (error) {
            if (error.status === 422) {
                setErrors(error.errors);
            } else {
                dispatch(
                    setNotification({
                        message: 'Something went wrong try again later',
                        status: 'FAIL',
                        show: true,
                    })
                );
            }
        }
    };

    return (
        <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
            <section aria-labelledby="payment_details_heading">
                <form onSubmit={updateProfile}>
                    <div className="shadow sm:rounded-md sm:overflow-hidden">
                        <div className="px-4 py-6 bg-white sm:p-6">
                            <div>
                                <h2
                                    id="payment_details_heading"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >
                                    Profile Info
                                </h2>
                            </div>
                            <div className="grid grid-cols-4 gap-6 mt-6">
                                <InputForm
                                    name="name"
                                    label="name"
                                    value={name}
                                    handleValue={setName}
                                    wrapperStyle="col-span-4 sm:col-span-2"
                                    error={
                                        errors && errors.name
                                            ? errors.name[0]
                                            : undefined
                                    }
                                />
                                <InputForm
                                    name="email"
                                    label="email"
                                    value={email}
                                    handleValue={setEmail}
                                    wrapperStyle="col-span-4 sm:col-span-2"
                                    error={
                                        errors && errors.email
                                            ? errors.email[0]
                                            : undefined
                                    }
                                />
                            </div>
                        </div>
                        <div className="px-4 py-3 text-right bg-gray-50 sm:px-6">
                            <button
                                disabled={
                                    !(
                                        user.name !== name ||
                                        user.email !== email
                                    )
                                }
                                type="submit"
                                className={`bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 ${
                                    !(
                                        user.name !== name ||
                                        user.email !== email
                                    ) && 'cursor-not-allowed'
                                }`}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default ProfileInfoForm;
