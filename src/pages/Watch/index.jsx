import styles from './Watch.module.css';
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Container from "../../components/Container/container";

function Watch() {
    return(
        <>
            <Header />
            <Container>
                <section className={styles.watch}>
                    <h1>Acesso</h1>
                </section>
            </Container>
            <Footer />
        </>
    )
};

export default Watch;