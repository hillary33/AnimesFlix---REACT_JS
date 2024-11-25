import styles from './Card.module.css';

function Card({ id, img }) {
    return (
        <>
            <section className={styles.card}>
                <a href={`https://animesonlinecc.to/anime/${id}`}
                    rel='noreferrer noopener'
                    target="_blank">

                    <img src={img} />
                </a>
            </section>
        </>
    )
}

export default Card;