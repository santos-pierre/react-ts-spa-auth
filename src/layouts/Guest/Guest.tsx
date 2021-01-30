import { ReactNode } from 'react';

type GuestProps = {
    children: ReactNode;
};

const Guest = ({ children }: GuestProps) => {
    return (
        <div className="flex flex-col justify-center min-h-screen py-12 bg-gray-50 dark:bg-neutral-800 text-neutral-900 sm:px-6 lg:px-8">
            {children}
        </div>
    );
};

export default Guest;
