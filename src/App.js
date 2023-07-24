import './App.css';
import About from './Components/About/About';
import Banner from './Components/Banner/Banner';
import Blog from './Components/Blog/Blog';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import PetCollection from './Components/Pets/PetCollection';
import Services from './Components/Services/Service';
import Slider from './Components/Slider/Slider';

function App() {
  return (
    <>
      <Header/>
      <Slider/>
      <About/>
      <Services/>
      <PetCollection/>
      <Banner/>
      <Blog/>
      <Footer/>
    </>
  );
}

export default App;
