import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import BannerEmailVerification from '../../components/BannerEmailVerification/BannerEmailVerification';
import FlashMessage from '../../components/FlashMessage/FlashMessage';
import NavBar from '../../components/Navbar/NavBar';
import { getUser } from '../../redux/user/userSelector';

type AuthProps = {
    children: ReactNode;
};

const Auth = ({ children }: AuthProps) => {
    const user = useSelector(getUser);

    return (
        <div className="h-full dark:bg-neutral-800 bg-neutral-100 dark:text-neutral-200 text-neutral-900">
            <NavBar />
            <main>
                <div className="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">{children}</div>
                </div>
            </main>
            <BannerEmailVerification user={user} />
            <FlashMessage />
        </div>
    );
};

export default Auth;
