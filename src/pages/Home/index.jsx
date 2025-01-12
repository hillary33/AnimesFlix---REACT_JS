import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';
import Banner from '../../components/Banner/banner';
import styles from './Home.module.css';

function Home() {
return(
    <>
        <Header />
        <Banner image="Banner"/>
        <div className={styles.box}>
            <h1>Venha assistir seus animes favoritos com o AnimesFlix</h1>
            <p>Faça um perfil para que possa gerenciar sua conta e receber sugestões para assistir outros conteudos</p>
        </div>
        <Footer />
    </>
);
}

export default Home;