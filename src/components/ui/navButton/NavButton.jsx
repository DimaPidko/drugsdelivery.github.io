import { Link } from 'react-router-dom';

import styles from './NavButton.module.sass';

const NavButton = () => {
    return (
        <nav>
            <ul className={styles.nav}>
                <li className={styles.nav_link}>
                    <Link to="/">Shop</Link>
                </li>
                <li className={styles.nav_link}>
                    <Link to="/cart">Cart</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavButton;
