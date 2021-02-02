import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import usersClient from '../../api/users/usersClient';
import ButtonForm from '../../components/ButtonForm/ButtonForm';
import HeaderForm from '../../components/HeaderForm/HeaderForm';
import InputForm from '../../components/InputForm/Inputform';
import Guest from '../../layouts/Guest/Guest';
import { getRoute } from '../../routes/routes';
import { useQuery } from '../../utils/custom-hooks/useQuery';

type ErrorsType = {
    email: Array<string> | undefined;
    password: Array<string> | undefined;
};

const ResetPassword = () => {
    const query = useQuery();
    const history = useHistory();
    const [errors, setErrors] = useState<ErrorsType>();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordConfirmation, setPasswordConfirmation] = useState<string>(
        ''
    );
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const resetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrors({ email: [], password: [] });
        setIsLoading(true);
        try {
            if (password.trim() && passwordConfirmation.trim()) {
                await usersClient.resetPassword({
                    token: query.get('token'),
                    email: email,
                    password: password,
                    password_confirmation: passwordConfirmation,
                });
                history.push(getRoute('login').path);
            }
        } catch ({ errors, status }) {
            if (status === 422) {
                setErrors(errors);
            } else if (status === 429) {
                setErrors({
                    email: ['Too many request! Try again Later'],
                    password: [],
                });
            } else {
                setErrors({
                    email: ['Impossible to reach the server! Try again later'],
                    password: [],
                });
            }
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        document.title = 'Laravel React SPA - Reset Password';
    }, []);

    return (
        <Guest>
            <HeaderForm title="Reset Your Password" />
            <form
                className="flex flex-col justify-center w-full px-4 mx-auto space-y-5 xl:w-1/3 md:w-1/2"
                onSubmit={resetPassword}
            >
                <InputForm
                    label="email"
                    name="email"
                    type="email"
                    value={email}
                    placeholder="test@test.com"
                    handleValue={setEmail}
                    error={errors && errors.email ? errors.email[0] : undefined}
                />
                <InputForm
                    label="password"
                    name="password"
                    type="password"
                    value={password}
                    handleValue={setPassword}
                    error={
                        errors && errors.password
                            ? errors.password[0]
                            : undefined
                    }
                />
                <InputForm
                    label="Password Confirmation"
                    name="password_confirmation"
                    type="password"
                    value={passwordConfirmation}
                    handleValue={setPasswordConfirmation}
                />
                <ButtonForm isLoading={isLoading} full>
                    <span>Change Password</span>
                </ButtonForm>
            </form>
        </Guest>
    );
};

export default ResetPassword;
