import { ApiClient } from './../APIClient';

let client = new ApiClient(process.env.REACT_APP_API_URL);

type LoginPayload = {
    email: string;
    password: string;
};

type ForgotPasswordPayload = {
    email: string;
};

type ResetPasswordPayload = {
    token: string | null;
    email: string;
    password: string;
    password_confirmation: string;
};

type UpdatePasswordPayload = {
    current_password: string;
    password: string;
    password_confirmation: string;
};

type RegisterUserPayload = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
};

type SendEmailVerificationPayload = {
    email: string;
};

type UpdateUserPayload = {
    name: string;
    email: string;
};

const userClient = {
    async login(payload: LoginPayload) {
        await client.get('/sanctum/csrf-cookie');
        await client.post('/login', payload);
    },
    async logout() {
        return await client.post('/logout');
    },
    async forgotPassword(payload: ForgotPasswordPayload) {
        await client.get('/sanctum/csrf-cookie');
        await client.post('/forgot-password', payload);
    },
    async getAuthUser() {
        return await client.get('api/user');
    },
    async resetPassword(payload: ResetPasswordPayload) {
        await client.get('/sanctum/csrf-cookie');
        await client.post('/reset-password', payload);
    },
    async updatePassword(payload: UpdatePasswordPayload) {
        await client.put('/user/password', payload);
    },
    async registerUser(payload: RegisterUserPayload) {
        await client.get('/sanctum/csrf-cookie');
        await client.post('/register', payload);
    },
    async sendVerification(payload: SendEmailVerificationPayload | {}) {
        await client.post('/email/verification-notification', payload);
    },
    async updateUser(payload: UpdateUserPayload) {
        await client.put('/user/profile-information', payload);
    },
};

export default userClient;
