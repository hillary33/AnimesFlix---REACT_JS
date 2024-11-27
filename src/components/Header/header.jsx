import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header(){

    return(
    <>
        <header className={styles.header}>
        <Link to="/"> <span> AnimesFlix </span></Link>
        <nav className={styles.menu}>
            <Link to='/'>Home</Link>
            <Link to='/watch'>Assistir</Link>
        </nav>
        </header>
    </>
    )
}