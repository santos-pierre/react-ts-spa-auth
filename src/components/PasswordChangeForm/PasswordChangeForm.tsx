import { useState } from 'react';
import { useDispatch } from 'react-redux';
import userClient from '../../api/users/usersClient';
import { setNotification } from '../../redux/notification/notificationAction';
import InputForm from '../InputForm/Inputform';

type ErrorsType = {
    current_password: Array<string> | undefined;
    password: Array<string> | undefined;
};

const PasswordChangeForm = () => {
    const dispatch = useDispatch();

    const [currentPassword, setCurrentPassword] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordConfirmation, setPasswordConfirmation] = useState<string>(
        ''
    );
    const [errors, setErrors] = useState<ErrorsType>();

    const updatePassword = async (e: React.FormEvent<HTMLFormElement>) => {
        setErrors({ current_password: [], password: [] });
        e.preventDefault();
        try {
            await userClient.updatePassword({
                current_password: currentPassword,
                password: password,
                password_confirmation: passwordConfirmation,
            });
            dispatch(
                setNotification({
                    message: 'Password Changed',
                    status: 'SUCCESS',
                    show: true,
                })
            );
            setCurrentPassword('');
            setPassword('');
            setPasswordConfirmation('');
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
        <div className="mt-5 space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
            <section aria-labelledby="payment_details_heading">
                <form onSubmit={updatePassword}>
                    <div className="shadow sm:rounded-md sm:overflow-hidden">
                        <div className="px-4 py-6 bg-white dark:bg-neutral-700 sm:p-6 text-neutral-900 dark:text-neutral-200">
                            <div>
                                <h2
                                    id="payment_details_heading"
                                    className="text-lg font-medium leading-6"
                                >
                                    Update Password
                                </h2>
                            </div>
                            <div className="grid grid-cols-4 gap-6 mt-6">
                                <InputForm
                                    name="current_password"
                                    label="Current Password"
                                    type="password"
                                    value={currentPassword}
                                    handleValue={setCurrentPassword}
                                    wrapperStyle="col-span-4 sm:col-span-12"
                                    error={
                                        errors && errors.current_password
                                            ? errors.current_password[0]
                                            : undefined
                                    }
                                />
                                <div className="hidden sm:col-span-2"></div>
                                <InputForm
                                    name="password"
                                    label="new password"
                                    type="password"
                                    value={password}
                                    handleValue={setPassword}
                                    wrapperStyle="col-span-4 sm:col-span-12"
                                    error={
                                        errors && errors.password
                                            ? errors.password[0]
                                            : undefined
                                    }
                                />
                                <InputForm
                                    name="password_confirmation"
                                    label="password confirmation"
                                    type="password"
                                    value={passwordConfirmation}
                                    handleValue={setPasswordConfirmation}
                                    wrapperStyle="col-span-4 sm:col-span-12"
                                />
                            </div>
                        </div>
                        <div className="px-4 py-3 text-right bg-neutral-50 dark:bg-neutral-600 sm:px-6">
                            <button
                                type="submit"
                                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm dark:bg-primary-600 bg-primary-500 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-700"
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

export default PasswordChangeForm;
