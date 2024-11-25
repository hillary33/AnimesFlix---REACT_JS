import styles from './Header.module.css';

export default function Header(){

    return(
    <>
        <header className={styles.header}>
        <span>AnimesFlix</span>
        <nav className={styles.menu}>
            <a href="/">Home</a>
            <a href="/assistir">Assistir</a>
        </nav>
        </header>
    </>
    )
}