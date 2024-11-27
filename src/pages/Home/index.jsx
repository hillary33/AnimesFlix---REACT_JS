import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';
import Banner from '../../components/Banner/banner';
import Container from '../../components/Container/container';
import Category, { categories, filterCategory } from '../../components/Category/category';
import Card from '../../components/Card/card';



function Home() {
return(
    <>
        <Header />
        <Banner image="Banner01"/>
        <Container>
            { categories.map((category, index) =>
                <Category category={category}>
                    { filterCategory(index).map((ctnAnime) => <Card id={ctnAnime.id} img={ctnAnime.img} key={ctnAnime.id} />)}
                </Category>
            )}
        </Container>
        <Footer />
    </>
);
}

export default Home;