import styles from './Banner.module.css';

export default function Banner({ image }){
    return (
        <>
            <div 
                className={styles.banner}
                style={ { backgroundImage: `url('/images/animes${image}.png')`} }
            >

            </div>
        </>
    )
}