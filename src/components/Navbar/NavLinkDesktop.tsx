import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { NavLinkProps } from 'react-router-dom';

type NavLinkDesktopProps = React.PropsWithoutRef<NavLinkProps> &
    React.RefAttributes<HTMLAnchorElement> & {
        children: ReactNode;
    };

const NavLinkDesktop = ({ children, ...rest }: NavLinkDesktopProps) => {
    return (
        <NavLink
            {...rest}
            activeClassName="border-lightBlue-500 text-gray-900 hover:border-lightBlue-500"
            className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700"
        >
            {children}
        </NavLink>
    );
};

export default NavLinkDesktop;
