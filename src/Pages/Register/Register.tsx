import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import userClient from '../../api/users/usersClient';
import ButtonForm from '../../components/ButtonForm/ButtonForm';
import HeaderForm from '../../components/HeaderForm/HeaderForm';
import InputForm from '../../components/InputForm/Inputform';
import { getRoute } from '../../routes/routes';

type ErrorsType = {
    email: Array<string> | undefined;
    name: Array<string> | undefined;
    password: Array<string> | undefined;
};

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [errors, setErrors] = useState<ErrorsType>();
    const history = useHistory();

    const register = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrors({ email: [], name: [], password: [] });
        try {
            if (email.trim() && password.trim() && name.trim()) {
                await userClient.registerUser({
                    name: name,
                    email: email,
                    password: password,
                    password_confirmation: passwordConfirmation,
                });
                history.push(getRoute('home').path);
            }
        } catch ({ errors, status }) {
            if (status === 422) {
                setErrors(errors);
            }
        }
    };

    return (
        <div className="flex flex-col justify-center min-h-screen py-12 bg-gray-50 sm:px-6 lg:px-8">
            <HeaderForm
                title="Create your account"
                subTitle="Log in with an existing account"
                link={getRoute('login').path}
            />
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
                    <form onSubmit={register} className="space-y-6">
                        <InputForm
                            label="name"
                            name="name"
                            type="text"
                            value={name}
                            placeholder="John Doe"
                            handleValue={setName}
                            error={
                                errors && errors.name
                                    ? errors.name[0]
                                    : undefined
                            }
                        />
                        <InputForm
                            label="email"
                            name="email"
                            type="email"
                            value={email}
                            placeholder="test@test.com"
                            handleValue={setEmail}
                            error={
                                errors && errors.email
                                    ? errors.email[0]
                                    : undefined
                            }
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
                        <ButtonForm>
                            <span>Register</span>
                        </ButtonForm>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
