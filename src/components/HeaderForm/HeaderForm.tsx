import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './../../logo.svg';

type HeaderFormProps = {
    title: string;
    subTitle?: string;
    link?: string;
};

const HeaderForm = ({ title, subTitle = '', link = '' }: HeaderFormProps) => {
    return (
        <div className="mb-5 sm:mx-auto sm:w-full sm:max-w-md">
            <Logo className="w-auto h-20 mx-auto" />
            <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900 capitalize">
                {title}
            </h2>
            {subTitle && (
                <p className="mt-2 text-sm text-center text-gray-600 capitalize max-w">
                    Or
                    {link ? (
                        <Link
                            to={link}
                            className="ml-1 font-medium text-indigo-600 hover:text-indigo-500"
                        >
                            {subTitle}
                        </Link>
                    ) : (
                        <span className="ml-1 font-medium text-indigo-600 hover:text-indigo-500">
                            {subTitle}
                        </span>
                    )}
                </p>
            )}
        </div>
    );
};

export default HeaderForm;
