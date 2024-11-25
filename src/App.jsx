import './global.css';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';
import Banner from './components/Banner/banner';
import Container from './components/Container/container';
import Card from './components/Card/card';
import pageAnime from './json/animes.json';
import Category from './components/Category/category';


const categories = [
  "Ação e aventura", 
  "Esportes",
  "Romance", 
  "Magia"
];

const filterCategory = (id) =>{
  return pageAnime.filter( anime => pageAnime.category === categories[id]);
}

function App () {
  return(
    <>
      <Header />
      <Banner image="Banner"/>
      <Container>
          <Category category='Ação e aventura'>
          { filterCategory("id").map((anime) => <Card id={anime.id} img={anime.img} key={anime.id}/> )}        
          </Category>

          <Category category='Esportes'>
          { filterCategory("id").map((anime) => <Card id={anime.id} img={anime.img} key={anime.id}/> )}        
          </Category>

          <Category category='Romance'>
          { filterCategory("id").map((anime) => <Card id={anime.id} img={anime.img} key={anime.id}/> )}        
          </Category>

          <Category category='Magia'>
          { filterCategory("id").map((anime) => <Card id={anime.id} img={anime.img} key={anime.id}/> )}        
          </Category>
      </Container>
      <Footer />
    </>
  );
}

export default App;