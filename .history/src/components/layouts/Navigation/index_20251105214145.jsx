import { Link, NavLink } from 'react-router';
import styles from './Navigation.module.scss';

const navItems = [
    {
        to: '/',
        title: "Home",
    },
    {
        to: '/comments',
        title: '/Comments',
    },
    {
        to: '/counter',
        title: 'Counter',
    },
    {
        to: '/products',
        title: 'Products',
    },
    {
        to: '/profile',
        title: 'Profile ',
    },
    {
        to: 'todo',
        title: 'Todo',
    },
    {
        to: 'weather',
        title: 'Weather'
    }
];

function Navigation() {
    const renderNavItems = () => {
        return (
            navItems.map(() => <li key={index}>

            </li>)
        )
    };

    return (
        <nav>
            <ul>
                {renderNavItems}
            </ul>
        </nav>
    );
    
}

export default Navigation;