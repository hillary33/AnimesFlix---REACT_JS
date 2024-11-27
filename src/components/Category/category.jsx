import ctnPage from '../../json/animes.json';
import styles from './Category.module.css';

export const categories = [
    "Ação e Aventura", 
    "Magia",
    "Romance", 
    "Comédia",
    "Esportes",
    "Super Poderes", 
    "Escolar", 
    "Mistério", 
    "Terror",
    "Fantasia"
  ];
  
export function filterCategory(id) {
    return ctnPage.filter( ctnAnime => ctnAnime.category === categories[id]);
}

function Category ({category, children}){
    return (
        <>
        <section className={styles.category}>
            <h2>{category}</h2>
            <section>
                {children}
            </section>
        </section>
        </>
    )
}

export default Category;