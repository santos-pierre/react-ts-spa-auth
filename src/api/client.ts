import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

const getClient = (baseURL?: string): AxiosInstance => {
    const options = {
        baseURL: baseURL ? baseURL : undefined,
        withCredentials: true,
        headers: {
            Accept: 'application/json',
        },
    };

    let client = axios.create(options);

    const handleResponse = (response: AxiosResponse) => {
        return Promise.resolve(response);
    };

    const handleError = (error: AxiosError) => {
        if (error.response?.status === 422) {
            return Promise.reject({
                status: error.response.status,
                errors: error.response.data.errors,
            });
        } else {
            return Promise.reject({
                status: error.response?.status,
                message: error.response?.data.message,
            });
        }
    };

    client.interceptors.response.use(handleResponse, handleError);

    return client;
};

export { getClient };
