import './global.css';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';
import Banner from './components/Banner/banner';
import Container from './components/Container/container';
import Card from './components/Card/card';
import cntPage from './json/animes.json';
import Category from './components/Category/category';


const categories = [
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

function filterCategory(id) {
  return cntPage.filter( ctnAnime => ctnAnime.category === categories[id]);
}

function App () {
  return(
    <>
      <Header />
      <Banner image="Banner01"/>
      <Container>
          <Category category={categories[0]}>
          { filterCategory(0).map( ctnAnime => <Card id={ctnAnime.id} img={ctnAnime.img} key={ctnAnime.id}/> )}        
          </Category>

          <Category category={categories[1]}>
          { filterCategory(1).map((ctnAnime) => <Card id={ctnAnime.id} img={ctnAnime.img} key={ctnAnime.id}/> )}        
          </Category>

          <Category category={categories[2]}>
          { filterCategory(2).map((ctnAnime) => <Card id={ctnAnime.id} img={ctnAnime.img} key={ctnAnime.id}/> )}        
          </Category>

          <Category category={categories[3]}>
          { filterCategory(3).map((ctnAnime) => <Card id={ctnAnime.id} img={ctnAnime.img} key={ctnAnime.id}/> )}        
          </Category>

          <Category category={categories[4]}>
          { filterCategory(4).map((ctnAnime) => <Card id={ctnAnime.id} img={ctnAnime.img} key={ctnAnime.id}/> )}        
          </Category>

          <Category category={categories[5]}>
          { filterCategory(5).map((ctnAnime) => <Card id={ctnAnime.id} img={ctnAnime.img} key={ctnAnime.id}/> )}        
          </Category>
          
          <Category category={categories[6]}>
          { filterCategory(6).map((ctnAnime) => <Card id={ctnAnime.id} img={ctnAnime.img} key={ctnAnime.id}/> )}        
          </Category>

          <Category category={categories[7]}>
          { filterCategory(7).map((ctnAnime) => <Card id={ctnAnime.id} img={ctnAnime.img} key={ctnAnime.id}/> )}        
          </Category>
          
          <Category category={categories[8]}>
          { filterCategory(8).map((ctnAnime) => <Card id={ctnAnime.id} img={ctnAnime.img} key={ctnAnime.id}/> )}        

          <Category category={categories[9]}>
          { filterCategory(9).map((ctnAnime) => <Card id={ctnAnime.id} img={ctnAnime.img} key={ctnAnime.id}/> )}        
          </Category>
          </Category>
      </Container>
      <Footer />
    </>
  );
}

export default App;