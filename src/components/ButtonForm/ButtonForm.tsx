import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonFormProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

const ButtonForm = ({
    children,
    type = 'submit',
    ...rest
}: ButtonFormProps) => {
    return (
        <button
            {...rest}
            type={type}
            className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
            {children}
        </button>
    );
};

export default ButtonForm;
