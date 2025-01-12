import styles from './Watch.module.css';
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Container from "../../components/Container/container";
import Category, { categories, filterCategory } from '../../components/Category/category';
import Card from '../../components/Card/card';



function Watch() {
    return(
        <>
            <Header />
            <Container>
                <Container>
                    { categories.map((category, index) =>
                        <Category category={category}>
                            { filterCategory(index).map((ctnAnime) => <Card id={ctnAnime.id} img={ctnAnime.img} key={ctnAnime.id} />)}
                        </Category>
                    )}
                </Container>
            </Container>
            <Footer />
        </>
    )
};

export default Watch;