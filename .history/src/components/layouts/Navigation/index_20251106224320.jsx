import { NavLink } from 'react-router';
import styles from './Navigation.module.scss';

const navItems = [
    {
        to: '/',
        icon: 'fa-regular fa-house',
        title: "Home",
        
    },
    {
        to: '/comments',
        icon: 'fa-regular fa-comment-dots',
        title: 'Comments',
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
            navItems.map((item, index) => <li key={index}>
                <NavLink 
                className={({ isActive }) => 
                isActive ? styles.active : ''}
                to={item.to}
                >
                
                    {item.title}
                </NavLink>
            </li>)
        )
    };

    return (
        <nav className={styles.navMenu}>
            <ul className={styles.list}>
                {renderNavItems()}
            </ul>
            <div className={styles.dot}></div>
        </nav>
    );
    
}

export default Navigation;