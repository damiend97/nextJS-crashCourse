import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href="/" className={navStyles.navLink}>Home</Link>
                </li>
                <li>
                    <Link href="/about" className={navStyles.navLink}>About</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;