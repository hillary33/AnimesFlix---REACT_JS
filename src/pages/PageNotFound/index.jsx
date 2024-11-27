    import styles from './PageNotFound.module.css';
    import Header from '../../components/Header/header';
    import Footer from '../../components/Footer/footer';

    function PageNotFound() {
        return(
        <>
        <Header/>
        <section className={styles.container}>
            <h2>Ops, página não encontrada</h2>
            <img src="https://png.pngtree.com/png-vector/20200313/ourlarge/pngtree-page-not-found-error-404-concept-with-people-trying-to-fix-png-image_2157908.jpg" alt="pagina não encontrada" />
        </section>
        <Footer />
        </>   
        );
    };

    export default PageNotFound;