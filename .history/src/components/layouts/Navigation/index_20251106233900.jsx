import { NavLink } from 'react-router';
import styles from './Navigation.module.scss';
console.log(styles);

import IconComp from '../../IconComp';

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
        icon:'fa-regular fa-chart-bar',
        title: 'Counter',
    },
    {
        to: '/products',
        icon:'fa-solid fa-cubes-stacked',
        title: 'Products',
    },
    {
        to: '/profile',
        icon:'fa-regular fa-address-card',
        title: 'Profile ',
    },
    {
        to: 'todo',
        icon:'fa-regular fa-rectangle-list',
        title: 'Todo',
    },
    {
        to: 'weather',
        icon:'fa-regular fa-cloud',
        title: 'Weather'
    }
];

function Navigation() {
    const renderNavItems = () => {
        return (
            {navItems.map((item, index) => (<li key={index} className={styles.item}>
                <NavLink 
                className={({ isActive }) => 
                isActive ? styles.active : styles.link}
                to={item.to}
                >
                <IconComp className={item.icon} />
                    {item.title}
                </NavLink>
            </li>))}
        )
    };

    return (
        <nav className={styles.navMenu}>
            <ul className={styles.list}>
                {renderNavItems()}
            </ul>
        </nav>
    );
    
}

export default Navigation;