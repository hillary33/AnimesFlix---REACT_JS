import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header(){

    return(
    <>
        <header className={styles.header}>
            <Link to="/" className={styles.logo}> AnimesFlix </Link>
            <nav className={styles.menu}> 
                <Link to='/' className={styles.rota}>Home</Link>
                <Link to='/watch' className={styles.rota}>Catálogo</Link>
                <Link to='/profile' className={styles.rota}>Profile</Link>
            </nav>
        </header>
    </>
    )
}